$ErrorActionPreference = "Stop"

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

function Set-UserPathEntries($entries) {
    $newPath = ($entries | Where-Object { $_ -and $_.Trim() -ne "" }) -join ";"
    [Environment]::SetEnvironmentVariable("Path", $newPath, "User")
}

function Stop-InstalledDevDive($expectedPath) {
    $processes = Get-Process -Name "devdive" -ErrorAction SilentlyContinue
    foreach ($process in $processes) {
        if ($process.Path -and ([string]::Equals($process.Path, $expectedPath, [System.StringComparison]::OrdinalIgnoreCase))) {
            Stop-Process -Id $process.Id -Force
        }
    }
}

Stop-InstalledDevDive $targetExe

if (Test-Path $targetExe) {
    Remove-Item -Force $targetExe
}

$entries = Get-UserPathEntries | Where-Object { -not [string]::Equals($_, $installBinDir, [System.StringComparison]::OrdinalIgnoreCase) }
Set-UserPathEntries $entries

if (Test-Path $manifestPath) {
    Remove-Item -Force $manifestPath
}

if (Test-Path $installBinDir) {
    $remaining = Get-ChildItem -Force $installBinDir
    if ($remaining.Count -eq 0) {
        Remove-Item -Force $installBinDir
    }
}

if (Test-Path $installRoot) {
    $remaining = Get-ChildItem -Force $installRoot
    if ($remaining.Count -eq 0) {
        Remove-Item -Force $installRoot
    }
}

Write-Host "DevDive uninstalled."
Write-Host "Open a new terminal to refresh command discovery."
