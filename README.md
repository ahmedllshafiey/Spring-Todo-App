# Todo List Application

## Description

This is a Todo List application built with React and Material-UI for the frontend, and Spring Boot for the backend. The application allows users to manage their tasks by adding, viewing, and deleting them. 

## Features

- **Add**: Create new todo items.
- **View**: List all existing todo items.
- **Delete**: Remove todo items.

## Technologies Used

- **Frontend**: React, Material-UI
- **Backend**: Spring Boot
- **API**: RESTful API

## Getting Started

### Prerequisites

- Node.js and npm installed
- Java and Spring Boot setup

### Installation

1. **Clone the repository:**

   ```bash
   git clone https://github.com/yourusername/todo-list-app.git
   ```

2. **Navigate to the project directory:**

   ```bash
   cd todo-list-app
   ```

3. **Install frontend dependencies:**

   ```bash
   cd frontend
   npm install
   ```

4. **Install backend dependencies:**

   Navigate to the backend directory and install dependencies as per your backend setup instructions.

5. **Run the application:**

   - Start the backend server (e.g., using `mvn spring-boot:run` or your preferred method).
   - Start the frontend server:

     ```bash
     npm start
     ```

   The application will be available at `http://localhost:5432`.

## API Endpoints

- **GET** `/api/todoItems` - Fetch all todo items
- **POST** `/api/todoItems` - Create a new todo item
- **DELETE** `/api/todoItems/{id}` - Delete a todo item

## Usage

1. **Add a new task:** Enter the task description in the input field and click "Add Task".
2. **Delete a task:** Click the "Delete" button next to the task you want to remove.

## Contributing

Feel free to open issues or submit pull requests if you want to contribute to this project.
