import { useState } from "react";
import { v4 as uuidv4 } from 'uuid';

export default function TodoList() {
    // Added 'isDone' property to the initial state
    let [todos, setTodos] = useState([{ task: "sample task", id: uuidv4(), isDone: false }]);
    let [newTodo, setNewTodo] = useState("");

    let addNewtask = () => {
        if (newTodo.trim() === "") return;
        setTodos((prevTodos) => [
            ...prevTodos, 
            { task: newTodo, id: uuidv4(), isDone: false }
        ]);
        setNewTodo("");
    };

    let updateTodoValue = (event) => {
        setNewTodo(event.target.value);
    };

    let deleteTodoValue = (id) => {
        setTodos((prevTodos) => prevTodos.filter((todo) => todo.id !== id));
    };

    // Feature: Mark as Done (Toggles the isDone status)
    let markAsDone = (id) => {
        setTodos((prevTodos) => 
            prevTodos.map((todo) => {
                if (todo.id === id) {
                    return { ...todo, isDone: !todo.isDone };
                } else {
                    return todo;
                }
            })
        );
    };

    // Feature: Update Task Text
    let updateTaskText = (id) => {
        let newTaskText = prompt("Update your task:");
        if (!newTaskText) return;

        setTodos((prevTodos) => 
            prevTodos.map((todo) => {
                if (todo.id === id) {
                    return { ...todo, task: newTaskText };
                } else {
                    return todo;
                }
            })
        );
    };

    return (
        <div>
            <input 
                placeholder="Add the task" 
                value={newTodo} 
                onChange={updateTodoValue} 
            />
            <button onClick={addNewtask}>Add Task</button>
            
            <hr />
            <h4>Tasks to do</h4>
            <ul>
                {todos.map((todo) => (
                    <li key={todo.id} style={{ marginBottom: "10px" }}> 
                        {/* Conditional styling for Done status */}
                        <span style={todo.isDone ? { textDecoration: "line-through", color: "gray" } : {}}>
                            {todo.task}
                        </span>
                        
                        &nbsp;&nbsp;&nbsp;
                        <button onClick={() => deleteTodoValue(todo.id)}>Delete</button>
                        <button onClick={() => markAsDone(todo.id)}>
                            {todo.isDone ? "Undo" : "Mark as Done"}
                        </button>
                        <button onClick={() => updateTaskText(todo.id)}>Edit</button>
                    </li>
                ))}
            </ul>
        </div>
    );
}