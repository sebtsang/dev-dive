package main

import (
	"context"
	"errors"
	"fmt"
	"os"
	"os/exec"
	"os/signal"
	"path/filepath"
	"runtime"
	"strings"
	"syscall"
	"time"

	"github.com/charmbracelet/lipgloss"
	"github.com/joho/godotenv"
	"github.com/spf13/cobra"

	"github.com/your-username/devdive/internal/agent"
	gh "github.com/your-username/devdive/internal/github"
	"github.com/your-username/devdive/internal/scanner"
	"github.com/your-username/devdive/internal/server"
	"github.com/your-username/devdive/internal/state"
	"github.com/your-username/devdive/internal/watchers"
)

var (
	titleStyle   = lipgloss.NewStyle().Bold(true).Foreground(lipgloss.Color("12"))
	headerStyle  = lipgloss.NewStyle().Bold(true).Foreground(lipgloss.Color("14"))
	errorStyle   = lipgloss.NewStyle().Bold(true).Foreground(lipgloss.Color("9"))
	successStyle = lipgloss.NewStyle().Bold(true).Foreground(lipgloss.Color("10"))
	mutedStyle   = lipgloss.NewStyle().Foreground(lipgloss.Color("8"))
)

func main() {
	var statePath string
	var fromReadme bool
	var rollbackSHA string

	rootCmd := &cobra.Command{
		Use:           "devdive",
		SilenceErrors: true,
		SilenceUsage:  true,
	}
	rootCmd.PersistentFlags().StringVar(&statePath, "state", "./devdive.json", "path to state file")

	initCmd := &cobra.Command{
		Use:  "init [feature prompt]",
		Args: cobra.ArbitraryArgs,
		RunE: func(cmd *cobra.Command, args []string) error {
			if err := godotenv.Load(); err != nil {
				return err
			}

			summary, err := scanner.Summarise(".")
			if err != nil {
				return err
			}

			prompt := strings.TrimSpace(strings.Join(args, " "))
			if fromReadme {
				data, err := os.ReadFile("README.md")
				if err != nil {
					return err
				}
				prompt = string(data)
			}
			if prompt == "" {
				return fmt.Errorf("feature prompt is required unless --from-readme is set")
			}

			ctx, stop := signal.NotifyContext(cmd.Context(), os.Interrupt, syscall.SIGTERM)
			defer stop()

			wd, err := os.Getwd()
			if err != nil {
				return err
			}

			repository, err := gh.EnsureRepo(ctx, strings.TrimSpace(os.Getenv("GITHUB_REPO")), filepath.Base(wd))
			if err != nil {
				return err
			}
			repo := repository.FullName
			configureCommitHook(repo)

			if err := ensureLocalGitRepository(ctx, wd, repository.CloneURL); err != nil {
				return err
			}

			tasks, err := agent.PlanFeature(ctx, prompt, summary)
			if err != nil {
				return err
			}
			if err := gh.EnsureLabelsExist(ctx, repo); err != nil {
				return err
			}

			for i := range tasks {
				number, issueURL, err := gh.CreateIssue(ctx, repo, tasks[i])
				if err != nil {
					return err
				}
				tasks[i].ID = fmt.Sprintf("%d", number)
				tasks[i].IssueURL = issueURL
				tasks[i].Status = "open"
			}

			headSHA, err := gitHeadSHA(ctx, ".")
			if err != nil {
				return err
			}

			current := state.DevDiveState{
				Meta: map[string]string{"version": "1.0"},
				Project: state.Project{
					Name:      filepath.Base(wd),
					Repo:      repo,
					CreatedAt: time.Now().UTC().Format(time.RFC3339),
				},
				Tasks:      tasks,
				CI:         state.CI{Status: "unknown"},
				Nudges:     []state.Nudge{},
				Commits:    []state.CommitAnalysis{},
				Reviews:    []state.Review{},
				InitCommit: headSHA,
			}

			if err := state.Save(statePath, current); err != nil {
				return err
			}
			if err := gh.CommitState(ctx, repo, statePath, "init"); err != nil {
				return err
			}

			fmt.Println(renderInitSummary(tasks))
			return runDashboard(ctx, repo, ".", statePath)
		},
	}
	initCmd.Flags().BoolVar(&fromReadme, "from-readme", false, "infer feature from README only")

	runCmd := &cobra.Command{
		Use: "run",
		RunE: func(cmd *cobra.Command, args []string) error {
			if err := godotenv.Load(); err != nil {
				return err
			}
			if _, err := os.Stat(statePath); err != nil {
				return err
			}

			repo, err := resolveRepo(statePath)
			if err != nil {
				return err
			}
			configureCommitHook(repo)

			ctx, stop := signal.NotifyContext(cmd.Context(), os.Interrupt, syscall.SIGTERM)
			defer stop()

			return runDashboard(ctx, repo, ".", statePath)
		},
	}

	statusCmd := &cobra.Command{
		Use: "status",
		RunE: func(cmd *cobra.Command, args []string) error {
			if _, err := os.Stat(statePath); err != nil {
				return err
			}

			current, err := state.Load(statePath)
			if err != nil {
				return err
			}
			fmt.Println(renderStatus(current))
			return nil
		},
	}

	reviewCmd := &cobra.Command{
		Use: "review",
		RunE: func(cmd *cobra.Command, args []string) error {
			if err := godotenv.Load(); err != nil {
				return err
			}
			if _, err := os.Stat(statePath); err != nil {
				return err
			}

			repo, err := resolveRepo(statePath)
			if err != nil {
				return err
			}
			configureCommitHook(repo)

			ctx, stop := signal.NotifyContext(cmd.Context(), os.Interrupt, syscall.SIGTERM)
			defer stop()

			review, err := watchers.RunDesignReviewOnce(ctx, ".", statePath)
			if err != nil {
				return err
			}
			fmt.Println(renderReview(review))
			return nil
		},
	}

	rollbackCmd := &cobra.Command{
		Use: "rollback",
		RunE: func(cmd *cobra.Command, args []string) error {
			if err := godotenv.Load(); err != nil {
				return err
			}
			if strings.TrimSpace(rollbackSHA) == "" {
				return fmt.Errorf("--sha is required")
			}

			repo, err := resolveRepo(statePath)
			if err != nil {
				return err
			}
			configureCommitHook(repo)

			ctx, stop := signal.NotifyContext(cmd.Context(), os.Interrupt, syscall.SIGTERM)
			defer stop()

			current, err := gh.GetStateAtCommit(ctx, repo, rollbackSHA)
			if err != nil {
				return err
			}
			if err := state.Save(statePath, current); err != nil {
				return err
			}
			if err := gh.CommitState(ctx, repo, statePath, fmt.Sprintf("rollback to %s", rollbackSHA)); err != nil {
				return err
			}

			fmt.Println(successStyle.Render("Rolled back devdive.json to " + rollbackSHA))
			return nil
		},
	}
	rollbackCmd.Flags().StringVar(&rollbackSHA, "sha", "", "git SHA to roll back devdive.json to")

	rootCmd.AddCommand(initCmd, runCmd, statusCmd, reviewCmd, rollbackCmd)

	if err := rootCmd.Execute(); err != nil {
		fmt.Fprintln(os.Stderr, errorStyle.Render("Error: "+err.Error()))
		os.Exit(1)
	}
}

func configureCommitHook(repo string) {
	state.SetCommitHook(func(statePath string, commitMessage string) {
		_ = gh.CommitState(context.Background(), repo, statePath, commitMessage)
	})
}

func resolveRepo(statePath string) (string, error) {
	repo := strings.TrimSpace(os.Getenv("GITHUB_REPO"))
	if repo != "" {
		return repo, nil
	}

	current, err := state.Load(statePath)
	if err != nil {
		return "", err
	}
	repo = strings.TrimSpace(current.Project.Repo)
	if repo == "" {
		return "", fmt.Errorf("GITHUB_REPO is not set and no repo is stored in state")
	}
	return repo, nil
}

func runDashboard(ctx context.Context, repo string, repoPath string, statePath string) error {
	port := strings.TrimSpace(os.Getenv("DEVDIVE_PORT"))
	if port == "" {
		port = "7777"
	}

	hub := server.NewHub()
	go hub.Run()

	go func() {
		if err := server.WatchAndBroadcast(ctx, statePath, hub); err != nil && !errors.Is(err, context.Canceled) {
			fmt.Fprintln(os.Stderr, errorStyle.Render("Watcher error: "+err.Error()))
		}
	}()
	go func() {
		if err := watchers.WatchGit(ctx, repoPath, statePath); err != nil && !errors.Is(err, context.Canceled) {
			fmt.Fprintln(os.Stderr, errorStyle.Render("Git watcher error: "+err.Error()))
		}
	}()
	go func() {
		if err := watchers.WatchCI(ctx, repo, statePath); err != nil && !errors.Is(err, context.Canceled) {
			fmt.Fprintln(os.Stderr, errorStyle.Render("CI watcher error: "+err.Error()))
		}
	}()
	go func() {
		if err := watchers.WatchDesign(ctx, repoPath, statePath); err != nil && !errors.Is(err, context.Canceled) {
			fmt.Fprintln(os.Stderr, errorStyle.Render("Review watcher error: "+err.Error()))
		}
	}()

	go func() {
		time.Sleep(500 * time.Millisecond)
		openBrowser("http://localhost:" + port)
	}()

	fmt.Println(successStyle.Render("Starting dashboard at http://localhost:" + port))
	return server.Start(port, statePath, hub)
}

func gitHeadSHA(ctx context.Context, repoPath string) (string, error) {
	cmd := exec.CommandContext(ctx, "git", "rev-parse", "HEAD")
	cmd.Dir = repoPath
	output, err := cmd.Output()
	if err != nil {
		return "", err
	}
	return strings.TrimSpace(string(output)), nil
}

func ensureLocalGitRepository(ctx context.Context, repoPath string, cloneURL string) error {
	if err := ensureBootstrapGitignore(repoPath); err != nil {
		return err
	}

	if !pathExists(filepath.Join(repoPath, ".git")) {
		if err := runGit(ctx, repoPath, "init"); err != nil {
			return err
		}
		if err := runGit(ctx, repoPath, "branch", "-M", "main"); err != nil {
			return err
		}
	}

	if strings.TrimSpace(cloneURL) != "" {
		if _, err := gitOutput(ctx, repoPath, "remote", "get-url", "origin"); err != nil {
			if err := runGit(ctx, repoPath, "remote", "add", "origin", cloneURL); err != nil {
				return err
			}
		}
	}

	if _, err := gitOutput(ctx, repoPath, "config", "user.name"); err != nil {
		if err := runGit(ctx, repoPath, "config", "user.name", "DevDive"); err != nil {
			return err
		}
	}
	if _, err := gitOutput(ctx, repoPath, "config", "user.email"); err != nil {
		if err := runGit(ctx, repoPath, "config", "user.email", "devdive@local.invalid"); err != nil {
			return err
		}
	}

	if _, err := gitOutput(ctx, repoPath, "rev-parse", "--verify", "HEAD"); err == nil {
		return nil
	}

	if err := runGit(ctx, repoPath, "add", "."); err != nil {
		return err
	}
	if err := runGit(ctx, repoPath, "commit", "-m", "devdive: bootstrap"); err != nil {
		return err
	}
	return nil
}

func ensureBootstrapGitignore(repoPath string) error {
	path := filepath.Join(repoPath, ".gitignore")
	entries := []string{
		".env",
		"node_modules/",
		"web/node_modules/",
		"devdive.json",
	}

	data, err := os.ReadFile(path)
	if err != nil && !errors.Is(err, os.ErrNotExist) {
		return err
	}

	content := string(data)
	var additions []string
	for _, entry := range entries {
		if gitignoreContains(content, entry) {
			continue
		}
		additions = append(additions, entry)
	}
	if len(additions) == 0 {
		return nil
	}

	builder := strings.Builder{}
	builder.WriteString(content)
	if content != "" && !strings.HasSuffix(content, "\n") {
		builder.WriteString("\n")
	}
	builder.WriteString("\n# DevDive bootstrap\n")
	for _, entry := range additions {
		builder.WriteString(entry)
		builder.WriteString("\n")
	}

	return os.WriteFile(path, []byte(builder.String()), 0o644)
}

func gitignoreContains(content string, entry string) bool {
	for _, line := range strings.Split(content, "\n") {
		if strings.TrimSpace(line) == entry {
			return true
		}
	}
	return false
}

func runGit(ctx context.Context, repoPath string, args ...string) error {
	cmd := exec.CommandContext(ctx, "git", args...)
	cmd.Dir = repoPath
	output, err := cmd.CombinedOutput()
	if err != nil {
		return fmt.Errorf("git %s failed: %w: %s", strings.Join(args, " "), err, strings.TrimSpace(string(output)))
	}
	return nil
}

func gitOutput(ctx context.Context, repoPath string, args ...string) (string, error) {
	cmd := exec.CommandContext(ctx, "git", args...)
	cmd.Dir = repoPath
	output, err := cmd.CombinedOutput()
	if err != nil {
		return "", fmt.Errorf("git %s failed: %w: %s", strings.Join(args, " "), err, strings.TrimSpace(string(output)))
	}
	return strings.TrimSpace(string(output)), nil
}

func pathExists(path string) bool {
	_, err := os.Stat(path)
	return err == nil
}

func renderInitSummary(tasks []state.Task) string {
	var lines []string
	lines = append(lines, titleStyle.Render("DevDive Init"))
	lines = append(lines, "")
	lines = append(lines, headerStyle.Render("Tasks"))
	for _, task := range tasks {
		lines = append(lines, fmt.Sprintf("- %s (%0.1fh) %s", task.Title, task.EstimateHours, task.IssueURL))
	}
	return strings.Join(lines, "\n")
}

func renderStatus(current state.DevDiveState) string {
	var lines []string
	lines = append(lines, titleStyle.Render(current.Project.Name))
	lines = append(lines, mutedStyle.Render(current.Project.Repo))
	lines = append(lines, "")
	lines = append(lines, headerStyle.Render("Tasks"))
	for _, task := range current.Tasks {
		lines = append(lines, fmt.Sprintf("%-32s %-12s %5.1fh %s", truncateLabel(task.Title, 32), task.Status, task.EstimateHours, task.IssueURL))
	}

	lines = append(lines, "")
	lines = append(lines, headerStyle.Render("CI"))
	lines = append(lines, fmt.Sprintf("%s  %s", current.CI.Status, current.CI.WorkflowURL))

	lines = append(lines, "")
	lines = append(lines, headerStyle.Render("Recent Nudges"))
	for _, nudge := range tailNudges(current.Nudges, 3) {
		lines = append(lines, "- "+nudge.Message)
	}
	if len(current.Nudges) == 0 {
		lines = append(lines, mutedStyle.Render("No nudges yet"))
	}

	lines = append(lines, "")
	lines = append(lines, headerStyle.Render("Recent Commit Analysis"))
	for _, commit := range tailCommits(current.Commits, 3) {
		lines = append(lines, fmt.Sprintf("- %s (%s)", commit.Summary, commit.CommitHash))
	}
	if len(current.Commits) == 0 {
		lines = append(lines, mutedStyle.Render("No commits analysed yet"))
	}

	lines = append(lines, "")
	lines = append(lines, headerStyle.Render("Drift Findings"))
	if len(current.Reviews) == 0 {
		lines = append(lines, "0")
	} else {
		lines = append(lines, fmt.Sprintf("%d", len(current.Reviews[len(current.Reviews)-1].Findings)))
	}

	return strings.Join(lines, "\n")
}

func renderReview(review state.Review) string {
	var lines []string
	lines = append(lines, titleStyle.Render("Design Review"))
	lines = append(lines, mutedStyle.Render(review.ReviewedAt))
	lines = append(lines, "")
	if len(review.Findings) == 0 {
		lines = append(lines, successStyle.Render("No drift detected in latest review."))
		return strings.Join(lines, "\n")
	}
	for _, finding := range review.Findings {
		lines = append(lines, fmt.Sprintf("[%s] %s: %s", strings.ToUpper(finding.Severity), finding.File, finding.Finding))
	}
	return strings.Join(lines, "\n")
}

func tailNudges(items []state.Nudge, count int) []state.Nudge {
	if len(items) <= count {
		return items
	}
	return items[len(items)-count:]
}

func tailCommits(items []state.CommitAnalysis, count int) []state.CommitAnalysis {
	if len(items) <= count {
		return items
	}
	return items[len(items)-count:]
}

func truncateLabel(value string, max int) string {
	runes := []rune(value)
	if len(runes) <= max {
		return value
	}
	return string(runes[:max-3]) + "..."
}

func openBrowser(url string) {
	var cmd *exec.Cmd
	switch runtime.GOOS {
	case "darwin":
		cmd = exec.Command("open", url)
	case "linux":
		cmd = exec.Command("xdg-open", url)
	case "windows":
		cmd = exec.Command("cmd", "/c", "start", url)
	default:
		return
	}
	_ = cmd.Start()
}
