package cli

import (
	"bufio"
	"bytes"
	"context"
	"encoding/json"
	"errors"
	"flag"
	"fmt"
	"io"
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

func NewRootCommand() *cobra.Command {
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
			return ExecuteInit(cmd.Context(), statePath, fromReadme, args)
		},
	}
	initCmd.Flags().BoolVar(&fromReadme, "from-readme", false, "infer feature from README only")

	runCmd := &cobra.Command{
		Use: "run",
		RunE: func(cmd *cobra.Command, args []string) error {
			return ExecuteRun(cmd.Context(), statePath)
		},
	}

	syncCmd := &cobra.Command{
		Use: "sync",
		RunE: func(cmd *cobra.Command, args []string) error {
			return ExecuteSync(cmd.Context(), statePath)
		},
	}

	statusCmd := &cobra.Command{
		Use: "status",
		RunE: func(cmd *cobra.Command, args []string) error {
			return ExecuteStatus(cmd.Context(), statePath)
		},
	}

	reviewCmd := &cobra.Command{
		Use: "review",
		RunE: func(cmd *cobra.Command, args []string) error {
			return ExecuteReview(cmd.Context(), statePath)
		},
	}

	rollbackCmd := &cobra.Command{
		Use: "rollback",
		RunE: func(cmd *cobra.Command, args []string) error {
			return ExecuteRollback(cmd.Context(), statePath, rollbackSHA)
		},
	}
	rollbackCmd.Flags().StringVar(&rollbackSHA, "sha", "", "git SHA to roll back devdive.json to")

	rootCmd.AddCommand(initCmd, runCmd, syncCmd, statusCmd, reviewCmd, rollbackCmd)
	return rootCmd
}

func ExecuteInit(parent context.Context, statePath string, fromReadme bool, args []string) error {
	if err := loadDotEnvIfPresent(); err != nil {
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

	ctx, stop := signal.NotifyContext(parent, os.Interrupt, syscall.SIGTERM)
	defer stop()

	wd, err := os.Getwd()
	if err != nil {
		return err
	}

	localGitInitialised, err := hasLocalGitInitialization(ctx, wd)
	if err != nil {
		return err
	}

	repository, err := resolveInitRepository(ctx, wd, statePath, localGitInitialised)
	if err != nil {
		return err
	}
	repo := repository.FullName

	if err := gh.EnsureRepoAccessible(ctx, repo); err != nil {
		return err
	}

	if localGitInitialised {
		action, remoteState, err := confirmInitOverwrite(ctx, repo, statePath)
		if err != nil {
			return err
		}
		if action == "run" {
			if remoteState != nil {
				if err := state.Save(statePath, *remoteState); err != nil {
					return err
				}
			}
			return ExecuteRun(parent, statePath)
		}
	}

	if err := ensureLocalGitRepository(ctx, wd, repository.CloneURL); err != nil {
		return err
	}
	configureCommitHook(repo)

	summary, err := scanner.Summarise(".")
	if err != nil {
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
}

func ExecuteRun(parent context.Context, statePath string) error {
	if err := loadDotEnvIfPresent(); err != nil {
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

	if err := ExecuteSync(parent, statePath); err != nil {
		return err
	}

	ctx, stop := signal.NotifyContext(parent, os.Interrupt, syscall.SIGTERM)
	defer stop()

	return runDashboard(ctx, repo, ".", statePath)
}

func ExecuteSync(parent context.Context, statePath string) error {
	if err := loadDotEnvIfPresent(); err != nil {
		return err
	}
	if _, err := os.Stat(statePath); err != nil {
		return err
	}

	repo, err := resolveRepo(statePath)
	if err != nil {
		return err
	}

	changed, err := syncGitHubIssueStatuses(parent, repo, statePath)
	if err != nil {
		return err
	}
	if changed {
		fmt.Println(successStyle.Render("Synced task statuses from GitHub issues."))
	} else {
		fmt.Println(mutedStyle.Render("Already in sync with GitHub issues."))
	}
	return nil
}

func ExecuteStatus(parent context.Context, statePath string) error {
	if err := ExecuteSync(parent, statePath); err != nil {
		return err
	}

	current, err := state.Load(statePath)
	if err != nil {
		return err
	}
	fmt.Println(renderStatus(current))
	return nil
}

func ExecuteReview(parent context.Context, statePath string) error {
	if err := loadDotEnvIfPresent(); err != nil {
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

	ctx, stop := signal.NotifyContext(parent, os.Interrupt, syscall.SIGTERM)
	defer stop()

	review, err := watchers.RunDesignReviewOnce(ctx, ".", statePath)
	if err != nil {
		return err
	}
	fmt.Println(renderReview(review))
	return nil
}

func ExecuteRollback(parent context.Context, statePath string, rollbackSHA string) error {
	if err := loadDotEnvIfPresent(); err != nil {
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

	ctx, stop := signal.NotifyContext(parent, os.Interrupt, syscall.SIGTERM)
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
}

func MainBinary(name string, execute func(context.Context, []string) error) {
	if err := execute(context.Background(), os.Args[1:]); err != nil {
		fmt.Fprintln(os.Stderr, errorStyle.Render(fmt.Sprintf("%s: %s", name, err.Error())))
		os.Exit(1)
	}
}

func ParseInitFlags(args []string) (string, bool, []string, error) {
	fs := flag.NewFlagSet("init", flag.ContinueOnError)
	fs.SetOutput(os.Stderr)

	statePath := fs.String("state", "./devdive.json", "path to state file")
	fromReadme := fs.Bool("from-readme", false, "infer feature from README only")

	if err := fs.Parse(args); err != nil {
		return "", false, nil, err
	}
	return *statePath, *fromReadme, fs.Args(), nil
}

func ParseStateFlag(commandName string, args []string) (string, error) {
	fs := flag.NewFlagSet(commandName, flag.ContinueOnError)
	fs.SetOutput(os.Stderr)

	statePath := fs.String("state", "./devdive.json", "path to state file")
	if err := fs.Parse(args); err != nil {
		return "", err
	}
	return *statePath, nil
}

func ParseRollbackFlags(args []string) (string, string, error) {
	fs := flag.NewFlagSet("rollback", flag.ContinueOnError)
	fs.SetOutput(os.Stderr)

	statePath := fs.String("state", "./devdive.json", "path to state file")
	rollbackSHA := fs.String("sha", "", "git SHA to roll back devdive.json to")

	if err := fs.Parse(args); err != nil {
		return "", "", err
	}
	return *statePath, *rollbackSHA, nil
}

func loadDotEnvIfPresent() error {
	dir, err := os.Getwd()
	if err != nil {
		return err
	}

	for {
		envPath := filepath.Join(dir, ".env")
		if _, err := os.Stat(envPath); err == nil {
			return godotenv.Load(envPath)
		} else if !errors.Is(err, os.ErrNotExist) {
			return err
		}

		parent := filepath.Dir(dir)
		if parent == dir {
			return nil
		}
		dir = parent
	}
}

func resolveInitRepository(ctx context.Context, repoPath string, statePath string, localGitInitialised bool) (gh.Repository, error) {
	repo := ""
	envRepo := strings.TrimSpace(os.Getenv("GITHUB_REPO"))

	if localGitInitialised {
		stateRepo, _ := repoFromLocalState(statePath)
		originRepo, _ := githubRepoFromOrigin(ctx, repoPath)
		repo = chooseExistingProjectRepo(envRepo, stateRepo, originRepo)
	} else if envRepo != "" {
		repo = envRepo
	}

	if repo == "" {
		repoName, err := promptForRepoName()
		if err != nil {
			return gh.Repository{}, err
		}
		login, err := gh.AuthenticatedUserLogin(ctx)
		if err != nil {
			return gh.Repository{}, err
		}
		repo = fmt.Sprintf("%s/%s", login, normalizePromptRepoName(repoName))
	}

	return gh.EnsureRepo(ctx, repo, filepath.Base(repoPath))
}

func chooseExistingProjectRepo(envRepo string, stateRepo string, originRepo string) string {
	options := uniqueRepos(envRepo, stateRepo, originRepo)
	switch len(options) {
	case 0:
		return ""
	case 1:
		return options[0]
	default:
		return promptForExistingRepoChoice(envRepo, stateRepo, originRepo)
	}
}

func confirmInitOverwrite(ctx context.Context, repo string, statePath string) (string, *state.DevDiveState, error) {
	remoteSummary, remoteState, err := prepareRemoteStateSummary(ctx, repo, statePath)
	if err != nil {
		if !errors.Is(err, os.ErrNotExist) {
			return "", nil, err
		}
		remoteSummary = "Remote devdive.json: not found."
		remoteState = nil
	}

	localSummary, err := prepareLocalStateSummary(statePath)
	if err != nil {
		return "", nil, err
	}

	fmt.Println(headerStyle.Render("Existing DevDive State Detected"))
	fmt.Println(remoteSummary)
	fmt.Println(localSummary)
	fmt.Println(mutedStyle.Render("`init` will overwrite local state and rerun planning. If you meant to resume, use `devdive run`."))

	switch promptForInitDecision() {
	case "init":
		return "init", remoteState, nil
	case "run":
		return "run", remoteState, nil
	default:
		return "", nil, fmt.Errorf("init cancelled")
	}
}

func prepareRemoteStateSummary(ctx context.Context, repo string, statePath string) (string, *state.DevDiveState, error) {
	current, err := gh.GetCurrentState(ctx, repo)
	if err != nil {
		return "", nil, err
	}

	tempFile, err := os.CreateTemp("", "devdive-remote-*.json")
	if err != nil {
		return "", nil, err
	}

	data, err := json.MarshalIndent(current, "", "  ")
	if err != nil {
		tempFile.Close()
		return "", nil, err
	}
	if _, err := tempFile.Write(append(data, '\n')); err != nil {
		tempFile.Close()
		return "", nil, err
	}
	if err := tempFile.Close(); err != nil {
		return "", nil, err
	}

	differs, err := statesDiffer(statePath, current)
	if err != nil {
		return "", nil, err
	}
	diffSummary := "matches the local state file"
	if differs {
		diffSummary = "differs from the local state file"
	}

	return fmt.Sprintf(
		"Remote devdive.json: found in %s, loaded into temp file %s, and %s.",
		repo,
		tempFile.Name(),
		diffSummary,
	), &current, nil
}

func prepareLocalStateSummary(statePath string) (string, error) {
	data, err := os.ReadFile(statePath)
	if err != nil {
		if errors.Is(err, os.ErrNotExist) {
			return "Local devdive.json: not found.", nil
		}
		return "", err
	}

	var current state.DevDiveState
	if err := json.Unmarshal(data, &current); err != nil {
		return fmt.Sprintf("Local devdive.json: exists at %s but could not be parsed cleanly.", statePath), nil
	}

	repo := strings.TrimSpace(current.Project.Repo)
	if repo == "" {
		repo = "unknown repo"
	}

	return fmt.Sprintf(
		"Local devdive.json: found at %s (%d task(s), repo %s).",
		statePath,
		len(current.Tasks),
		repo,
	), nil
}

func promptForRepoName() (string, error) {
	reader := bufio.NewReader(os.Stdin)
	for {
		fmt.Print("Enter a GitHub repo name for this new project: ")
		value, err := reader.ReadString('\n')
		if err != nil && !errors.Is(err, io.EOF) {
			return "", err
		}
		name := strings.TrimSpace(value)
		if name != "" {
			return name, nil
		}
		if errors.Is(err, io.EOF) {
			return "", fmt.Errorf("repo name is required")
		}
	}
}

func promptForExistingRepoChoice(envRepo string, stateRepo string, originRepo string) string {
	reader := bufio.NewReader(os.Stdin)
	options := []struct {
		label string
		repo  string
	}{
		{label: "Env repo", repo: envRepo},
		{label: "State file repo", repo: stateRepo},
		{label: "Git origin repo", repo: originRepo},
	}

	for {
		fmt.Println(headerStyle.Render("Repository Mismatch Detected"))
		fmt.Println("Choose which repo `devdive init` should use:")
		choices := make(map[string]string)
		index := 1
		seen := map[string]bool{}
		for _, option := range options {
			repo := strings.TrimSpace(option.repo)
			if repo == "" || seen[repo] {
				continue
			}
			seen[repo] = true
			fmt.Printf("  %d. %s: %s\n", index, option.label, repo)
			choices[fmt.Sprintf("%d", index)] = repo
			index++
		}
		fmt.Print("> ")

		value, err := reader.ReadString('\n')
		choice := strings.TrimSpace(strings.ToLower(value))
		if repo, ok := choices[choice]; ok {
			return repo
		}
		if errors.Is(err, io.EOF) {
			for _, option := range options {
				if strings.TrimSpace(option.repo) != "" {
					return strings.TrimSpace(option.repo)
				}
			}
		}
		fmt.Println("Please enter one of the listed numbers.")
	}
}

func uniqueRepos(repos ...string) []string {
	var result []string
	seen := map[string]bool{}
	for _, repo := range repos {
		repo = strings.TrimSpace(repo)
		if repo == "" || seen[repo] {
			continue
		}
		seen[repo] = true
		result = append(result, repo)
	}
	return result
}

func repoFromLocalState(statePath string) (string, error) {
	current, err := state.Load(statePath)
	if err != nil {
		return "", err
	}
	return strings.TrimSpace(current.Project.Repo), nil
}

func syncGitHubIssueStatuses(ctx context.Context, repo string, statePath string) (bool, error) {
	current, err := state.Load(statePath)
	if err != nil {
		return false, err
	}

	changed := false
	for i := range current.Tasks {
		issueNumber := strings.TrimSpace(current.Tasks[i].ID)
		if issueNumber == "" {
			issueNumber = issueNumberFromURL(current.Tasks[i].IssueURL)
		}
		if issueNumber == "" {
			continue
		}

		issue, err := gh.GetIssue(ctx, repo, issueNumber)
		if err != nil {
			if errors.Is(err, os.ErrNotExist) {
				continue
			}
			return false, err
		}

		nextStatus := current.Tasks[i].Status
		switch strings.ToLower(strings.TrimSpace(issue.State)) {
		case "closed":
			nextStatus = "done"
		case "open":
			if current.Tasks[i].Status == "done" {
				nextStatus = "open"
			}
		}

		if nextStatus != current.Tasks[i].Status {
			current.Tasks[i].Status = nextStatus
			changed = true
		}
	}

	if !changed {
		return false, nil
	}
	return true, state.Save(statePath, current)
}

func issueNumberFromURL(issueURL string) string {
	issueURL = strings.TrimSpace(issueURL)
	if issueURL == "" {
		return ""
	}
	parts := strings.Split(strings.TrimRight(issueURL, "/"), "/")
	if len(parts) == 0 {
		return ""
	}
	return strings.TrimSpace(parts[len(parts)-1])
}

func promptForInitDecision() string {
	reader := bufio.NewReader(os.Stdin)
	for {
		fmt.Println("Choose one option:")
		fmt.Println("  1. Continue init")
		fmt.Println("  2. Switch to run")
		fmt.Println("  3. Cancel")
		fmt.Print("> ")

		value, err := reader.ReadString('\n')
		choice := strings.TrimSpace(strings.ToLower(value))
		switch choice {
		case "1", "continue", "continue init", "init":
			return "init"
		case "2", "run", "switch", "switch to run":
			return "run"
		case "3", "cancel":
			return "cancel"
		}
		if errors.Is(err, io.EOF) {
			return "cancel"
		}
		fmt.Println("Please enter 1, 2, or 3.")
	}
}

func githubRepoFromOrigin(ctx context.Context, repoPath string) (string, error) {
	originURL, err := gitOutput(ctx, repoPath, "remote", "get-url", "origin")
	if err != nil {
		return "", err
	}
	repo, ok := parseGitHubRepo(originURL)
	if !ok {
		return "", fmt.Errorf("origin remote is not a GitHub repository")
	}
	return repo, nil
}

func parseGitHubRepo(remote string) (string, bool) {
	remote = strings.TrimSpace(remote)
	remote = strings.TrimSuffix(remote, ".git")

	switch {
	case strings.HasPrefix(remote, "git@github.com:"):
		return strings.TrimPrefix(remote, "git@github.com:"), true
	case strings.HasPrefix(remote, "https://github.com/"):
		return strings.TrimPrefix(remote, "https://github.com/"), true
	case strings.HasPrefix(remote, "http://github.com/"):
		return strings.TrimPrefix(remote, "http://github.com/"), true
	default:
		return "", false
	}
}

func normalizePromptRepoName(name string) string {
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

	initialised, err := hasLocalGitInitialization(ctx, repoPath)
	if err != nil {
		return err
	}
	if !initialised {
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

func hasLocalGitInitialization(ctx context.Context, repoPath string) (bool, error) {
	gitPath := filepath.Join(repoPath, ".git")
	if _, err := os.Stat(gitPath); err != nil {
		if errors.Is(err, os.ErrNotExist) {
			return false, nil
		}
		return false, err
	}

	output, err := gitOutput(ctx, repoPath, "rev-parse", "--git-dir")
	if err != nil {
		return false, nil
	}

	return strings.TrimSpace(output) != "", nil
}

func statesDiffer(path string, remote state.DevDiveState) (bool, error) {
	localData, err := os.ReadFile(path)
	if err != nil {
		if errors.Is(err, os.ErrNotExist) {
			return true, nil
		}
		return false, err
	}

	remoteData, err := json.Marshal(remote)
	if err != nil {
		return false, err
	}

	localData = bytes.TrimSpace(localData)
	remoteData = bytes.TrimSpace(remoteData)
	return !bytes.Equal(localData, remoteData), nil
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
