param(
    [Parameter(Mandatory = $true)]
    [string]$Source
)

$ErrorActionPreference = 'Stop'
$required = @(
    'hero.webp',
    'about.webp',
    'automotive.webp',
    'editorial.webp',
    'fantasy.webp',
    'automotive.mp4',
    'editorial.mp4',
    'fantasy.mp4'
)

if (-not (Test-Path $Source)) { throw "Media source folder not found: $Source" }

foreach ($name in $required) {
    if (-not (Test-Path (Join-Path $Source $name))) {
        throw "Missing required media file: $name"
    }
}

$repoRoot = Resolve-Path (Join-Path $PSScriptRoot '..')
Set-Location $repoRoot

git fetch origin
if ($LASTEXITCODE -ne 0) { throw 'git fetch failed' }

git checkout feat/editorial-luxury-redesign
if ($LASTEXITCODE -ne 0) { throw 'Could not checkout feat/editorial-luxury-redesign' }

$target = Join-Path $repoRoot 'public/media'
New-Item -ItemType Directory -Force -Path $target | Out-Null

foreach ($name in $required) {
    Copy-Item (Join-Path $Source $name) (Join-Path $target $name) -Force
}

git add public/media
if ($LASTEXITCODE -ne 0) { throw 'git add failed' }

$changes = git status --porcelain public/media
if (-not $changes) {
    Write-Host 'Media files are already up to date.'
    exit 0
}

git commit -m 'Add portfolio photography and AI films'
if ($LASTEXITCODE -ne 0) { throw 'git commit failed' }

git push origin feat/editorial-luxury-redesign
if ($LASTEXITCODE -ne 0) { throw 'git push failed' }

Write-Host ''
Write-Host 'Portfolio media uploaded to the redesign branch.'
