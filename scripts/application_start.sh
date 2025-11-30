#!/bin/bash
# ApplicationStart hook script for CodeDeploy

echo "ApplicationStart: Starting nginx service..."

# Start nginx
sudo systemctl start nginx
sudo systemctl enable nginx

# Check if nginx is running
if sudo systemctl is-active --quiet nginx; then
    echo "Nginx started successfully"
    sudo systemctl status nginx --no-pager
else
    echo "Error: Failed to start nginx"
    exit 1
fi

echo "ApplicationStart: Completed successfully"

