package com.app.springtodoapp.repository;

import com.app.springtodoapp.models.Todo;
import org.springframework.stereotype.Repository;

import java.util.ArrayList;
import java.util.List;

@Repository
public class TodoRepository {

    private Integer isCounter = 0;
    private final List<Todo> todoItems = new ArrayList<Todo>();

    public List<Todo> getTodoItems() {
        if (todoItems.isEmpty()) {
            Todo task = new Todo();
            task.setDone(false);
            task.setTask("Complete the app");
            task.setId(isCounter++);

            todoItems.add(task);
        }

        return todoItems;
    }

    public Todo save(Todo task) {
        task.setId(isCounter++);
        todoItems.add(task);
        return  task;
    }

    public void delete(Integer id) {
        todoItems.remove(id);
    }
}
