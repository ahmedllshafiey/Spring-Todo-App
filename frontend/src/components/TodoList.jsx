import React from 'react';
import TodoItem from './TodoItem';

const TodoList = ({ todoItems, onDelete, onUpdate }) => {
    if (!todoItems.length) {
        return <p>No todo items available.</p>;
    }

    return (
        <div>
            {todoItems.map(todoItem => (
                <TodoItem
                    key={todoItem.id}
                    data={todoItem}
                    onDelete={onDelete}
                    onUpdate={onUpdate}
                />
            ))}
        </div>
    );
};

export default TodoList;