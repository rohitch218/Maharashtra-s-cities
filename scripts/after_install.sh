#!/bin/bash
# AfterInstall hook script for CodeDeploy

echo "AfterInstall: Configuring nginx..."

# Copy nginx configuration
if [ -f "nginx.conf" ]; then
    sudo cp nginx.conf /etc/nginx/conf.d/default.conf
    echo "Nginx configuration copied"
else
    echo "Warning: nginx.conf not found, using default configuration"
fi

# Set proper permissions
sudo chown -R www-data:www-data /var/www/html || sudo chown -R nginx:nginx /var/www/html
sudo chmod -R 755 /var/www/html

# Test nginx configuration
sudo nginx -t

echo "AfterInstall: Completed successfully"

