import { createSlice, nanoid } from "@reduxjs/toolkit";

const initialState = [{ id: 1, task: "This is a task" }];

export const todoSlice = createSlice({
  name: "Todolist",
  initialState,
  reducers: {
    addTask: (state, action) => {
      state.push({ id: nanoid(), task: action.payload });
    },
    removeTask: (state, action) => {
      return state.filter((task) => task.id !== action.payload);
    },
    editTask: (state, action) => {
      const { id, updated } = action.payload;
      (state.find((todo) => todo.id === id).task = updated);
    },
  },
});

export const { addTask, removeTask, editTask } = todoSlice.actions;

export default todoSlice.reducer;
