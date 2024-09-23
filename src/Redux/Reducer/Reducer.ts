import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface Todo {
    text: string;
    completed: boolean;
}

interface TodoState {
  todos: Todo[];
  completedTodos: number;
  totalTodos: number;
}

const initialState: TodoState = {
  todos: [],
  completedTodos: 0,
  totalTodos: 0,
};

const todoSlice = createSlice({
  name: 'todos',
  initialState,
  reducers: {
    addTodo: (state, action: PayloadAction<string>) => {
      state.todos.push({ text: action.payload, completed: false });
      state.totalTodos += 1;
    },
    deleteTodo: (state, action: PayloadAction<number>) => {
      state.todos.splice(action.payload, 1);
      state.totalTodos -= 1;
    },
    completeTodo: (state, action: PayloadAction<number>) => {
      const todo = state.todos[action.payload];
      if (!todo.completed) {
        state.todos[action.payload].completed = true;
        state.completedTodos += 1;
        state.todos.splice(action.payload, 1);
      }
    },
  },
});

export const { addTodo, deleteTodo, completeTodo } = todoSlice.actions;
export default todoSlice.reducer;
