import AsyncStorage from "@react-native-async-storage/async-storage";
import  {Todo} from "../types/todo";

const TODO_KEY = 'TODOS_V1';

export const TodoStorage = {
    async getTodos(): Promise<Todo[]> { 
        const todosString = await AsyncStorage.getItem(TODO_KEY);
        if (todosString) {
            return JSON.parse(todosString) as Todo[];
        }
        return [];
    },

    async saveTodos(todos: Todo[]): Promise<void> {
        await AsyncStorage.setItem(TODO_KEY, JSON.stringify(todos));
    }
}