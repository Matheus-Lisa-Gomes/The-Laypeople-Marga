@echo off
title The Lay Dharma Household Mārga Launcher
echo =======================================================
echo    Starting The Lay Dharma Household Marga
echo =======================================================
echo.
start http://localhost:8081
powershell -ExecutionPolicy Bypass -File "%~dp0server.ps1"
pause
