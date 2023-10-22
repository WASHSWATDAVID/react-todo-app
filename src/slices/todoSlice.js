import { createSlice } from "@reduxjs/toolkit";

const getInitialTodo = () => {
  return [];
};

const initialValue = {
  filterStatus: "all",
  todoList: getInitialTodo(),
};

export const todoSlice = createSlice({
  name: "todo",
  initialState: initialValue,
  reducers: {
    addTodo(state, action) {
      const todo = {
        id: state.todoList.length + 1,
        title: action.payload.title,
        status: action.payload.status,
      };
      state.todoList = [...state.todoList, todo];
      console.log(state.todoList);
    },
  },
});

export const { addTodo, updateTodo, deleteTodo, updateFilterStatus } =
  todoSlice.actions;
export default todoSlice.reducer;
