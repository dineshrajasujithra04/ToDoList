# To-Do List Application

A simple and interactive To-Do List application built using React. This project helps users organize daily activities, manage tasks, track completion status, and navigate between task-list and task-creation pages.

## Live Demo

**Live Application:** [Add Your Render URL Here]

**GitHub Repository:** [Add Your GitHub Repository URL Here]

## Project Overview

The To-Do List Application is a React-based web application designed to demonstrate component-based development, state management, event handling, and client-side routing.

Users can view their tasks, add new tasks, mark tasks as completed, and delete tasks when they are no longer needed.

The application provides a straightforward interface for managing everyday tasks.

## Features

* **View Tasks:** Display the available tasks in the application.
* **Add Tasks:** Create new tasks using the Add Todo page.
* **Delete Tasks:** Remove tasks that are no longer required.
* **Mark as Completed:** Toggle a task between completed and incomplete states.
* **React State Management:** Manage task data using React's `useState` hook.
* **Client-Side Navigation:** Navigate between application pages using React Router.
* **Reusable Components:** Separate the task-list and task-creation functionality into individual components.
* **Responsive Styling:** Apply CSS styling to improve the application's appearance.
* **Live Deployment:** Host the production application on Render.

## Technologies Used

| Technology       | Purpose                                  |
| ---------------- | ---------------------------------------- |
| HTML             | Application structure                    |
| CSS              | Styling and layout                       |
| JavaScript       | Application logic                        |
| React            | Component-based user interface           |
| React DOM        | Rendering React components               |
| React Router DOM | Client-side routing                      |
| Create React App | Development and production build tooling |
| Git              | Version control                          |
| GitHub           | Source code hosting                      |
| Render           | Application deployment                   |

## Project Structure

```text
ToDoList/
├── public/
├── src/
│   ├── component/
│   │   ├── todo.js
│   │   └── addtodo.js
│   ├── App.js
│   ├── App.css
│   └── index.js
├── .gitignore
├── package.json
├── package-lock.json
└── README.md
```

*Note: This structure represents the expected layout. Adjust the filenames if your actual project differs.*

## Prerequisites

Before running the project, install:

* Node.js
* npm
* Visual Studio Code or another code editor
* Git, if you want to upload changes to GitHub

## Installation

### 1. Clone the Repository

```bash
git clone YOUR_GITHUB_REPOSITORY_URL
```

Replace `YOUR_GITHUB_REPOSITORY_URL` with your actual repository URL.

### 2. Navigate to the Project Directory

```bash
cd ToDoList
```

### 3. Install Dependencies

```bash
npm install
```

This command installs the packages required by the application.

## Run the Application Locally

Start the development server:

```bash
npm start
```

The application will normally open at:

http://localhost:3000

If the browser does not open automatically, enter the address above in your browser.

To stop the development server, press `Ctrl + C` in the terminal.

## Production Build

To create an optimized production build, run:

```bash
npm run build
```

Create React App generates the production files inside the `build` directory.

These files are used for deployment.

## Application Routes

| Route      | Description                  |
| ---------- | ---------------------------- |
| `/`        | Displays the To-Do List page |
| `/addtodo` | Opens the Add Todo page      |

## How the Application Works

### Task Management

The application maintains a list of tasks using React state.

Each task contains:

* An identifier
* A task description
* A completion status

### Adding Tasks

Users can navigate to the Add Todo page and create a new task. The application updates its task state when a new task is added.

### Completing Tasks

Users can toggle a task's completion status. React updates the interface to reflect the latest state.

### Deleting Tasks

Users can remove tasks from the list. The application filters out the selected task and updates the displayed list.

### Navigation

React Router DOM manages navigation between the main task-list page and the Add Todo page without requiring a full-page navigation for each route change.

## Run Commands Summary

| Command         | Description                   |
| --------------- | ----------------------------- |
| `npm install`   | Install project dependencies  |
| `npm start`     | Run the development server    |
| `npm run build` | Generate the production build |
| `npm test`      | Run the configured tests      |

Run these commands from the project directory containing `package.json`.

## Deployment

This project is deployed using Render as a Static Site.

Recommended Render configuration:

| Setting           | Value                          |
| ----------------- | ------------------------------ |
| Build Command     | `npm install && npm run build` |
| Publish Directory | `build`                        |
| Service Type      | Static Site                    |

The Publish Directory must match the directory generated by the production build.

After connecting the GitHub repository, Render can automatically deploy new commits when automatic deployments are enabled.

## Current Limitations

* Tasks are stored in React state and may reset when the page is refreshed.
* The project does not currently include a backend database.
* User authentication and multi-user task management are not implemented.

## Future Enhancements

* Store tasks in local storage or a database.
* Add task-editing functionality.
* Introduce task priorities and due dates.
* Add search and filtering.
* Implement user authentication.
* Add task categories.
* Improve accessibility and mobile responsiveness.

## Learning Outcomes

This project demonstrates practical experience with:

* React functional components
* React hooks and state management
* JavaScript array operations
* Event handling
* React Router DOM
* CSS styling
* npm scripts
* Git and GitHub
* Frontend deployment using Render

## Author

**Sujithra Dineshraja**

## License

This project is available for educational and learning purposes. Add a specific open-source license if you intend to distribute it under particular reuse conditions.
