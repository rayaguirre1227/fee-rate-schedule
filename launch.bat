@echo off
echo Installing dependencies...
cd /d "%~dp0"
call npm install

echo Starting server...
start /b node server.js

timeout /t 2 /nobreak >nul

echo Opening Table Editor website...
start http://localhost:3000/index.html

echo Server running at http://localhost:3000
echo Press any key to stop the server...
pause

taskkill /f /im node.exe 2>nul