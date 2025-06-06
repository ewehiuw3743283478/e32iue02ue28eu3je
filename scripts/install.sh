#!/bin/bash

# Install Node.js and npm
curl -sL https://deb.nodesource.com/setup_16.x | sudo -E bash -
sudo apt-get install -y nodejs

# Install dependencies
npm install

# Start the application
npm start
