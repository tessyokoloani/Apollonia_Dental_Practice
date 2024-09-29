**Apollonia Stack Application **
(Frontend with HTML, CSS, JavaScript; Backend with Node, Express, MongoDB)
=====================================
### Overview
Project Overview

This is a full-stack web application built using the MERN stack (MongoDB, Express, Node.js) with HTML, CSS, and JavaScript for the frontend instead of React. The app demonstrates how to build a modern web application using server-side technologies while keeping the frontend simple with static files.

### Features
Key Features

    Backend: Built with Node.js and Express.js to serve APIs and handle routing.
    Database: Uses MongoDB for storing and retrieving data.
    Frontend: Built using vanilla HTML, CSS, and JavaScript.
    Implements CRUD operations (Create, Read, Update, Delete).
    Input validation and error handling.

Technologies Used
Backend

    Node.js: JavaScript runtime for the server.
    Express.js: Web framework for building the API and handling requests.
    MongoDB: NoSQL database for data storage.
    Mongoose: ODM for MongoDB to manage data models.

Frontend

    HTML: Structure and layout of the web pages.
    CSS: Styling of the web pages.
    JavaScript: Client-side functionality and interaction with the backend API.

Installation
Prerequisites

    Node.js and npm installed on your machine.
    MongoDB instance running on a cloud platform like MongoDB Atlas.

Steps to Install

    Clone the repository:

    bash

git clone https://github.com/tessyokoloani/apollonia-dental-practice-app.git

Navigate to the project directory:

cd apollonia-dental-practice-app

Install the dependencies:

npm install

Set up environment variables:

Create a .env file in the root directory and add the following:

PORT=4004
MONGODB_URI=mongodb://localhost:27017/your-database-name "Get the correct connection string from your Mongo Atlas database"

Start the Node.js server:

bash

    npm start

    Open your browser and navigate to http://localhost:4004

Usage
CRUD Operations

    Create: Employee and Department data can be added to the application through forms.
    Read: List of Employees can be viewed on the homepage. List of Departments are populated on the department's "select" tag.
    Update: Employees and Departments can be edited.
    Delete: Employees and Departments can be removed from the database.

API Endpoints
Method	                      Endpoint	                         Description
GET                         	/api/	                         Get all employees
POST                            /api/employee	                 Create a new employee
PATCH	                        /api/employee                    Update an employee
DELETE	                        /api/employee	                 Delete an employee

GET	                            /api/department	                 Get all departments
POST                            /api/department	                 Create/Add a new department
PATCH	                        /api/department                  Update a department
DELETE	                        /api/department	                 Delete a department

POST                            /api/contactus                   Add new contact details


Environment Variables

    PORT: The port on which the app will run (e.g., 3000).
    MONGODB_URI: The connection string for MongoDB.

Contributing

    Fork the repository.
    Create a new branch (git checkout -b feature-branch-name).
    Make your changes.
    Commit your changes (git commit -m 'Add some feature').
    Push to the branch (git push origin feature-branch-name).
    Open a pull request.


If you have any questions, feel free to reach out!

    Email: tessyokoloani@gmail.com
    GitHub: https://github.com/tessyokoloani