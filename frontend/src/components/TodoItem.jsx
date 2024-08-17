import React from "react";

const TodoItem = ({ data, emitDeleteTodoItem }) => {
  return (
    <li>
      <span>{data.task}</span>
      <button onClick={() => emitDeleteTodoItem(data.id)}>Delete</button>
    </li>
  );
};

export default TodoItem;