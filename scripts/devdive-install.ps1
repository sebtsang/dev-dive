$ErrorActionPreference = "Stop"

$scriptDir = Split-Path -Parent $MyInvocation.MyCommand.Path
$root = Split-Path -Parent $scriptDir
$webDir = Join-Path $root "web"
$distDir = Join-Path $root "internal\server\dist"
$buildBinDir = Join-Path $root "bin"
$installRoot = Join-Path $HOME ".devdive"
$installBinDir = Join-Path $installRoot "bin"
$targetExe = Join-Path $installBinDir "devdive.exe"
$manifestPath = Join-Path $installRoot "install.json"

function Get-UserPathEntries {
    $userPath = [Environment]::GetEnvironmentVariable("Path", "User")
    if (-not $userPath) {
        return @()
    }
    return $userPath.Split(";", [System.StringSplitOptions]::RemoveEmptyEntries)
}

function Ensure-Command($name) {
    if (-not (Get-Command $name -ErrorAction SilentlyContinue)) {
        throw "$name is required to install DevDive."
    }
}

function Ensure-UserPathContains($pathToAdd) {
    $userPath = [Environment]::GetEnvironmentVariable("Path", "User")
    $entries = Get-UserPathEntries
    if ($entries -contains $pathToAdd) {
        return $false
    }

    $newPath = if ($userPath) { "$userPath;$pathToAdd" } else { $pathToAdd }
    [Environment]::SetEnvironmentVariable("Path", $newPath, "User")
    return $true
}

function Stop-InstalledDevDive($expectedPath) {
    $processes = Get-Process -Name "devdive" -ErrorAction SilentlyContinue
    foreach ($process in $processes) {
        if ($process.Path -and ([string]::Equals($process.Path, $expectedPath, [System.StringComparison]::OrdinalIgnoreCase))) {
            Stop-Process -Id $process.Id -Force
        }
    }
}

Ensure-Command "go"
Ensure-Command "npm"

Write-Host "Building DevDive frontend..."
Push-Location $webDir
try {
    if (Test-Path (Join-Path $webDir "package-lock.json")) {
        & npm.cmd ci
    } else {
        & npm.cmd install
    }
    & npm.cmd run build
} finally {
    Pop-Location
}

if (-not (Test-Path $distDir)) {
    throw "Frontend build did not produce $distDir"
}

Write-Host "Building DevDive CLI..."
& (Join-Path $scriptDir "build.ps1")

Write-Host "Installing DevDive..."
New-Item -ItemType Directory -Force -Path $installBinDir | Out-Null
Stop-InstalledDevDive $targetExe
Copy-Item -Force (Join-Path $buildBinDir "devdive.exe") $targetExe

$pathAdded = Ensure-UserPathContains $installBinDir

$manifest = @{
    install_root = $installRoot
    install_bin = $installBinDir
    installed_exe = $targetExe
    repo_root = $root
    installed_at = (Get-Date).ToString("o")
    path_added = $pathAdded
}
$manifest | ConvertTo-Json | Set-Content -Path $manifestPath

Write-Host "Installed devdive to $targetExe"
if ($pathAdded) {
    Write-Host "Added $installBinDir to your user PATH."
}
Write-Host "Open a new terminal, then run: devdive init `"build a user authentication system`""
