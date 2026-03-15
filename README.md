# DevDive 🧠

> AI-powered project manager in your terminal — describe a feature, get GitHub Issues, time estimates, design notes, and a live dashboard. All from one command.

![Go](https://img.shields.io/badge/Go-1.22-00ADD8?style=flat&logo=go)
![Preact](https://img.shields.io/badge/Preact-10-673AB8?style=flat&logo=preact)
![Vite](https://img.shields.io/badge/Vite-5-646CFF?style=flat&logo=vite)
![OpenAI Compatible](https://img.shields.io/badge/LLM-gpt--oss--120b-412991?style=flat)
![GitHub Issues](https://img.shields.io/badge/GitHub-Issues%20API-181717?style=flat&logo=github)
![License](https://img.shields.io/badge/license-MIT-green?style=flat)

---

## What is DevDive?

DevDive is a CLI tool for solo developers that turns a plain English feature description into a fully structured project plan — automatically creating GitHub Issues, estimating time, surfacing architecture suggestions, and streaming everything to a live browser dashboard via WebSocket.

You run one command. DevDive does the rest.

```bash
devdive init "build a user authentication system"
```

Within seconds:
- Your README and codebase are scanned for context
- GPT-oss-120b decomposes the feature into actionable tasks
- GitHub Issues are created with labels and time estimates
- A local dashboard opens at `localhost:7777`
- As you commit and push, the dashboard updates in real time

---

## Demo

```
$ devdive init "build a user authentication system"

  Scanning codebase...        ✓ README + 12 files indexed
  Calling planner agent...    ✓ 5 tasks decomposed
  Creating GitHub Issues...   ✓ Issues #12–#16 created
  Committing devdive.json...  ✓ Pushed to github.com/you/repo
  Starting dashboard...       ✓ http://localhost:7777

  Opening browser...
```

As you work:
- Commits are analysed by the LLM — task progress updates without any `closes #N` syntax
- Every 10 commits, a design review runs and flags architectural drift
- `devdive review` runs an immediate review on demand
- `devdive rollback --sha a1b2c3d` restores any previous dashboard state

---

## Architecture

```
Plain English Prompt
        +
README / Codebase
        │
        ▼
  GPT-oss-120b Planner  ◄── HuggingFace Inference Endpoint
        │
        ▼
  devdive.json  ◄─────────────── Source of truth
        │
  ┌─────┴──────┐
  │            │
  ▼            ▼
GitHub      Go HTTP Server (localhost:7777)
Issues           │
             ┌───┴────────────────┐
             │                    │
        WebSocket Hub       Preact Dashboard
             │                 (read-only)
         File Watcher
         Git Watcher  ──► LLM Commit Analysis
         CI Monitor
         Design Watcher ──► LLM Drift Detection
             │
             ▼
        GitHub Commits
        (devdive.json version history + rollback)
```

### Key design decisions

**`devdive.json` is the single source of truth.** The CLI is the only writer. The Go file watcher detects every mutation and broadcasts the updated state over WebSocket to all connected browser clients. The Preact dashboard never writes back — it only renders.

**GitHub as the resilience layer.** Every mutation to `devdive.json` is committed and pushed to GitHub automatically via the Contents API. This gives you a full audit trail of every state change, and dashboard rollback is as simple as `devdive rollback --sha <commit>`. The local file always writes first — GitHub commits are best-effort and never block the local save.

**Semantic commit analysis over keyword grep.** The git watcher sends each new commit's diff to the LLM, which returns a structured JSON payload identifying which tasks were completed or progressed and a plain-English summary. No `closes #N` keywords required.

**Design review as an architectural guardrail.** Every 10 commits (or on demand via `devdive review`), the LLM compares every file changed since `devdive init` against the original plan's design notes, flagging drift as info, warning, or critical findings. Critical findings also trigger an AI nudge.

**Vite + Preact for the frontend.** The dashboard is a proper Preact app with file-based components, client-side routing via `preact-iso`, and a shared WebSocket context. Vite builds to `internal/server/dist/`, which Go embeds into the binary via `go:embed dist/*` — so the deployment story is still one binary, zero runtime dependencies for the end user. Run `vite build` before `go build`.

---

## Tech Stack

| Layer | Technology |
|---|---|
| CLI framework | Go + [Cobra](https://github.com/spf13/cobra) |
| LLM | `gpt-oss-120b` via HuggingFace Inference Endpoint (OpenAI-compatible) |
| GitHub integration | GitHub REST API (Issues, Actions, Contents API) |
| HTTP + WebSocket server | Go `net/http` + [gorilla/websocket](https://github.com/gorilla/websocket) |
| File watcher | [fsnotify](https://github.com/fsnotify/fsnotify) |
| Frontend framework | [Preact](https://preactjs.com/) + [preact-iso](https://github.com/preactjs/preact-iso) (routing) |
| Frontend build tool | [Vite 5](https://vitejs.dev/) — builds to `internal/server/dist/` |
| Binary embedding | Go `go:embed dist/*` |
| TUI output | [Lipgloss](https://github.com/charmbracelet/lipgloss) |

---

## Installation

### Prerequisites

- Go 1.22+
- Node.js 18+ and npm
- A GitHub personal access token with `repo` scope
- Git installed locally

### Install

See [SETUP.md](/c:/Users/timot/OneDrive/Desktop/dev/dev-dive/docs/SETUP.md) for installation, uninstall, and local build instructions.

### Build from source

```bash
git clone https://github.com/your-username/devdive
cd devdive

# Build the frontend first
cd web
npm install
npm run build        # outputs to ../internal/server/dist/
cd ..

# Build the Go binaries (embeds the dist/ folder)
powershell -ExecutionPolicy Bypass -File .\scripts\build.ps1
```

This builds the CLI binaries into `./bin/`:

- `./bin/devdive`
- `./bin/init`
- `./bin/run`
- `./bin/sync`
- `./bin/status`
- `./bin/review`
- `./bin/rollback`

Legacy compatibility:

```powershell
powershell -ExecutionPolicy Bypass -File .\scripts\install.ps1
```

`scripts\install.ps1` now forwards to `scripts\devdive-install.ps1`. The full setup flow lives in [SETUP.md](/c:/Users/timot/OneDrive/Desktop/dev/dev-dive/docs/SETUP.md).

### Environment variables

Create a `.env` file in your project root:

```env
GITHUB_TOKEN=your_github_personal_access_token
GITHUB_REPO=
OPENAI_API_KEY=test
HF_ENDPOINT=https://vjioo4r1vyvcozuj.us-east-2.aws.endpoints.huggingface.cloud/v1
```

`GITHUB_REPO` is optional. If left blank, `devdive init` creates a new GitHub repository under your account using the current folder name, initialises local git if needed, and makes the bootstrap commit automatically.

---

## Usage

### `devdive init`

Scans your codebase, creates a GitHub repository if one does not already exist, initialises local git if needed, calls the planner agent, creates GitHub Issues, commits the initial `devdive.json` to GitHub, and starts the dashboard.

```bash
devdive init "build a user authentication system"
```

Direct binary:

```bash
./bin/init "build a user authentication system"
```

Optionally skip the prompt and let it infer from your README:

```bash
devdive init --from-readme
```

Direct binary:

```bash
./bin/init --from-readme
```

### `devdive run`

Starts the dashboard and background watchers without re-running the planner. Use this to resume a session.

```bash
devdive run
```

Direct binary:

```bash
./bin/run
```

### `devdive sync`

Fetches current GitHub issue states for tasks in `devdive.json` and updates the local file without starting the dashboard.

```bash
devdive sync
```

Direct binary:

```bash
./bin/sync
```

### `devdive status`

Prints current task progress, CI status, recent commit analyses, and open drift findings to the terminal without opening the dashboard.

```bash
devdive status
```

Direct binary:

```bash
./bin/status
```

### `devdive review`

Triggers an immediate one-shot design review — scans all files changed since `devdive init` and flags architectural drift against the original plan.

```bash
devdive review
```

Direct binary:

```bash
./bin/review
```

### `devdive rollback`

Rolls back `devdive.json` to any previous state using a git SHA from the version history on GitHub.

```bash
devdive rollback --sha a1b2c3d
```

Direct binary:

```bash
./bin/rollback --sha a1b2c3d
```

---

## devdive.json

This file lives at the root of your project and is the contract between the CLI and the dashboard. Do not edit it manually.

```json
{
  "meta": { "version": "1.0" },
  "project": {
    "name": "my-app",
    "repo": "owner/my-app",
    "created_at": "2026-03-14T10:00:00Z"
  },
  "tasks": [
    {
      "id": "12",
      "title": "Set up JWT middleware",
      "status": "in_progress",
      "estimate_hours": 2,
      "design_notes": "Use RS256 signing. Store refresh tokens in Redis with TTL.",
      "issue_url": "https://github.com/owner/my-app/issues/12"
    }
  ],
  "ci": {
    "status": "passing",
    "last_run": "2026-03-14T11:30:00Z",
    "workflow_url": "https://github.com/owner/my-app/actions/runs/123"
  },
  "nudges": [
    {
      "message": "JWT middleware is taking longer than estimated — consider splitting into two issues.",
      "created_at": "2026-03-14T12:00:00Z"
    }
  ]
}
```

---

## How the agent works

1. **Context building** — DevDive reads your README and scans file names and top-level structure to build a codebase summary. This is passed as context to the planner.

2. **Planning** — The planner prompt instructs `gpt-oss-120b` to return a JSON breakdown of tasks. Each task includes a title, description, time estimate, labels, and a concrete design note.

3. **Issue creation** — Each task is posted to GitHub Issues via the REST API. Labels like `devdive`, `estimate:2h`, and `ai-generated` are applied automatically.

4. **Semantic commit analysis** — Instead of scanning for `closes #N` keywords, the git watcher fetches the full diff of each new commit and sends it to the LLM. The model returns which tasks were completed or progressed, and a plain-English summary of what the commit did. No special commit message format required.

5. **Design review** — Every 10 commits (or on demand via `devdive review`), DevDive diffs every file changed since `init` and asks the LLM to compare them against the original design notes. Findings are categorised as `info`, `warning`, or `critical`. Critical findings also trigger an AI nudge.

6. **GitHub resilience** — Every mutation to `devdive.json` is committed and pushed to GitHub via the Contents API. This creates a version history of your project state. Use `devdive rollback --sha <commit>` to restore any previous state to both local disk and GitHub.

7. **Nudging** — When a task exceeds its estimate, CI fails, or critical drift is detected, DevDive calls the LLM with the current state and generates a one-line actionable nudge appended to the `nudges` array.

---

## Project structure

```
devdive/
├── cmd/
│   └── devdive/
│       └── main.go               # CLI entrypoint — init, run, status, review, rollback
├── internal/
│   ├── agent/
│   │   ├── planner.go            # Feature decomposition → tasks JSON
│   │   ├── commitanalysis.go     # Git diff → semantic task progress via LLM
│   │   ├── designreview.go       # Changed files → architectural drift findings via LLM
│   │   └── nudge.go              # State + trigger → one-line actionable nudge
│   ├── github/
│   │   ├── issues.go             # Issue creation + Actions polling
│   │   └── commits.go            # devdive.json version control via Contents API
│   ├── scanner/
│   │   └── scanner.go            # README + file tree → codebase summary string
│   ├── state/
│   │   ├── types.go              # All state structs
│   │   └── devdive.go            # Atomic read/write of devdive.json
│   ├── server/
│   │   ├── server.go             # HTTP server + WebSocket hub + go:embed
│   │   ├── watcher.go            # fsnotify → WebSocket broadcast
│   │   └── dist/                 # Built by Vite — embedded via go:embed
│   └── watchers/
│       ├── git.go                # Git log poller → LLM commit analysis
│       ├── ci.go                 # GitHub Actions poller
│       └── review.go             # Periodic design review trigger
├── web/                          # Preact + Vite frontend
│   ├── src/
│   │   ├── main.jsx              # Preact root + preact-iso router
│   │   ├── ws.js                 # WebSocket singleton + context
│   │   ├── pages/
│   │   │   ├── Issues.jsx        # Issue board
│   │   │   ├── CI.jsx            # CI / build history
│   │   │   ├── Nudges.jsx        # AI nudge feed
│   │   │   ├── Timetrack.jsx     # Time tracking + burndown
│   │   │   ├── CommitLog.jsx     # LLM-analysed commit history
│   │   │   ├── Reviews.jsx       # Design review drift findings
│   │   │   └── Settings.jsx      # Config + rollback info
│   │   └── components/
│   │       ├── Sidebar.jsx       # Nav sidebar with WS status dot
│   │       └── StatusBadge.jsx   # Reusable status/severity pill
│   ├── index.html
│   ├── vite.config.js            # outDir → ../internal/server/dist
│   └── package.json
├── devdive.json                  # Generated — do not edit manually
├── .env                          # Local secrets — not committed
├── go.mod
└── README.md
```

---

## Built at GenAI Genesis 2026

DevDive was built as a virtual competitor entry for [GenAI Genesis 2026](https://genaigenesis.ca) — Canada's largest AI hackathon — competing for the Overall Winner prize track.

---

## License

MIT
