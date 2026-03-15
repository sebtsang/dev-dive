package agent

import (
	"context"
	"fmt"
	"strings"

	"github.com/your-username/devdive/internal/state"
)

func GenerateNudge(ctx context.Context, current state.DevDiveState, trigger string) (string, error) {
	openTitles := make([]string, 0)
	openCount := 0
	for _, task := range current.Tasks {
		if task.Status == "open" || task.Status == "in_progress" {
			openCount++
			openTitles = append(openTitles, task.Title)
		}
	}

	systemPrompt := "You are a helpful dev assistant. Respond with exactly one sentence of actionable advice. No preamble. Max 120 characters."
	userPrompt := fmt.Sprintf(
		"Project: %s\nTrigger: %s\nOpen tasks: %d\nFailing CI: %t\nCurrent task titles: %s",
		current.Project.Name,
		trigger,
		openCount,
		current.CI.Status == "failing",
		strings.Join(openTitles, ", "),
	)

	content, err := runTextCompletion(ctx, systemPrompt, userPrompt, 120)
	if err != nil {
		return fallbackNudge(trigger), nil
	}

	content = strings.TrimSpace(content)
	if content == "" {
		return fallbackNudge(trigger), nil
	}
	return truncate(content, 120), nil
}

func fallbackNudge(trigger string) string {
	switch {
	case strings.Contains(strings.ToLower(trigger), "ci"):
		return "CI is failing. Fix the broken workflow before stacking more changes."
	case strings.Contains(strings.ToLower(trigger), "drift"):
		return "Review the latest architectural drift warning before it spreads across more files."
	case strings.Contains(strings.ToLower(trigger), "estimate"):
		return "This work is overrunning. Split the task and close a narrower slice first."
	default:
		return "Pick the smallest unfinished task and close it before starting a new branch of work."
	}
}
