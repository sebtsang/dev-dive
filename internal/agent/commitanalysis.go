package agent

import (
	"context"
	"encoding/json"
	"fmt"
	"strings"
	"time"

	"github.com/your-username/devdive/internal/state"
)

func AnalyseCommit(ctx context.Context, diff string, tasks []state.Task) (state.CommitAnalysis, error) {
	analysis := state.CommitAnalysis{
		TasksUpdated:    []string{},
		TasksProgressed: []string{},
		AnalysedAt:      time.Now().UTC().Format(time.RFC3339),
	}

	diff = strings.TrimSpace(diff)
	if diff == "" {
		analysis.Summary = "No task-related changes detected."
		return analysis, nil
	}

	var taskLines []string
	for _, task := range tasks {
		taskLines = append(taskLines, fmt.Sprintf("ID: %s | Title: %s | Description: %s", task.ID, task.Title, task.Description))
	}

	systemPrompt := strings.TrimSpace(`You are a senior software engineer. Analyse a git diff and determine which development tasks it completes or progresses.
Respond ONLY with a JSON object. No markdown. No explanation. No preamble.
The JSON object must have exactly these keys:
- summary (string): one sentence describing what the commit does, max 100 chars
- tasks_updated (array of strings): task IDs that this commit fully completes
- tasks_progressed (array of strings): task IDs that this commit partially advances`)

	userPrompt := fmt.Sprintf(
		"Open tasks:\n%s\n\nGit diff (truncated to 3000 chars):\n%s",
		strings.Join(taskLines, "\n"),
		truncate(diff, 3000),
	)

	content, err := runJSONCompletion(ctx, systemPrompt, userPrompt, 1000)
	if err != nil {
		return state.CommitAnalysis{}, err
	}

	var payload struct {
		Summary         string   `json:"summary"`
		TasksUpdated    []string `json:"tasks_updated"`
		TasksProgressed []string `json:"tasks_progressed"`
	}
	if err := json.Unmarshal([]byte(content), &payload); err != nil {
		return state.CommitAnalysis{}, fmt.Errorf("failed to parse commit analysis JSON: %w; raw=%q", err, truncate(content, 400))
	}

	analysis.Summary = strings.TrimSpace(payload.Summary)
	if analysis.Summary == "" {
		analysis.Summary = "Updated code without mapping to a tracked task."
	}
	analysis.TasksUpdated = nonNil(payload.TasksUpdated)
	analysis.TasksProgressed = nonNil(payload.TasksProgressed)

	return analysis, nil
}

func nonNil(values []string) []string {
	if values == nil {
		return []string{}
	}
	return values
}
