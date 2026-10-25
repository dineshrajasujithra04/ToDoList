# To-Do List Application

A simple and user-friendly To-Do List web application built using React. This application helps users organize their daily activities by adding tasks, tracking completion status, and deleting tasks when they are no longer needed.

## Live Application

🚀 **Live Demo:** https://todolist-mt36.onrender.com

## Features

* **View Tasks:** Display the list of available tasks.
* **Add Tasks:** Add new tasks to the to-do list.
* **Mark as Completed:** Mark tasks as completed or pending.
* **Delete Tasks:** Remove tasks that are no longer required.
* **Navigation:** Navigate between the task list and add-task pages.
* **Responsive Interface:** Simple and user-friendly interface.

## Technologies Used

* React.js
* JavaScript
* HTML5
* CSS3
* React Router DOM
* npm

## Project Structure

```text
todolist/
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

*Note: The structure above represents the expected project layout. Adjust the filenames if your actual project structure differs.*

## Installation and Setup

### Prerequisites

Make sure Node.js and npm are installed on your computer.

### 1. Clone the Repository

Clone your project repository from GitHub and navigate to the project folder.

```bash
git clone YOUR_GITHUB_REPOSITORY_URL
cd todolist
```

Replace `YOUR_GITHUB_REPOSITORY_URL` with your repository's clone URL when using these commands to download the project.

### 2. Install Dependencies

```bash
npm install
```

### 3. Start the Application

```bash
npm start
```

The application will run locally at:

http://localhost:3000

## Application Routes

| Route      | Description             |
| ---------- | ----------------------- |
| `/`        | Displays the To-Do List |
| `/addtodo` | Opens the Add Task page |

## Build for Production

To create an optimized production build, run:

```bash
npm run build
```

The production files will be generated in the `build` directory.

## Deployment

This application is deployed using Render.

* **Platform:** Render
* **Build Command:** `npm install && npm run build`
* **Publish Directory:** `build`
* **Live Application:** https://todolist-mt36.onrender.com

## Current Limitations

Tasks are currently stored in the application's React state. Therefore, newly added tasks may not remain available after refreshing the page. Persistent storage or a database can be added in a future version.

## Future Enhancements

* Store tasks using a database or browser storage.
* Add task editing functionality.
* Add task filters for all, completed, and pending tasks.
* Add due dates and priority levels.
* Improve mobile responsiveness and accessibility.

## Author

**Sujithra Dineshraja**

## License

This project was developed for learning and demonstration purposes.
