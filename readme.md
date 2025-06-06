# ServerMonitor App

A modern web application for monitoring server statuses in real-time, featuring CPU, RAM, and network usage metrics. The app supports public viewing of selected servers and an admin panel for full management capabilities.

[![Deploy to Heroku](https://www.herokucdn.com/deploy/button.svg)](https://heroku.com/deploy?template=https://github.com/ewehiuw3743283478/e32iue02ue28eu3je)

## Features
- **Real-time Monitoring**: Track server performance metrics updated every 1.5 seconds.
- **Public Mode**: View status of publicly available servers.
- **Admin Panel**: Manage servers (add, edit, delete) with restricted access.
- **Material You Design**: Modern, responsive UI with dynamic theming.

## Deployment on Heroku
1. Click the 'Deploy to Heroku' button above to start the deployment process.
2. Alternatively, follow manual deployment steps:
   - Clone this repository.
   - Install dependencies with `npm install`.
   - Deploy to Heroku using `git push heroku main` after setting up Heroku CLI and app.
   - Set environment variables as needed via `heroku config:set KEY=VALUE`.
   - Open your deployed app with `heroku open`.

## Usage
- Access the public view at the root URL to see server statuses.
- Login to the admin panel at `/login` to manage servers.

## License
MIT
