import { useState, useEffect } from "react";
import { Todo } from "../types/todo";
import { TodoStorage } from "../services/todoStorage";

export const useTodoViewModel = () => {
    const [todos, setTodos] = useState<Todo[]>([]);
    const [isLoading, setIsLoading] = useState<boolean>(true);

    const loadTodos = async () => {
        const storeTodos = await TodoStorage.getTodos();
        setTodos(storeTodos);
        setIsLoading(false);
    };

    const addTodo = async (title: string) => {
        const newTodo: Todo = {
            id: Date.now().toString(),
            title,
            isCompleted: false,
            createdAt: Date.now()
        }

          const updatedTodos = [newTodo, ...todos];
          setTodos(updatedTodos)
          await TodoStorage.saveTodos(updatedTodos)

    };

    const toggleTodos = async(id: string) => {
        const updatedTodos = todos.map(
            todo =>
                todo.id === id
                ? {...todo, isCompleted: !todo.isCompleted}
                : todo
        )
        setTodos(updatedTodos)
        await TodoStorage.saveTodos(updatedTodos)
    }

    const deleteToDos = async(id: string) => {
        const updatedTodos = todos.filter(todo => todo.id !== id);
        setTodos(updatedTodos)
        await TodoStorage.saveTodos(updatedTodos)
    }

    return {
        todos,
        isLoading,
        addTodo,
        toggleTodos,
        deleteToDos
    }
}
    
