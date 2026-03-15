package watchers

import (
	"bytes"
	"context"
	"log"
	"os"
	"os/exec"
	"path/filepath"
	"strconv"
	"strings"
	"sync"
	"time"

	"github.com/your-username/devdive/internal/agent"
	gh "github.com/your-username/devdive/internal/github"
	"github.com/your-username/devdive/internal/state"
)

func WatchDesign(ctx context.Context, repoPath string, statePath string) error {
	var (
		mu              sync.Mutex
		lastReviewAt    = time.Now()
		lastCommitCount = 0
		inProgress      bool
	)

	ticker := time.NewTicker(1 * time.Minute)
	defer ticker.Stop()

	check := func() {
		current, err := state.Load(statePath)
		if err != nil {
			log.Printf("design watcher failed to load state: %v", err)
			return
		}
		if strings.TrimSpace(current.InitCommit) == "" {
			return
		}

		totalCommits, err := commitsSince(ctx, repoPath, current.InitCommit)
		if err != nil {
			log.Printf("design watcher failed to count commits: %v", err)
			return
		}

		mu.Lock()
		shouldRun := !inProgress && (totalCommits-lastCommitCount >= 10 || time.Since(lastReviewAt) >= 2*time.Hour)
		if shouldRun {
			inProgress = true
		}
		mu.Unlock()

		if !shouldRun {
			return
		}

		go func(commitCount int) {
			defer func() {
				mu.Lock()
				lastReviewAt = time.Now()
				lastCommitCount = commitCount
				inProgress = false
				mu.Unlock()
			}()

			if _, err := RunDesignReviewOnce(ctx, repoPath, statePath); err != nil {
				log.Printf("design watcher review failed: %v", err)
			}
		}(totalCommits)
	}

	check()
	for {
		select {
		case <-ctx.Done():
			return nil
		case <-ticker.C:
			check()
		}
	}
}

func RunDesignReviewOnce(ctx context.Context, repoPath string, statePath string) (state.Review, error) {
	current, err := state.Load(statePath)
	if err != nil {
		return state.Review{}, err
	}
	if strings.TrimSpace(current.InitCommit) == "" {
		return state.Review{}, nil
	}

	changedFiles, err := changedFilesSince(ctx, repoPath, current.InitCommit)
	if err != nil {
		return state.Review{}, err
	}

	review, err := agent.ReviewDesign(ctx, current, changedFiles)
	if err != nil {
		return state.Review{}, err
	}
	if err := state.AppendReview(statePath, review); err != nil {
		return state.Review{}, err
	}

	hasCritical := false
	for _, finding := range review.Findings {
		if finding.Severity == "critical" {
			hasCritical = true
			break
		}
	}
	if hasCritical {
		message, err := agent.GenerateNudge(ctx, current, "critical architectural drift detected")
		if err == nil {
			_ = state.AppendNudge(statePath, state.Nudge{
				Message:   message,
				CreatedAt: time.Now().UTC().Format(time.RFC3339),
			})
		}
	}

	_ = gh.CommitState(context.Background(), strings.TrimSpace(os.Getenv("GITHUB_REPO")), statePath, "design review "+time.Now().UTC().Format(time.RFC3339))
	return review, nil
}

func commitsSince(ctx context.Context, repoPath string, initCommit string) (int, error) {
	cmd := exec.CommandContext(ctx, "git", "rev-list", "--count", initCommit+"..HEAD")
	cmd.Dir = repoPath
	output, err := cmd.Output()
	if err != nil {
		return 0, err
	}
	count, err := strconv.Atoi(strings.TrimSpace(string(output)))
	if err != nil {
		return 0, err
	}
	return count, nil
}

func changedFilesSince(ctx context.Context, repoPath string, initCommit string) (map[string]string, error) {
	cmd := exec.CommandContext(ctx, "git", "diff", "--name-only", initCommit, "HEAD")
	cmd.Dir = repoPath
	output, err := cmd.Output()
	if err != nil {
		return nil, err
	}

	files := map[string]string{}
	for _, line := range bytes.Split(bytes.TrimSpace(output), []byte{'\n'}) {
		rel := strings.TrimSpace(string(line))
		if rel == "" || shouldSkipChangedFile(rel) {
			continue
		}

		fullPath := filepath.Join(repoPath, rel)
		data, err := os.ReadFile(fullPath)
		if err != nil {
			continue
		}
		if isBinary(data) {
			continue
		}
		files[filepath.ToSlash(rel)] = string(data)
	}
	return files, nil
}

func shouldSkipChangedFile(path string) bool {
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

func isBinary(data []byte) bool {
	return bytes.IndexByte(data, 0) >= 0
}
