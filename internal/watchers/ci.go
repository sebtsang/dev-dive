package watchers

import (
	"context"
	"log"
	"time"

	"github.com/your-username/devdive/internal/agent"
	gh "github.com/your-username/devdive/internal/github"
	"github.com/your-username/devdive/internal/state"
)

func WatchCI(ctx context.Context, repo string, statePath string) error {
	current, err := state.Load(statePath)
	if err != nil {
		return err
	}
	lastStatus := current.CI.Status

	ticker := time.NewTicker(60 * time.Second)
	defer ticker.Stop()

	poll := func() {
		ci, err := gh.GetLatestWorkflowRun(ctx, repo)
		if err != nil {
			log.Printf("ci watcher failed to fetch workflow run: %v", err)
			return
		}
		if err := state.UpdateCI(statePath, ci); err != nil {
			log.Printf("ci watcher failed to update state: %v", err)
		}

		if ci.Status == "failing" && lastStatus != "failing" {
			go func() {
				current, err := state.Load(statePath)
				if err != nil {
					log.Printf("ci watcher failed to load state for nudge: %v", err)
					return
				}
				message, err := agent.GenerateNudge(ctx, current, "CI is failing")
				if err != nil {
					log.Printf("ci watcher failed to generate nudge: %v", err)
					return
				}
				if err := state.AppendNudge(statePath, state.Nudge{
					Message:   message,
					CreatedAt: time.Now().UTC().Format(time.RFC3339),
				}); err != nil {
					log.Printf("ci watcher failed to append nudge: %v", err)
				}
			}()
		}
		lastStatus = ci.Status
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
