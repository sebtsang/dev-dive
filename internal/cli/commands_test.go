package cli

import (
	"context"
	"encoding/json"
	"os"
	"os/exec"
	"path/filepath"
	"testing"

	"github.com/your-username/devdive/internal/state"
)

func TestHasLocalGitInitialization(t *testing.T) {
	t.Run("returns false when .git is missing", func(t *testing.T) {
		repoPath := t.TempDir()

		ok, err := hasLocalGitInitialization(context.Background(), repoPath)
		if err != nil {
			t.Fatalf("hasLocalGitInitialization returned error: %v", err)
		}
		if ok {
			t.Fatalf("expected repo without .git to be uninitialised")
		}
	})

	t.Run("returns true for a valid git repository", func(t *testing.T) {
		repoPath := t.TempDir()
		cmd := exec.Command("git", "init")
		cmd.Dir = repoPath
		if output, err := cmd.CombinedOutput(); err != nil {
			t.Fatalf("git init failed: %v: %s", err, output)
		}

		ok, err := hasLocalGitInitialization(context.Background(), repoPath)
		if err != nil {
			t.Fatalf("hasLocalGitInitialization returned error: %v", err)
		}
		if !ok {
			t.Fatalf("expected valid repository to be initialised")
		}
	})

	t.Run("returns false for a broken .git marker", func(t *testing.T) {
		repoPath := t.TempDir()
		gitPath := filepath.Join(repoPath, ".git")
		if err := os.WriteFile(gitPath, []byte("not-a-real-gitdir"), 0o644); err != nil {
			t.Fatalf("WriteFile(%s): %v", gitPath, err)
		}

		ok, err := hasLocalGitInitialization(context.Background(), repoPath)
		if err != nil {
			t.Fatalf("hasLocalGitInitialization returned error: %v", err)
		}
		if ok {
			t.Fatalf("expected broken .git marker to be treated as uninitialised")
		}
	})

	t.Run("checks the current folder instead of a parent repository", func(t *testing.T) {
		parentRepo := t.TempDir()
		cmd := exec.Command("git", "init")
		cmd.Dir = parentRepo
		if output, err := cmd.CombinedOutput(); err != nil {
			t.Fatalf("git init failed: %v: %s", err, output)
		}

		childPath := filepath.Join(parentRepo, "child")
		if err := os.Mkdir(childPath, 0o755); err != nil {
			t.Fatalf("Mkdir(%s): %v", childPath, err)
		}

		ok, err := hasLocalGitInitialization(context.Background(), childPath)
		if err != nil {
			t.Fatalf("hasLocalGitInitialization returned error: %v", err)
		}
		if ok {
			t.Fatalf("expected child folder without local .git to be uninitialised")
		}
	})
}

func TestParseGitHubRepo(t *testing.T) {
	t.Run("parses ssh github remotes", func(t *testing.T) {
		repo, ok := parseGitHubRepo("git@github.com:octocat/hello-world.git")
		if !ok {
			t.Fatalf("expected ssh remote to be parsed")
		}
		if repo != "octocat/hello-world" {
			t.Fatalf("unexpected repo: %s", repo)
		}
	})

	t.Run("parses https github remotes", func(t *testing.T) {
		repo, ok := parseGitHubRepo("https://github.com/octocat/hello-world.git")
		if !ok {
			t.Fatalf("expected https remote to be parsed")
		}
		if repo != "octocat/hello-world" {
			t.Fatalf("unexpected repo: %s", repo)
		}
	})

	t.Run("rejects non github remotes", func(t *testing.T) {
		if _, ok := parseGitHubRepo("https://example.com/octocat/hello-world.git"); ok {
			t.Fatalf("expected non-github remote to be rejected")
		}
	})
}

func TestRepoFromLocalState(t *testing.T) {
	repoPath := filepath.Join(t.TempDir(), "devdive.json")
	current := state.DevDiveState{
		Project: state.Project{Repo: "timothytenzin20/dev-dive"},
	}
	data, err := json.Marshal(current)
	if err != nil {
		t.Fatalf("Marshal: %v", err)
	}
	if err := os.WriteFile(repoPath, data, 0o644); err != nil {
		t.Fatalf("WriteFile: %v", err)
	}

	repo, err := repoFromLocalState(repoPath)
	if err != nil {
		t.Fatalf("repoFromLocalState returned error: %v", err)
	}
	if repo != "timothytenzin20/dev-dive" {
		t.Fatalf("unexpected repo: %s", repo)
	}
}

func TestIssueNumberFromURL(t *testing.T) {
	if got := issueNumberFromURL("https://github.com/octocat/hello-world/issues/42"); got != "42" {
		t.Fatalf("unexpected issue number: %s", got)
	}
	if got := issueNumberFromURL("https://github.com/octocat/hello-world/issues/42/"); got != "42" {
		t.Fatalf("unexpected issue number with trailing slash: %s", got)
	}
	if got := issueNumberFromURL(""); got != "" {
		t.Fatalf("expected empty issue number, got: %s", got)
	}
}
