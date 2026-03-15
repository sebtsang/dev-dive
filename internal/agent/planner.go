package agent

import (
	"context"
	"encoding/json"
	"fmt"
	"os"
	"strings"

	openai "github.com/openai/openai-go/v3"
	"github.com/openai/openai-go/v3/option"

	"github.com/your-username/devdive/internal/state"
)

const llmModel = "openai/gpt-oss-120b"

type chatCompletionResponse struct {
	Choices []struct {
		Message struct {
			Content string `json:"content"`
		} `json:"message"`
	} `json:"choices"`
}

func PlanFeature(ctx context.Context, featurePrompt string, codebaseSummary string) ([]state.Task, error) {
	systemPrompt := strings.TrimSpace(`You are a senior software engineer and project manager.
Given a feature description and a codebase summary, decompose the feature into discrete, actionable development tasks.
Respond ONLY with a JSON object. No markdown. No explanation. No preamble.
The JSON object must have exactly one key: "tasks", whose value is an array of task objects.
Each task object must have exactly these keys:
- title (string): short imperative task title, max 60 chars
- description (string): 1-2 sentence implementation detail
- estimate_hours (number): realistic hours for a solo developer
- design_notes (string): one concrete architectural recommendation
- labels (array of strings): 1-3 GitHub label strings from: ["frontend", "backend", "database", "auth", "api", "testing", "devops", "refactor"]
Keep the response compact. Prefer 4-8 tasks unless the feature clearly requires more.`)

	attempts := []struct {
		summaryLimit int
		maxTokens    int
	}{
		{summaryLimit: 2200, maxTokens: 2400},
		{summaryLimit: 1400, maxTokens: 2800},
		{summaryLimit: 900, maxTokens: 3200},
	}

	var lastErr error
	var lastRaw string
	for _, attempt := range attempts {
		summary := truncate(codebaseSummary, attempt.summaryLimit)
		userPrompt := fmt.Sprintf("Feature: %s\n\nCodebase summary:\n%s", featurePrompt, summary)

		content, err := runJSONCompletion(ctx, systemPrompt, userPrompt, attempt.maxTokens)
		if err != nil {
			lastErr = err
			continue
		}

		payload, err := parsePlannerPayload(content)
		if err != nil {
			lastErr = err
			lastRaw = content
			continue
		}

		tasks := make([]state.Task, 0, len(payload.Tasks))
		for _, task := range payload.Tasks {
			tasks = append(tasks, state.Task{
				Title:         task.Title,
				Description:   task.Description,
				Status:        "open",
				EstimateHours: task.EstimateHours,
				DesignNotes:   task.DesignNotes,
				Labels:        task.Labels,
			})
		}

		return tasks, nil
	}

	if lastRaw != "" {
		return nil, fmt.Errorf("failed to parse planner response JSON after retries: %w; raw=%q", lastErr, truncate(lastRaw, 400))
	}
	return nil, lastErr
}

type plannerPayload struct {
	Tasks []struct {
		Title         string   `json:"title"`
		Description   string   `json:"description"`
		EstimateHours float64  `json:"estimate_hours"`
		DesignNotes   string   `json:"design_notes"`
		Labels        []string `json:"labels"`
	} `json:"tasks"`
}

func parsePlannerPayload(content string) (plannerPayload, error) {
	var payload plannerPayload
	candidate := extractJSONObject(content)
	if err := json.Unmarshal([]byte(candidate), &payload); err != nil {
		return plannerPayload{}, err
	}
	if len(payload.Tasks) == 0 {
		return plannerPayload{}, fmt.Errorf("planner returned zero tasks")
	}
	return payload, nil
}

func runJSONCompletion(ctx context.Context, systemPrompt string, userPrompt string, maxTokens int) (string, error) {
	return runCompletion(ctx, systemPrompt, userPrompt, maxTokens, true)
}

func runTextCompletion(ctx context.Context, systemPrompt string, userPrompt string, maxTokens int) (string, error) {
	return runCompletion(ctx, systemPrompt, userPrompt, maxTokens, false)
}

func runCompletion(ctx context.Context, systemPrompt string, userPrompt string, maxTokens int, jsonMode bool) (string, error) {
	apiKey := strings.TrimSpace(os.Getenv("OPENAI_API_KEY"))
	baseURL := strings.TrimSpace(os.Getenv("HF_ENDPOINT"))
	if apiKey == "" {
		return "", fmt.Errorf("OPENAI_API_KEY is required")
	}
	if baseURL == "" {
		return "", fmt.Errorf("HF_ENDPOINT is required")
	}

	client := openai.NewClient(
		option.WithAPIKey(apiKey),
		option.WithBaseURL(strings.TrimRight(baseURL, "/")),
	)

	payload := map[string]any{
		"model":      llmModel,
		"max_tokens": maxTokens,
		"messages": []map[string]string{
			{"role": "system", "content": systemPrompt},
			{"role": "user", "content": userPrompt},
		},
	}
	if jsonMode {
		payload["response_format"] = map[string]string{"type": "json_object"}
	}

	var response chatCompletionResponse
	if err := client.Post(ctx, "/chat/completions", payload, &response); err != nil {
		return "", err
	}
	if len(response.Choices) == 0 {
		return "", fmt.Errorf("LLM returned no choices")
	}

	content := strings.TrimSpace(response.Choices[0].Message.Content)
	if content == "" {
		return "", fmt.Errorf("LLM returned empty content")
	}
	return content, nil
}

func extractJSONObject(content string) string {
	content = strings.TrimSpace(content)
	content = strings.TrimPrefix(content, "```json")
	content = strings.TrimPrefix(content, "```")
	content = strings.TrimSuffix(content, "```")
	content = strings.TrimSpace(content)

	start := strings.Index(content, "{")
	end := strings.LastIndex(content, "}")
	if start >= 0 && end > start {
		return content[start : end+1]
	}
	return content
}

func truncate(value string, max int) string {
	if max <= 0 || len(value) <= max {
		return value
	}
	return value[:max]
}
