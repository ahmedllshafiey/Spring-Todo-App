const BASE_URL = 'http://localhost:8080/api/todoItems';

export const getTodoItems = async () => {
  const response = await fetch(BASE_URL);
  return response.json();
};

export const createTodoItem = async (todo) => {
  const response = await fetch(BASE_URL, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(todo),
  });
  return response.json();
};

export const updateTodoItem = async (id, todo) => {
  const response = await fetch(`${BASE_URL}/${id}`, {
    method: 'PUT',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(todo),
  });
  return response.json();
};

export const deleteTodoItem = async (id) => {
  const response = await fetch(`${BASE_URL}/${id}`, {
      method: 'DELETE',
  });

  // Handle response to ensure it's valid JSON
  if (response.ok) {
      return response.json(); // Expecting a JSON object
  } else {
      throw new Error('Failed to delete todo item');
  }
};

