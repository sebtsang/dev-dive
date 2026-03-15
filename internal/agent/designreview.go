package agent

import (
	"context"
	"encoding/json"
	"fmt"
	"path/filepath"
	"strings"
	"time"

	"github.com/your-username/devdive/internal/state"
)

func ReviewDesign(ctx context.Context, current state.DevDiveState, readme string, recentCommits string, changedFiles map[string]string) (state.Review, error) {
	review := state.Review{
		ReviewedAt: time.Now().UTC().Format(time.RFC3339),
		Findings:   []state.DriftFinding{},
	}
	if len(changedFiles) == 0 {
		return review, nil
	}

	planLines := make([]string, 0, len(current.Tasks))
	for _, task := range current.Tasks {
		planLines = append(planLines, fmt.Sprintf("- %s: %s", task.Title, task.DesignNotes))
	}

	fileSections := make([]string, 0, len(changedFiles))
	for path, content := range changedFiles {
		if shouldSkipReviewPath(path) {
			continue
		}
		fileSections = append(fileSections, fmt.Sprintf("--- %s ---\n%s\n", filepath.ToSlash(path), truncateLines(content, 300)))
	}

	if len(fileSections) == 0 {
		return review, nil
	}

	systemPrompt := strings.TrimSpace(`You are a senior software architect. Review the changed files against the original project plan and identify architectural drift.
Respond ONLY with a JSON object. No markdown. No explanation. No preamble.
The JSON object must have exactly one key: "findings", whose value is an array of finding objects.
Each finding object must have exactly these keys:
- file (string): the file path where drift was detected
- finding (string): one concrete description of the drift, max 150 chars
- severity (string): one of "info", "warning", "critical"
  - "info": minor deviation, no immediate action needed
  - "warning": deviation from plan that should be addressed soon
  - "critical": significant architectural mismatch that will cause problems`)

	userPrompt := fmt.Sprintf(
		"README intent:\n%s\n\nOriginal plan tasks:\n%s\n\nRecent commits:\n%s\n\nChanged files since project init:\n%s",
		truncate(readme, 2200),
		strings.Join(planLines, "\n"),
		truncate(recentCommits, 1400),
		strings.Join(fileSections, "\n"),
	)

	content, err := runJSONCompletion(ctx, systemPrompt, userPrompt, 1500)
	if err != nil {
		return state.Review{}, err
	}

	var payload struct {
		Findings []struct {
			File     string `json:"file"`
			Finding  string `json:"finding"`
			Severity string `json:"severity"`
		} `json:"findings"`
	}
	if err := json.Unmarshal([]byte(content), &payload); err != nil {
		return state.Review{}, fmt.Errorf("failed to parse design review JSON: %w; raw=%q", err, truncate(content, 400))
	}

	for _, finding := range payload.Findings {
		review.Findings = append(review.Findings, state.DriftFinding{
			File:       finding.File,
			Finding:    finding.Finding,
			Severity:   finding.Severity,
			DetectedAt: review.ReviewedAt,
		})
	}

	return review, nil
}

func truncateLines(content string, maxLines int) string {
	lines := strings.Split(content, "\n")
	if len(lines) <= maxLines {
		return content
	}
	return strings.Join(lines[:maxLines], "\n")
}

func shouldSkipReviewPath(path string) bool {
	path = filepath.ToSlash(path)
	switch {
	case strings.HasPrefix(path, ".git/"):
		return true
	case strings.HasPrefix(path, "node_modules/"):
		return true
	case strings.HasPrefix(path, "dist/"):
		return true
	case strings.Contains(path, "/dist/"):
		return true
	case strings.HasSuffix(path, ".sum"):
		return true
	case strings.HasSuffix(path, ".lock"):
		return true
	default:
		return false
	}
}
