#!/bin/bash
# Auto-push script for epoxy research project
# Runs every 5 minutes to sync progress to GitHub

cd /home/chris/clawd/projects/treasure-coast-epoxy-research

# Check if there are changes
if ! git diff-index --quiet HEAD --; then
  # Add all changes
  git add .

  # Commit with timestamp
  TIMESTAMP=$(date '+%Y-%m-%d %H:%M:%S')
  git commit -m "Auto-push: Progress update - $TIMESTAMP"

  # Push to GitHub
  git push origin master
fi
