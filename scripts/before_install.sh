#!/bin/bash
# BeforeInstall hook script for CodeDeploy

echo "BeforeInstall: Starting deployment preparation..."

# Update system packages
if command -v yum &> /dev/null; then
    sudo yum update -y
    sudo yum install -y nginx
elif command -v apt-get &> /dev/null; then
    sudo apt-get update -y
    sudo apt-get install -y nginx
fi

# Stop nginx if running
sudo systemctl stop nginx || true

# Backup existing deployment if it exists
if [ -d "/var/www/html" ]; then
    echo "Backing up existing deployment..."
    sudo mv /var/www/html /var/www/html.backup.$(date +%Y%m%d%H%M%S) || true
fi

# Create deployment directory
sudo mkdir -p /var/www/html
sudo chown -R $USER:$USER /var/www/html || sudo chown -R www-data:www-data /var/www/html

echo "BeforeInstall: Completed successfully"

