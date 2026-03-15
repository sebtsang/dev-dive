package state

import (
	"encoding/json"
	"errors"
	"fmt"
	"os"
	"sync"
)

type CommitHook func(statePath string, commitMessage string)

var (
	fileMu     sync.Mutex
	commitHook CommitHook
)

func SetCommitHook(hook CommitHook) {
	fileMu.Lock()
	defer fileMu.Unlock()
	commitHook = hook
}

func Load(path string) (DevDiveState, error) {
	fileMu.Lock()
	defer fileMu.Unlock()
	return loadUnlocked(path)
}

func Save(path string, current DevDiveState) error {
	fileMu.Lock()
	defer fileMu.Unlock()
	return saveUnlocked(path, current)
}

func SaveWithoutCommit(path string, current DevDiveState) error {
	fileMu.Lock()
	defer fileMu.Unlock()
	return writeUnlocked(path, current)
}

func UpdateTaskStatus(path string, id string, status string) error {
	return mutate(path, "task status update", func(current *DevDiveState) error {
		for i := range current.Tasks {
			if current.Tasks[i].ID == id {
				current.Tasks[i].Status = status
				return nil
			}
		}
		return fmt.Errorf("task %q not found", id)
	})
}

func AppendNudge(path string, nudge Nudge) error {
	return mutate(path, "nudge update", func(current *DevDiveState) error {
		current.Nudges = append(current.Nudges, nudge)
		return nil
	})
}

func UpdateCI(path string, ci CI) error {
	return mutate(path, "ci update", func(current *DevDiveState) error {
		current.CI = ci
		return nil
	})
}

func AppendCommitAnalysis(path string, analysis CommitAnalysis) error {
	return mutate(path, "commit analysis update", func(current *DevDiveState) error {
		current.Commits = append(current.Commits, analysis)
		if len(current.Commits) > 50 {
			current.Commits = current.Commits[len(current.Commits)-50:]
		}
		return nil
	})
}

func AppendReview(path string, review Review) error {
	return mutate(path, "review update", func(current *DevDiveState) error {
		current.Reviews = append(current.Reviews, review)
		if len(current.Reviews) > 20 {
			current.Reviews = current.Reviews[len(current.Reviews)-20:]
		}
		return nil
	})
}

func mutate(path string, message string, apply func(*DevDiveState) error) error {
	fileMu.Lock()
	defer fileMu.Unlock()

	current, err := loadUnlocked(path)
	if err != nil {
		return err
	}
	if err := apply(&current); err != nil {
		return err
	}
	return saveUnlocked(path, current, message)
}

func loadUnlocked(path string) (DevDiveState, error) {
	var current DevDiveState

	data, err := os.ReadFile(path)
	if err != nil {
		if errors.Is(err, os.ErrNotExist) {
			return DevDiveState{}, nil
		}
		return DevDiveState{}, err
	}
	if len(data) == 0 {
		return DevDiveState{}, nil
	}
	if err := json.Unmarshal(data, &current); err != nil {
		return DevDiveState{}, err
	}
	return current, nil
}

func saveUnlocked(path string, current DevDiveState, messages ...string) error {
	if err := writeUnlocked(path, current); err != nil {
		return err
	}

	if commitHook != nil {
		message := "state update"
		if len(messages) > 0 && messages[0] != "" {
			message = messages[0]
		}
		commitHook(path, message)
	}

	return nil
}

func writeUnlocked(path string, current DevDiveState) error {
	data, err := json.MarshalIndent(current, "", "  ")
	if err != nil {
		return err
	}

	tmpPath := path + ".tmp"
	if err := os.WriteFile(tmpPath, append(data, '\n'), 0o644); err != nil {
		return err
	}
	if err := os.Rename(tmpPath, path); err != nil {
		return err
	}
	return nil
}
