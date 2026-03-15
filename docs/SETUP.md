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
