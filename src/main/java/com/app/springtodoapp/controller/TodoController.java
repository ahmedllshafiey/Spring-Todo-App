package com.app.springtodoapp.controller;

import com.app.springtodoapp.models.Todo;
import com.app.springtodoapp.service.TodoService;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
public class TodoController {

    private final TodoService todoService;

    public TodoController(TodoService todoService) {
        this.todoService = todoService;
    }

    // Fetch Todo Items
    @GetMapping("/api/todoItems")
    @CrossOrigin(origins = "http://localhost:5173")
    public ResponseEntity<?> findAllTodoItems() {
        List<Todo> todos = todoService.findAll();
        // Ensure all tasks have valid non-null text
        todos.forEach(todo -> {
            if (todo.getTask() == null || todo.getTask().trim().isEmpty()) {
                todo.setTask("No task provided");
            }
        });
        return ResponseEntity.ok(todos);
    }

    @PostMapping("/api/todoItem")
    @CrossOrigin(origins = "http://localhost:5173")
    public ResponseEntity<?> createTodoItem(@RequestBody Todo todo) {
        // Validate that task is not null or empty
        if (todo.getTask() == null || todo.getTask().trim().isEmpty()) {
            return ResponseEntity.badRequest().body("Task cannot be null or empty");
        }
        Todo newTodo = todoService.create(todo);
        return ResponseEntity.ok(newTodo);
    }

    @PutMapping("/api/todoItem/{id}")
    @CrossOrigin(origins = "http://localhost:5173")
    public ResponseEntity<?> updateTodoItem(@PathVariable int id, @RequestBody Todo todo) {
        // Validate that task is not null or empty
        if (todo.getTask() == null || todo.getTask().trim().isEmpty()) {
            return ResponseEntity.badRequest().body("Task cannot be null or empty");
        }
        Todo updatedTodo = todoService.update(id, todo);
        return ResponseEntity.ok(updatedTodo);
    }

    @DeleteMapping("/api/todoItem/{id}")
    @CrossOrigin(origins = "http://localhost:5173")
    public ResponseEntity<?> deleteTodoItem(@PathVariable int id) {
        todoService.delete(id);
        return ResponseEntity.ok("{\"message\": \"Deleted todo\"}"); // Return valid JSON
    }
}