package github

import (
	"bytes"
	"context"
	"encoding/json"
	"errors"
	"fmt"
	"io"
	"net/http"
	"os"
	"strings"
	"time"

	"github.com/your-username/devdive/internal/state"
)

const baseURL = "https://api.github.com"

type Repository struct {
	FullName string `json:"full_name"`
	CloneURL string `json:"clone_url"`
	HTMLURL  string `json:"html_url"`
}

func EnsureRepo(ctx context.Context, repo string, fallbackName string) (Repository, error) {
	login, err := AuthenticatedUserLogin(ctx)
	if err != nil {
		return Repository{}, err
	}

	repo = strings.TrimSpace(repo)
	if repo == "" {
		repo = fmt.Sprintf("%s/%s", login, normalizeRepoName(fallbackName))
	}

	current, err := GetRepository(ctx, repo)
	if err == nil {
		return current, nil
	}
	if !errors.Is(err, os.ErrNotExist) {
		return Repository{}, err
	}

	owner, name, err := splitRepo(repo)
	if err != nil {
		return Repository{}, err
	}

	body := map[string]any{
		"name":      name,
		"private":   false,
		"auto_init": false,
	}

	var path string
	if owner == login {
		path = "/user/repos"
	} else {
		path = fmt.Sprintf("/orgs/%s/repos", owner)
	}

	resp, err := githubRequest(ctx, http.MethodPost, path, body)
	if err != nil {
		return Repository{}, err
	}
	defer resp.Body.Close()

	if err := expectStatus(resp, http.StatusCreated); err != nil {
		return Repository{}, err
	}

	var created Repository
	if err := json.NewDecoder(resp.Body).Decode(&created); err != nil {
		return Repository{}, err
	}
	return created, nil
}

func GetRepository(ctx context.Context, repo string) (Repository, error) {
	resp, err := githubRequest(ctx, http.MethodGet, fmt.Sprintf("/repos/%s", repo), nil)
	if err != nil {
		return Repository{}, err
	}
	defer resp.Body.Close()

	if resp.StatusCode == http.StatusNotFound {
		io.Copy(io.Discard, resp.Body)
		return Repository{}, os.ErrNotExist
	}
	if err := expectStatus(resp, http.StatusOK); err != nil {
		return Repository{}, err
	}

	var current Repository
	if err := json.NewDecoder(resp.Body).Decode(&current); err != nil {
		return Repository{}, err
	}
	return current, nil
}

func AuthenticatedUserLogin(ctx context.Context) (string, error) {
	resp, err := githubRequest(ctx, http.MethodGet, "/user", nil)
	if err != nil {
		return "", err
	}
	defer resp.Body.Close()

	if err := expectStatus(resp, http.StatusOK); err != nil {
		return "", err
	}

	var payload struct {
		Login string `json:"login"`
	}
	if err := json.NewDecoder(resp.Body).Decode(&payload); err != nil {
		return "", err
	}
	if strings.TrimSpace(payload.Login) == "" {
		return "", fmt.Errorf("github user login missing from /user response")
	}
	return payload.Login, nil
}

func CreateIssue(ctx context.Context, repo string, task state.Task) (int, string, error) {
	labels := append([]string{}, task.Labels...)
	labels = append(labels, "devdive", fmt.Sprintf("estimate:%.0fh", task.EstimateHours))

	body := map[string]any{
		"title":  task.Title,
		"body":   task.Description + "\n\n> " + task.DesignNotes,
		"labels": labels,
	}

	resp, err := githubRequest(ctx, http.MethodPost, fmt.Sprintf("/repos/%s/issues", repo), body)
	if err != nil {
		return 0, "", err
	}
	defer resp.Body.Close()

	if err := expectStatus(resp, http.StatusCreated); err != nil {
		return 0, "", err
	}

	var payload struct {
		Number  int    `json:"number"`
		HTMLURL string `json:"html_url"`
	}
	if err := json.NewDecoder(resp.Body).Decode(&payload); err != nil {
		return 0, "", err
	}
	return payload.Number, payload.HTMLURL, nil
}

func GetLatestWorkflowRun(ctx context.Context, repo string) (state.CI, error) {
	resp, err := githubRequest(ctx, http.MethodGet, fmt.Sprintf("/repos/%s/actions/runs?per_page=1", repo), nil)
	if err != nil {
		return state.CI{}, err
	}
	defer resp.Body.Close()

	if err := expectStatus(resp, http.StatusOK); err != nil {
		return state.CI{}, err
	}

	var payload struct {
		WorkflowRuns []struct {
			Conclusion *string `json:"conclusion"`
			UpdatedAt  string  `json:"updated_at"`
			HTMLURL    string  `json:"html_url"`
		} `json:"workflow_runs"`
	}
	if err := json.NewDecoder(resp.Body).Decode(&payload); err != nil {
		return state.CI{}, err
	}
	if len(payload.WorkflowRuns) == 0 {
		return state.CI{Status: "unknown"}, nil
	}

	run := payload.WorkflowRuns[0]
	status := "unknown"
	switch {
	case run.Conclusion == nil:
		status = "pending"
	case *run.Conclusion == "success":
		status = "passing"
	case *run.Conclusion == "failure":
		status = "failing"
	}

	return state.CI{
		Status:      status,
		LastRun:     run.UpdatedAt,
		WorkflowURL: run.HTMLURL,
	}, nil
}

func EnsureLabelsExist(ctx context.Context, repo string) error {
	labels := []struct {
		Name  string
		Color string
	}{
		{Name: "devdive", Color: "3B4FE0"},
		{Name: "estimate:1h", Color: "1D76DB"},
		{Name: "estimate:2h", Color: "1D76DB"},
		{Name: "estimate:4h", Color: "1D76DB"},
		{Name: "estimate:8h", Color: "1D76DB"},
		{Name: "frontend", Color: "FBCA04"},
		{Name: "backend", Color: "0E8A16"},
		{Name: "database", Color: "5319E7"},
		{Name: "auth", Color: "C2E0C6"},
		{Name: "api", Color: "BFDADC"},
		{Name: "testing", Color: "D93F0B"},
		{Name: "devops", Color: "0052CC"},
		{Name: "refactor", Color: "EDEDED"},
	}

	for _, label := range labels {
		resp, err := githubRequest(ctx, http.MethodPost, fmt.Sprintf("/repos/%s/labels", repo), map[string]string{
			"name":  label.Name,
			"color": label.Color,
		})
		if err != nil {
			return err
		}
		resp.Body.Close()
		if resp.StatusCode == http.StatusCreated || resp.StatusCode == http.StatusUnprocessableEntity {
			continue
		}
		return fmt.Errorf("failed to create label %q: %s", label.Name, resp.Status)
	}

	return nil
}

func githubRequest(ctx context.Context, method string, path string, body any) (*http.Response, error) {
	token := strings.TrimSpace(os.Getenv("GITHUB_TOKEN"))
	if token == "" {
		return nil, fmt.Errorf("GITHUB_TOKEN is required")
	}

	var reader io.Reader
	if body != nil {
		payload, err := json.Marshal(body)
		if err != nil {
			return nil, err
		}
		reader = bytes.NewReader(payload)
	}

	req, err := http.NewRequestWithContext(ctx, method, baseURL+path, reader)
	if err != nil {
		return nil, err
	}
	req.Header.Set("Accept", "application/vnd.github+json")
	req.Header.Set("Authorization", "Bearer "+token)
	req.Header.Set("X-GitHub-Api-Version", "2022-11-28")
	if body != nil {
		req.Header.Set("Content-Type", "application/json")
	}

	client := &http.Client{Timeout: 30 * time.Second}
	return client.Do(req)
}

func expectStatus(resp *http.Response, want ...int) error {
	for _, code := range want {
		if resp.StatusCode == code {
			return nil
		}
	}

	body, _ := io.ReadAll(io.LimitReader(resp.Body, 4096))
	return fmt.Errorf("github api request failed: %s: %s", resp.Status, strings.TrimSpace(string(body)))
}

func splitRepo(repo string) (string, string, error) {
	parts := strings.Split(strings.TrimSpace(repo), "/")
	if len(parts) != 2 || strings.TrimSpace(parts[0]) == "" || strings.TrimSpace(parts[1]) == "" {
		return "", "", fmt.Errorf("GITHUB_REPO must be in owner/repo format")
	}
	return parts[0], parts[1], nil
}

func normalizeRepoName(name string) string {
	name = strings.ToLower(strings.TrimSpace(name))
	name = strings.Join(strings.Fields(name), "-")
	var builder strings.Builder
	lastDash := false
	for _, r := range name {
		valid := (r >= 'a' && r <= 'z') || (r >= '0' && r <= '9') || r == '-' || r == '_' || r == '.'
		if valid {
			builder.WriteRune(r)
			lastDash = false
			continue
		}
		if !lastDash {
			builder.WriteByte('-')
			lastDash = true
		}
	}
	name = strings.Trim(builder.String(), "-.")
	if name == "" {
		return "devdive-project"
	}
	return name
}
