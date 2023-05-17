# ToDo_App_using_MEeN

A simple to-do application made using MongoDB, Express.js, Node.js, and EJS.

## Features

1. Add a task: Enter a task in the task bar and click "Add" to add the task to the database.
2. Date: The date when the task was added is automatically recorded and displayed alongside the task.
3. Status: Tasks can be marked as completed or pending.
4. Mark as completed/pending: Tasks can be toggled between completed and pending status.
5. Delete a task: Tasks can be deleted from the list.

## Technology Used

- MongoDB: A NoSQL database used for storing task data.
- Express.js: A web application framework for Node.js used for handling routes and requests.
- Node.js: A JavaScript runtime environment used for building server-side applications.
- EJS: A templating engine used for generating dynamic HTML pages.

## Prerequisites

- Node.js: Make sure you have Node.js installed on your machine.

## Getting Started

1. Clone the repository:
`git clone <repository-url>`

2. Install the dependencies:
`cd ToDo_App_using_MEeN
npm install`

3. Start the server using nodemon:
`nodemon server.js`

4. Open your web browser and visit `http://localhost:3000` to access the application.

## Project Structure

- `server.js`: The main server file that sets up the Express.js server and handles routes.
- `routes/mainRouter.js`: Main router for Routing request to appropriate controller.
- `models/mainModel.js`: Defines the Task model using Mongoose for MongoDB integration.
- `views/homepage.ejs`: The EJS template file for the home page view.
- `controllers/mainController.js`: Controller for the application.

### Models

- Task: A string representing the task description.
- Date: A string using the Moment.js library to store the date and time when the task was added.
- Status: A boolean value indicating whether the task is completed or pending.

### Views

- Home: The main view that displays the table of completed and pending tasks. It includes the following features:
  1. The table shows the task description, date added, and status of each task.
  2. New tasks can be added using an input form, which submits the task to the server and stores it in the database.
  3. Each task has a status toggle button that allows marking it as completed or pending.
  4. Each task has a delete button to remove it from the list.

### Routes

1. GET `/`: Renders the homepage view.
2. POST `/add`: Handles adding a new task to the database. This route is used by the form on the homepage.
3. POST `/delete`: Handles deleting an existing task from the database. If the task doesn't exist, a warning is displayed.
4. POST `/edit`: Handles editing an existing task in the database.

## How to Modify

1. To change the design or layout of the application, modify the `views/homepage.ejs` file.

2. To add new features or modify existing functionality, modify the server routes in `server.js` and update the corresponding Controller & EJS templates and database operations.

## Contributing

Contributions are welcome! If you have any ideas, improvements, or bug fixes, please open an issue or submit a pull request.

## License

This project is licensed under the [MIT License](LICENSE).
