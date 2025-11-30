#!/bin/bash
# ApplicationStop hook script for CodeDeploy

echo "ApplicationStop: Stopping nginx service..."

# Stop nginx gracefully
sudo systemctl stop nginx || true

echo "ApplicationStop: Completed successfully"

