package com.app.springtodoapp.service;

import com.app.springtodoapp.models.Todo;
import com.app.springtodoapp.repository.TodoRepository;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class TodoService {

    private final TodoRepository todoRepository;

    public TodoService(TodoRepository todoRepository) {
        this.todoRepository = todoRepository;
    }

    public List<Todo> findAll() {
        return todoRepository.getTodoItems();
    }

    public Todo update(Integer id, Todo todo) {
        Optional<Todo> task = todoRepository.getTodoItems().stream().filter(item -> item.getId().equals(id)).findAny();

        if (task.isPresent()) {
            Todo newTask = task.get();
            newTask.setDone(todo.getDone());
            newTask.setTask(todo.getTask());
            return  newTask;
        }

        return null;
    }

    public Todo create(Todo todo) {
        Todo newTodo = new Todo();
        newTodo.setDone(false);
        newTodo = todoRepository.save(newTodo);
        newTodo.setTask(todo.getTask());
        return newTodo;
    }

    public void delete(Integer id) {
        todoRepository.delete(id);
    }

}
