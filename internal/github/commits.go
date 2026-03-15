package github

import (
	"context"
	"encoding/base64"
	"encoding/json"
	"errors"
	"fmt"
	"io"
	"log"
	"net/http"
	"os"
	"strings"
	"sync"
	"time"

	"github.com/your-username/devdive/internal/state"
)

type StateCommit struct {
	SHA       string `json:"sha"`
	Message   string `json:"message"`
	Timestamp string `json:"timestamp"`
}

type debouncedCommitter struct {
	mu        sync.Mutex
	timer     *time.Timer
	repo      string
	statePath string
	message   string
}

var (
	committersMu sync.Mutex
	committers   = map[string]*debouncedCommitter{}
)

func CommitState(ctx context.Context, repo string, statePath string, commitMessage string) error {
	if strings.TrimSpace(repo) == "" || strings.TrimSpace(statePath) == "" {
		return nil
	}

	key := repo + "|" + statePath

	committersMu.Lock()
	committer, ok := committers[key]
	if !ok {
		committer = &debouncedCommitter{}
		committers[key] = committer
	}
	committersMu.Unlock()

	committer.schedule(repo, statePath, commitMessage)
	return nil
}

func GetStateAtCommit(ctx context.Context, repo string, sha string) (state.DevDiveState, error) {
	resp, err := githubRequest(ctx, http.MethodGet, fmt.Sprintf("/repos/%s/contents/devdive.json?ref=%s", repo, sha), nil)
	if err != nil {
		return state.DevDiveState{}, err
	}
	defer resp.Body.Close()

	if err := expectStatus(resp, http.StatusOK); err != nil {
		return state.DevDiveState{}, err
	}

	var payload struct {
		Content string `json:"content"`
	}
	if err := json.NewDecoder(resp.Body).Decode(&payload); err != nil {
		return state.DevDiveState{}, err
	}

	decoded, err := base64.StdEncoding.DecodeString(strings.ReplaceAll(payload.Content, "\n", ""))
	if err != nil {
		return state.DevDiveState{}, err
	}

	var current state.DevDiveState
	if err := json.Unmarshal(decoded, &current); err != nil {
		return state.DevDiveState{}, err
	}
	return current, nil
}

func ListStateCommits(ctx context.Context, repo string) ([]StateCommit, error) {
	resp, err := githubRequest(ctx, http.MethodGet, fmt.Sprintf("/repos/%s/commits?path=devdive.json&per_page=20", repo), nil)
	if err != nil {
		return nil, err
	}
	defer resp.Body.Close()

	if err := expectStatus(resp, http.StatusOK); err != nil {
		return nil, err
	}

	var payload []struct {
		SHA    string `json:"sha"`
		Commit struct {
			Message string `json:"message"`
			Author  struct {
				Date string `json:"date"`
			} `json:"author"`
		} `json:"commit"`
	}
	if err := json.NewDecoder(resp.Body).Decode(&payload); err != nil {
		return nil, err
	}

	commits := make([]StateCommit, 0, len(payload))
	for _, item := range payload {
		commits = append(commits, StateCommit{
			SHA:       item.SHA,
			Message:   item.Commit.Message,
			Timestamp: item.Commit.Author.Date,
		})
	}
	return commits, nil
}

func (d *debouncedCommitter) schedule(repo string, statePath string, message string) {
	d.mu.Lock()
	defer d.mu.Unlock()

	d.repo = repo
	d.statePath = statePath
	d.message = message

	if d.timer != nil {
		d.timer.Stop()
	}
	d.timer = time.AfterFunc(2*time.Second, d.flush)
}

func (d *debouncedCommitter) flush() {
	d.mu.Lock()
	repo := d.repo
	statePath := d.statePath
	message := d.message
	d.timer = nil
	d.mu.Unlock()

	if err := commitNow(context.Background(), repo, statePath, message); err != nil {
		log.Printf("devdive github commit failed: %v", err)
	}
}

func commitNow(ctx context.Context, repo string, statePath string, commitMessage string) error {
	data, err := os.ReadFile(statePath)
	if err != nil {
		return err
	}

	currentSHA, err := currentFileSHA(ctx, repo)
	if err != nil && !errors.Is(err, os.ErrNotExist) {
		return err
	}

	payload := map[string]any{
		"message": normalizeCommitMessage(commitMessage),
		"content": base64.StdEncoding.EncodeToString(data),
	}
	if currentSHA != "" {
		payload["sha"] = currentSHA
	}

	resp, err := githubRequest(ctx, http.MethodPut, fmt.Sprintf("/repos/%s/contents/devdive.json", repo), payload)
	if err != nil {
		return err
	}
	defer resp.Body.Close()

	if currentSHA == "" {
		return expectStatus(resp, http.StatusCreated)
	}
	return expectStatus(resp, http.StatusOK)
}

func currentFileSHA(ctx context.Context, repo string) (string, error) {
	resp, err := githubRequest(ctx, http.MethodGet, fmt.Sprintf("/repos/%s/contents/devdive.json", repo), nil)
	if err != nil {
		return "", err
	}
	defer resp.Body.Close()

	if resp.StatusCode == http.StatusNotFound {
		io.Copy(io.Discard, resp.Body)
		return "", os.ErrNotExist
	}
	if err := expectStatus(resp, http.StatusOK); err != nil {
		return "", err
	}

	var payload struct {
		SHA string `json:"sha"`
	}
	if err := json.NewDecoder(resp.Body).Decode(&payload); err != nil {
		return "", err
	}
	return payload.SHA, nil
}

func normalizeCommitMessage(message string) string {
	message = strings.TrimSpace(message)
	if message == "" {
		message = "state update"
	}
	if strings.HasPrefix(message, "devdive:") {
		return message
	}
	return "devdive: " + message
}
