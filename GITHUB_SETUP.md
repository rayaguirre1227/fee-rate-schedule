# GitHub Integration Setup Guide

The "Save to GitHub" button allows you to save your fee schedule table data directly to a GitHub repository. This enables version control and backup of your data.

## Prerequisites

1. A GitHub account
2. A GitHub repository to store the fee schedule data
3. A GitHub Personal Access Token

## Step 1: Create a GitHub Personal Access Token

1. Go to https://github.com/settings/tokens
2. Click "Generate new token (classic)"
3. Give it a name (e.g., "Fee Schedule App")
4. Select the following scopes:
   - `repo` (full control of private repositories)
5. Click "Generate token"
6. Copy the token (you won't see it again!)

## Step 2: Create or Use a GitHub Repository

1. Create a new repository on GitHub (or use an existing one)
2. Note the repository name in the format: `owner/repository`
   - Example: `myusername/fee-schedule-data`

## Step 3: Configure Environment Variables

You have two options:

### Option A: Using a .env file (Recommended)

1. Copy `.env.example` to `.env` in the project directory
2. Edit `.env` and fill in your values:
   ```
   GITHUB_TOKEN=ghp_xxxxxxxxxxxxxxxxxxxxxxxxxxxx
   GITHUB_REPO=yourUsername/fee-schedule-data
   GITHUB_FILE_PATH=fee-schedule-data.json
   ```
3. Install dotenv package (optional, for automatic .env loading):
   ```bash
   npm install dotenv
   ```

### Option B: Set Environment Variables Directly

On Windows (PowerShell):
```powershell
$env:GITHUB_TOKEN="ghp_xxxxxxxxxxxxxxxxxxxxxxxxxxxx"
$env:GITHUB_REPO="yourUsername/fee-schedule-data"
$env:GITHUB_FILE_PATH="fee-schedule-data.json"
npm start
```

On Mac/Linux:
```bash
export GITHUB_TOKEN="ghp_xxxxxxxxxxxxxxxxxxxxxxxxxxxx"
export GITHUB_REPO="yourUsername/fee-schedule-data"
export GITHUB_FILE_PATH="fee-schedule-data.json"
npm start
```

## Step 4: Restart the Server

After setting the environment variables, restart your Node.js server:

```bash
npm start
```

## Usage

1. Log in to the application
2. Edit your fee schedule as needed
3. Click the "Save to GitHub" button
4. A confirmation message will appear when the data is saved successfully
5. Check your GitHub repository to verify the file was created/updated

## How It Works

- The button is only visible when you're logged in
- When clicked, it sends the current table data to the server
- The server uses the GitHub API to create or update a JSON file in your repository
- Each save includes a commit message with the timestamp and username
- If the file already exists, it will be updated; otherwise, a new file is created

## Troubleshooting

- **"GitHub configuration not set" error**: Make sure GITHUB_TOKEN and GITHUB_REPO environment variables are set correctly
- **"Failed to save to GitHub" error**: Check that your token is valid and has the correct permissions
- **File not appearing in repository**: Verify that the GitHub repository is accessible and the token can write to it

## Security Notes

- Never commit your `.env` file to version control
- The `.env` file is already listed in `.gitignore` (if using git)
- Keep your GitHub token secret and use a token with minimal required permissions
