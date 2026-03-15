package agent

import (
	"context"
	"encoding/json"
	"fmt"
	"strings"
	"time"

	"github.com/your-username/devdive/internal/state"
)

type TaskUpdate struct {
	ID       string `json:"id"`
	Status   string `json:"status"`
	Priority int    `json:"priority"`
	Advice   string `json:"advice"`
}

type FollowUpIssue struct {
	ParentID string   `json:"parent_id"`
	Title    string   `json:"title"`
	Body     string   `json:"body"`
	Labels   []string `json:"labels"`
}

type EvaluationResult struct {
	Updates      []TaskUpdate
	FollowUps    []FollowUpIssue
	ShouldReplan bool
	ReplanReason string
	GeneratedAt  string
}

func PlanFeatureRefresh(ctx context.Context, featurePrompt string, codebaseSummary string, current state.DevDiveState, recentCommits string) ([]state.Task, error) {
	existingTasks := formatTaskContext(current.Tasks)

	systemPrompt := strings.TrimSpace(`You are a senior software engineer and project manager.
Refresh a project plan using the README intent, current repository shape, existing task board, and recent commit history.
Respond ONLY with a JSON object. No markdown. No explanation.
The JSON object must have exactly one key: "tasks", whose value is an array of task objects.
Each task object must have exactly these keys:
- title (string)
- description (string)
- estimate_hours (number)
- design_notes (string)
- labels (array of strings)
- priority (number from 1-5, where 1 is highest priority)
Prefer 4-10 tasks. Preserve continuity with the existing board when possible.`)

	userPrompt := fmt.Sprintf(
		"README intent:\n%s\n\nCodebase summary:\n%s\n\nExisting task board:\n%s\n\nRecent commits:\n%s",
		featurePrompt,
		truncate(codebaseSummary, 2200),
		existingTasks,
		truncate(recentCommits, 1600),
	)

	content, err := runJSONCompletion(ctx, systemPrompt, userPrompt, 2800)
	if err != nil {
		return nil, err
	}

	var payload struct {
		Tasks []struct {
			Title         string   `json:"title"`
			Description   string   `json:"description"`
			EstimateHours float64  `json:"estimate_hours"`
			DesignNotes   string   `json:"design_notes"`
			Labels        []string `json:"labels"`
			Priority      int      `json:"priority"`
		} `json:"tasks"`
	}
	if err := json.Unmarshal([]byte(extractJSONObject(content)), &payload); err != nil {
		return nil, fmt.Errorf("failed to parse refreshed planner response JSON: %w; raw=%q", err, truncate(content, 400))
	}

	tasks := make([]state.Task, 0, len(payload.Tasks))
	for _, task := range payload.Tasks {
		tasks = append(tasks, state.Task{
			Title:         strings.TrimSpace(task.Title),
			Description:   strings.TrimSpace(task.Description),
			Status:        "todo",
			EstimateHours: task.EstimateHours,
			DesignNotes:   strings.TrimSpace(task.DesignNotes),
			Labels:        nonNil(task.Labels),
			Priority:      clampPriority(task.Priority),
			UpdatedAt:     time.Now().UTC().Format(time.RFC3339),
		})
	}
	return tasks, nil
}

func EvaluateProjectTasks(ctx context.Context, readme string, codebaseSummary string, diff string, tasks []state.Task) (EvaluationResult, error) {
	result := EvaluationResult{GeneratedAt: time.Now().UTC().Format(time.RFC3339)}
	if len(tasks) == 0 {
		return result, nil
	}

	systemPrompt := strings.TrimSpace(`You are a principal engineer reviewing real project progress.
Evaluate task completion and issue board quality using the README, current code summary, and latest git diff.
Respond ONLY with a JSON object. No markdown. No explanation.
The JSON object must have exactly these keys:
- updates (array of objects with id, status, priority, advice)
- follow_ups (array of objects with parent_id, title, body, labels)
- should_replan (boolean)
- replan_reason (string)
Allowed statuses are: "todo", "in_progress", "review", "rejected", "complete".
Use "review" when implementation looks close but should be checked.
Use "rejected" when the code direction conflicts with the README or task intent.
Only create follow-up issues when there is clear missing or corrective work.`)

	userPrompt := fmt.Sprintf(
		"README:\n%s\n\nCurrent code summary:\n%s\n\nLatest diff since last evaluation:\n%s\n\nCurrent tasks:\n%s",
		truncate(readme, 2400),
		truncate(codebaseSummary, 2200),
		truncate(diff, 2600),
		formatTaskContext(tasks),
	)

	content, err := runJSONCompletion(ctx, systemPrompt, userPrompt, 2600)
	if err != nil {
		return result, err
	}

	var payload struct {
		Updates      []TaskUpdate    `json:"updates"`
		FollowUps    []FollowUpIssue `json:"follow_ups"`
		ShouldReplan bool            `json:"should_replan"`
		ReplanReason string          `json:"replan_reason"`
	}
	if err := json.Unmarshal([]byte(extractJSONObject(content)), &payload); err != nil {
		return result, fmt.Errorf("failed to parse project evaluation JSON: %w; raw=%q", err, truncate(content, 400))
	}

	for i := range payload.Updates {
		payload.Updates[i].Status = normalizeTaskStatus(payload.Updates[i].Status)
		payload.Updates[i].Priority = clampPriority(payload.Updates[i].Priority)
		payload.Updates[i].Advice = truncate(strings.TrimSpace(payload.Updates[i].Advice), 240)
	}
	for i := range payload.FollowUps {
		payload.FollowUps[i].Labels = nonNil(payload.FollowUps[i].Labels)
	}

	result.Updates = payload.Updates
	result.FollowUps = payload.FollowUps
	result.ShouldReplan = payload.ShouldReplan
	result.ReplanReason = strings.TrimSpace(payload.ReplanReason)
	return result, nil
}

func formatTaskContext(tasks []state.Task) string {
	if len(tasks) == 0 {
		return "No existing tasks."
	}
	lines := make([]string, 0, len(tasks))
	for _, task := range tasks {
		lines = append(lines, fmt.Sprintf(
			"ID:%s | Title:%s | Status:%s | Priority:%d | Description:%s | Design:%s",
			task.ID,
			task.Title,
			task.Status,
			task.Priority,
			task.Description,
			task.DesignNotes,
		))
	}
	return strings.Join(lines, "\n")
}

func normalizeTaskStatus(status string) string {
	switch strings.ToLower(strings.TrimSpace(status)) {
	case "todo", "open":
		return "todo"
	case "in_progress", "in progress":
		return "in_progress"
	case "review":
		return "review"
	case "rejected":
		return "rejected"
	case "complete", "completed", "done":
		return "complete"
	default:
		return "todo"
	}
}

func clampPriority(priority int) int {
	if priority <= 0 {
		return 3
	}
	if priority > 5 {
		return 5
	}
	return priority
}
