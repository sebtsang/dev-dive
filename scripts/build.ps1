$ErrorActionPreference = "Stop"

$scriptDir = Split-Path -Parent $MyInvocation.MyCommand.Path
$root = Split-Path -Parent $scriptDir
$binDir = Join-Path $root "bin"

New-Item -ItemType Directory -Force -Path $binDir | Out-Null

$targets = @(
    @{ Name = "devdive"; Path = "./cmd/devdive" },
    @{ Name = "init"; Path = "./cmd/init" },
    @{ Name = "run"; Path = "./cmd/run" },
    @{ Name = "sync"; Path = "./cmd/sync" },
    @{ Name = "evaluate"; Path = "./cmd/evaluate" },
    @{ Name = "readme-sync"; Path = "./cmd/readme-sync" },
    @{ Name = "status"; Path = "./cmd/status" },
    @{ Name = "priorities"; Path = "./cmd/priorities" },
    @{ Name = "review"; Path = "./cmd/review" },
    @{ Name = "rollback"; Path = "./cmd/rollback" }
)

Push-Location $root
try {
    foreach ($target in $targets) {
        $output = Join-Path $binDir ($target.Name + ".exe")
        go build -o $output $target.Path
    }
} finally {
    Pop-Location
}

Write-Host "Built binaries in $binDir"
