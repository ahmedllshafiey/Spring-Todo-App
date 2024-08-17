import React, { useEffect, useState } from "react";
import TodoItem from "./components/TodoItem";
import "./styles/App.css"

// Fetch all todo items from the backend
const fetchTodoItems = async () => {
  const response = await fetch("http://localhost:8080/api/todoItems");
  if (response.ok) {
    return response.json();
  } else {
    throw new Error("Failed to fetch todo items");
  }
};

// Add a new todo item
const addNewTodoItem = async (task) => {
  const response = await fetch("http://localhost:8080/api/todoItem", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ task: task, done: false }),
  });

  if (response.ok) {
    return response.json();
  } else {
    throw new Error("Failed to add todo item");
  }
};

// Main App Component
const App = () => {
  const [todoItems, setTodoItems] = useState([]);
  const [newTask, setNewTask] = useState("");

  useEffect(() => {
    // Load todo items on component mount
    const loadTodoItems = async () => {
      const items = await fetchTodoItems();
      setTodoItems(items);
    };

    loadTodoItems();
  }, []);

  // Handle adding a new todo item
  const handleAddTodoItem = async () => {
    if (newTask.trim() === "") {
      alert("Task cannot be empty");
      return;
    }

    const newTodo = await addNewTodoItem(newTask);
    setTodoItems([...todoItems, newTodo]);
    setNewTask(""); // Clear the input after adding
  };

  // Handle deleting a todo item
  const handleDeleteTodoItem = async (id) => {
    const response = await fetch(`http://localhost:8080/api/todoItem/${id}`, {
      method: "DELETE",
    });

    if (response.ok) {
      setTodoItems(todoItems.filter((item) => item.id !== id));
    } else {
      alert("Failed to delete todo item");
    }
  };

  return (
    <div>
      <h1>Todo List</h1>
      <div className="input-container">
        <input
          type="text"
          value={newTask}
          onChange={(e) => setNewTask(e.target.value)}
          placeholder="Enter new task"
        />
        <button onClick={handleAddTodoItem}>Add Task</button>
      </div>
      <ul>
        {todoItems.length > 0 ? (
          todoItems.map((todoItem) => (
            <TodoItem
              key={todoItem.id}
              data={todoItem}
              emitDeleteTodoItem={handleDeleteTodoItem}
            />
          ))
        ) : (
          <p>No tasks available</p>
        )}
      </ul>
    </div>
  );
};

export default App;