# DevDive Setup

## Recommended Install

For the normal CLI experience on Windows, use the installer:

```powershell
powershell -ExecutionPolicy Bypass -File .\scripts\devdive-install.ps1
```

This will:

- build the frontend
- build the Go CLI
- install a single managed `devdive.exe`
- add the managed install directory to your user `PATH` if needed

After installation, open a new terminal and run:

```powershell
devdive init "build a user authentication system"
```

## Uninstall

To remove the installed CLI:

```powershell
powershell -ExecutionPolicy Bypass -File .\scripts\devdive-uninstall.ps1
```

## Build From Source

If you want repo-local binaries instead of a managed install:

```powershell
cd web
npm ci
npm run build
cd ..

powershell -ExecutionPolicy Bypass -File .\scripts\build.ps1
```

This produces binaries in `.\bin\`.

## Legacy Wrapper

For compatibility, `scripts\install.ps1` still exists and forwards to:

```powershell
.\scripts\devdive-install.ps1
```

## Requirements

- Go 1.22+
- Node.js 18+ and npm
- Git
- A GitHub personal access token with repo access

## Environment

Create a `.env` file in your project root:

```env
GITHUB_TOKEN=your_github_personal_access_token
GITHUB_REPO=
OPENAI_API_KEY=test
HF_ENDPOINT=https://your-endpoint/v1
DEVDIVE_PORT=7777
```

The scripts in scripts are packaging/install helpers:

build.ps1
Builds the repo-local binaries into ./bin for all command entrypoints.

devdive-install.ps1
The main installer. Builds the frontend, builds the CLI, installs a managed devdive.exe, and adds its install directory to user PATH if needed.

devdive-uninstall.ps1
Removes the managed installed devdive.exe, cleans up its install directory, and removes that directory from user PATH.

install.ps1
A compatibility wrapper that just forwards to devdive-install.ps1.

So practically:

build.ps1 = local build
devdive-install.ps1 = install for actual use
devdive-uninstall.ps1 = remove installed CLI
install.ps1 = old shortcut kept for compatibility

Windows:
First run this:
powershell -ExecutionPolicy Bypass -File .\scripts\build.ps1
or this
powershell -ExecutionPolicy Bypass -File .\scripts\devdive-install.ps1

Then run this to setup dashboard:
cd web
npm ci
npm run build
cd ..
powershell -ExecutionPolicy Bypass -File .\scripts\build.ps1

<----------------------------------------------------------------->

1. fix the init logic
   in a repo with project started but not finished the tool should
   read the readme and plan, understand what needs to be done,
   look at existing code, look at changes in commits,
   and generate/update based on those informations collected.
   use thinking model to determine whats good or not and prioritize based on that

2.

- align on ideas (user can update the description to be more insightful and prevent ai from misunderstanding (update the readme/plan file))

- offers advice on an issue (comment on the issue tips to help complete)
- check in on progress as time elapses

- re-evalutate all issues
  - store the last revaluate commit id and then if there is a new id re run on the diff
  - look at PR and see if code is bad and create a subissue
  - code reviews
    - determines whether or not any issues are closed

- ready to be approved, not actually complete
  - TODO (all issues) | in progress (self marked) | review (ai review if acc complete) | rejected (ai rejected) | complete

- read through existing issues and create a priority list

main features

1. init project based on readme
2. evaluate and close/flag issues based on code changes
3. handle chenges to the readme

devdive init "build a user authentication system"
devdive init --from-readme
devdive run
devdive sync
devdive evaluate
devdive readme-sync
devdive status
devdive priorities
devdive review
devdive rollback --sha a1b2c3d
