package state

type Project struct {
	Name      string `json:"name"`
	Repo      string `json:"repo"`
	CreatedAt string `json:"created_at"`
}

type Task struct {
	ID            string   `json:"id"`
	Title         string   `json:"title"`
	Description   string   `json:"description"`
	Status        string   `json:"status"`
	EstimateHours float64  `json:"estimate_hours"`
	DesignNotes   string   `json:"design_notes"`
	IssueURL      string   `json:"issue_url"`
	Labels        []string `json:"labels"`
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

type DevDiveState struct {
	Meta       map[string]string `json:"meta"`
	Project    Project           `json:"project"`
	Tasks      []Task            `json:"tasks"`
	CI         CI                `json:"ci"`
	Nudges     []Nudge           `json:"nudges"`
	Commits    []CommitAnalysis  `json:"commits"`
	Reviews    []Review          `json:"reviews"`
	InitCommit string            `json:"init_commit"`
}
