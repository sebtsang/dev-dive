package state

type Project struct {
	Name      string `json:"name"`
	Repo      string `json:"repo"`
	CreatedAt string `json:"created_at"`
}

type Task struct {
	ID             string   `json:"id"`
	Title          string   `json:"title"`
	Description    string   `json:"description"`
	Status         string   `json:"status"`
	EstimateHours  float64  `json:"estimate_hours"`
	DesignNotes    string   `json:"design_notes"`
	IssueURL       string   `json:"issue_url"`
	Labels         []string `json:"labels"`
	Priority       int      `json:"priority"`
	Advice         string   `json:"advice"`
	UpdatedAt      string   `json:"updated_at"`
	AdvicePostedAt string   `json:"advice_posted_at"`
}

type CI struct {
	Status      string `json:"status"`
	LastRun     string `json:"last_run"`
	WorkflowURL string `json:"workflow_url"`
}

type Nudge struct {
	Message   string `json:"message"`
	CreatedAt string `json:"created_at"`
}

type CommitAnalysis struct {
	CommitHash      string   `json:"commit_hash"`
	Summary         string   `json:"summary"`
	TasksUpdated    []string `json:"tasks_updated"`
	TasksProgressed []string `json:"tasks_progressed"`
	AnalysedAt      string   `json:"analysed_at"`
}

type RemoteStateCommit struct {
	SHA       string `json:"sha"`
	Message   string `json:"message"`
	Timestamp string `json:"timestamp"`
}

type DriftFinding struct {
	File       string `json:"file"`
	Finding    string `json:"finding"`
	Severity   string `json:"severity"`
	DetectedAt string `json:"detected_at"`
}

type Review struct {
	ReviewedAt string         `json:"reviewed_at"`
	Findings   []DriftFinding `json:"findings"`
}

type SyncState struct {
	LastIssueSync       string `json:"last_issue_sync"`
	LastEvaluatedCommit string `json:"last_evaluated_commit"`
	LastReadmeHash      string `json:"last_readme_hash"`
	LastReadmeSync      string `json:"last_readme_sync"`
}

type DevDiveState struct {
	Meta       map[string]string `json:"meta"`
	Project    Project           `json:"project"`
	Tasks      []Task            `json:"tasks"`
	CI         CI                `json:"ci"`
	Nudges     []Nudge           `json:"nudges"`
	Commits    []CommitAnalysis  `json:"commits"`
	StateCommits []RemoteStateCommit `json:"state_commits"`
	Reviews    []Review          `json:"reviews"`
	InitCommit string            `json:"init_commit"`
	Sync       SyncState         `json:"sync"`
}
