# Build script to bundle The Lay Dharma Household Mārga scripts into js/bundle.js

$topicsContent = [System.IO.File]::ReadAllText("$PSScriptRoot/js/data/topicsData.js", [System.Text.Encoding]::UTF8)
$appContent = [System.IO.File]::ReadAllText("$PSScriptRoot/js/app.js", [System.Text.Encoding]::UTF8)

# Strip ES module imports and exports for universal browser execution
$topicsClean = $topicsContent -replace '(?m)^\s*export\s+const\s+', 'const '
$appClean = $appContent -replace '(?m)^\s*import\s+[^;]+;\s*\r?\n', ''

$bundle = @"
/**
 * The Lay Dharma Household Mārga — Standalone Universal Web Bundle
 * Runs directly on file:// as well as HTTPS / local servers.
 */

(function() {
  'use strict';

  // ==========================================
  // 1. CANONICAL TOPICS DATA
  // ==========================================
$topicsClean

  // ==========================================
  // 2. APPLICATION CONTROLLER
  // ==========================================
$appClean

})();
"@

[System.IO.File]::WriteAllText("$PSScriptRoot/js/bundle.js", $bundle, [System.Text.Encoding]::UTF8)
Write-Host "bundle.js successfully built! Total size: $([System.IO.FileInfo]::new("$PSScriptRoot/js/bundle.js").Length) bytes." -ForegroundColor Green
