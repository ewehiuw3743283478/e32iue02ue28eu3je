# Server Monitor

A modern web application for monitoring server statuses in real-time, featuring CPU, RAM, and network usage metrics. The app supports public viewing of selected servers and an admin panel for full management capabilities.

[![Deploy to Heroku](https://www.herokucdn.com/deploy/button.svg)](https://heroku.com/deploy)

## Project Structure

The project is organized into the following directories:

*   `config/`: Contains all configuration-related files.
*   `scripts/`: Holds all shell scripts, including the one-click installation script for Linux.
*   `src/`: The main source directory, containing the application's core logic.
*   `static/`: Contains all static assets, such as CSS, JavaScript, and images.
*   `views/`: Contains all the application's views.

## Installation and Setup

This guide will walk you through the process of setting up the Server Monitor application on your own server.

### Prerequisites

*   Node.js (v16 or higher)
*   npm
*   Git

### 1. Clone the Repository

Start by cloning the repository to your local machine:

```bash
git clone https://github.com/your-username/server-monitor.git
cd server-monitor
```

### 2. Install Dependencies

Install the required Node.js packages using npm:

```bash
npm install
```

### 3. Configuration

The application can be configured by editing the settings in the admin panel. To access the admin panel, you'll first need to start the application.

### 4. Running the Application

You can start the application with the following command:

```bash
npm start
```

The application will be running at `http://localhost:5555` by default.

### 5. Accessing the Admin Panel

Navigate to `http://localhost:5555/login` in your web browser. The default password is `servermonitor`. Once you're logged in, you can configure the application by navigating to the "Settings" page.

### One-Click Install for Linux

For a quicker setup on Linux, you can use the provided installation script. This will install Node.js and the application dependencies for you.

```bash
./scripts/install.sh
```

## Deployment on Heroku

There are two ways to deploy this application to Heroku:

### Using the "Deploy to Heroku" button

This is the easiest method. Simply click the "Deploy to Heroku" button at the top of this readme. Heroku will handle the rest, including provisioning a PostgreSQL database.

### Manual Deployment

1.  **Install the Heroku CLI:**
    If you don't have it, install it from [devcenter.heroku.com/articles/heroku-cli](https://devcenter.heroku.com/articles/heroku-cli).

2.  **Log in to Heroku:**
    ```bash
    heroku login
    ```

3.  **Create a Heroku app:**
    ```bash
    heroku create
    ```

4.  **Provision a PostgreSQL database:**
    ```bash
    heroku addons:create heroku-postgresql:hobby-dev
    ```

5.  **Push the code to Heroku:**
    ```bash
    git push heroku main
    ```

6.  **Open the app:**
    ```bash
    heroku open
    ```

## Usage

*   Access the public view at the root URL to see server statuses.
*   Login to the admin panel at `/login` to manage servers. The default password is `servermonitor`.

## License

MIT
