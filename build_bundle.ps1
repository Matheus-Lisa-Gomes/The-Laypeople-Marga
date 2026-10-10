# Build script to bundle The Lay Dharma Household Mārga scripts into js/bundle.js

$paContent = [System.IO.File]::ReadAllText("$PSScriptRoot/js/data/dependentArisingData.js", [System.Text.Encoding]::UTF8)
$maggaContent = [System.IO.File]::ReadAllText("$PSScriptRoot/js/data/fourthNobleTruthData.js", [System.Text.Encoding]::UTF8)
$cosmoContent = [System.IO.File]::ReadAllText("$PSScriptRoot/js/data/buddhistCosmologyData.js", [System.Text.Encoding]::UTF8)
$topicsContent = [System.IO.File]::ReadAllText("$PSScriptRoot/js/data/topicsData.js", [System.Text.Encoding]::UTF8)
$appContent = [System.IO.File]::ReadAllText("$PSScriptRoot/js/app.js", [System.Text.Encoding]::UTF8)

# Strip ES module imports and exports for universal browser execution
$paClean = $paContent -replace '(?m)^\s*export\s+const\s+', 'const '
$maggaClean = $maggaContent -replace '(?m)^\s*export\s+const\s+', 'const '
$cosmoClean = $cosmoContent -replace '(?m)^\s*export\s+const\s+', 'const '
$topicsClean = $topicsContent -replace '(?m)^\s*export\s+const\s+', 'const ' -replace '(?m)^\s*import\s+[^;]+;\s*\r?\n', ''
$appClean = $appContent -replace '(?m)^\s*import\s+[^;]+;\s*\r?\n', ''

$bundle = @"
/**
 * The Lay Dharma Household Mārga — Standalone Universal Web Bundle
 * Runs directly on file:// as well as HTTPS / local servers.
 */

(function() {
  'use strict';

  // ==========================================
  // 1. DEPENDENT ARISING DATA MODULE
  // ==========================================
$paClean

  // ==========================================
  // 2. FOURTH NOBLE TRUTH DATA MODULE
  // ==========================================
$maggaClean

  // ==========================================
  // 3. BUDDHIST COSMOLOGY DATA MODULE
  // ==========================================
$cosmoClean

  // ==========================================
  // 4. CANONICAL TOPICS DATA
  // ==========================================
$topicsClean

  // ==========================================
  // 5. APPLICATION CONTROLLER
  // ==========================================
$appClean

})();
"@

[System.IO.File]::WriteAllText("$PSScriptRoot/js/bundle.js", $bundle, [System.Text.Encoding]::UTF8)
Write-Host "bundle.js successfully built! Total size: $([System.IO.FileInfo]::new("$PSScriptRoot/js/bundle.js").Length) bytes." -ForegroundColor Green

