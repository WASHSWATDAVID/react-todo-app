import { createSlice } from "@reduxjs/toolkit";
import moment from 'moment';
import 'moment/locale/ko';

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
        ...action.payload,
        id: state.todoList.length + 1,
        time : moment().format('YYYY-MM-DD HH:mm:ss')
      };
      state.todoList = [...state.todoList, todo];
      console.log(state.todoList);
    },
  },
});

export const { addTodo, updateTodo, deleteTodo, updateFilterStatus } =
  todoSlice.actions;
export default todoSlice.reducer;
