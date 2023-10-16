import { createSlice } from '@reduxjs/toolkit';

const getInitialTodo = () => {
  return [];
};

const initialValue = {
  filterStatus: 'all',
  todoList: getInitialTodo(),
};

export const todoSlice = createSlice({
  name: 'todo',
  initialState: initialValue,
  reducers: {
    // sample
    addTodo: state => {
      state.value += 1
    },
    updateTodo: state => {
      state.value += 2
    },
    deleteTodo: state => {
      state.value -= 1
    },
    updateFilterStatus: state => {
      state.value += 1
    }
  }
});

export const { addTodo, updateTodo, deleteTodo, updateFilterStatus } =
  todoSlice.actions;
export default todoSlice.reducer;
