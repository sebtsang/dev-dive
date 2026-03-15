package watchers

import (
	"bytes"
	"context"
	"log"
	"os"
	"os/exec"
	"strings"
	"time"

	gh "github.com/your-username/devdive/internal/github"
	"github.com/your-username/devdive/internal/state"

	"github.com/your-username/devdive/internal/agent"
)

func WatchGit(ctx context.Context, repoPath string, statePath string) error {
	processed := map[string]bool{}

	current, err := state.Load(statePath)
	if err == nil {
		for _, commit := range current.Commits {
			if commit.CommitHash != "" {
				processed[commit.CommitHash] = true
			}
		}
	}

	ticker := time.NewTicker(30 * time.Second)
	defer ticker.Stop()

	poll := func() {
		cmd := exec.CommandContext(ctx, "git", "log", "--oneline", "-20")
		cmd.Dir = repoPath
		output, err := cmd.Output()
		if err != nil {
			log.Printf("git watcher failed to list commits: %v", err)
			return
		}

		lines := bytes.Split(bytes.TrimSpace(output), []byte{'\n'})
		for i := len(lines) - 1; i >= 0; i-- {
			line := strings.TrimSpace(string(lines[i]))
			if line == "" {
				continue
			}
			hash := strings.Fields(line)[0]
			if processed[hash] {
				continue
			}
			processed[hash] = true

			go analyseCommit(ctx, repoPath, statePath, hash)
		}
	}

	poll()
	for {
		select {
		case <-ctx.Done():
			return nil
		case <-ticker.C:
			poll()
		}
	}
}

func analyseCommit(ctx context.Context, repoPath string, statePath string, hash string) {
	diffOutput, err := commitDiff(ctx, repoPath, hash)
	if err != nil {
		log.Printf("git watcher failed to diff commit %s: %v", hash, err)
		return
	}

	current, err := state.Load(statePath)
	if err != nil {
		log.Printf("git watcher failed to load state: %v", err)
		return
	}

	analysis, err := agent.AnalyseCommit(ctx, string(diffOutput), current.Tasks)
	if err != nil {
		log.Printf("git watcher commit analysis failed for %s: %v", hash, err)
		return
	}

	analysis.CommitHash = hash
	analysis.AnalysedAt = time.Now().UTC().Format(time.RFC3339)

	for _, id := range analysis.TasksUpdated {
		if err := state.UpdateTaskStatus(statePath, id, "done"); err != nil {
			log.Printf("git watcher failed to mark task %s done: %v", id, err)
		}
	}
	for _, id := range analysis.TasksProgressed {
		if err := state.UpdateTaskStatus(statePath, id, "in_progress"); err != nil {
			log.Printf("git watcher failed to mark task %s in progress: %v", id, err)
		}
	}
	if err := state.AppendCommitAnalysis(statePath, analysis); err != nil {
		log.Printf("git watcher failed to append commit analysis: %v", err)
	}

	if err := gh.CommitState(context.Background(), strings.TrimSpace(os.Getenv("GITHUB_REPO")), statePath, analysis.Summary); err != nil {
		log.Printf("git watcher failed to schedule github commit: %v", err)
	}
}

func commitDiff(ctx context.Context, repoPath string, hash string) ([]byte, error) {
	// --root makes the initial commit diff against the empty tree instead of failing on hash~1.
	cmd := exec.CommandContext(ctx, "git", "show", "--format=", "--root", hash)
	cmd.Dir = repoPath
	return cmd.Output()
}
