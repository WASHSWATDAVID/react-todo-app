import { createSlice } from '@reduxjs/toolkit';
import moment from 'moment'

const getInitialTodo = () => [{id: 1, title: 'Title', status: 'complete', time: moment(new Date('2023-10-17T05:42:46.660Z')).format('h:mm A, DD/MM/YYYY')}];
const initialValue = {
  filterStatus: 'all',
  todoList: getInitialTodo(),
};

export const todoSlice = createSlice({
  name: 'todo',
  initialState: initialValue,
  reducers: {
    addTodo: (state, action) => {
      const id = state.todoList.length + 1;
      const todo = {
        id,
        title: action.payload.title,
        status: action.payload.status,
        time: moment().format('h:mm A, DD/MM/YYYY')
      };
      state.todoList.push(todo);
    },
    updateTodo: (state, action) => {
      const targetObject = _.find(todoList, { id: action.payload.id });

      if (targetObject) {
        targetObject.title = action.payload.title;
        targetObject.status = action.payload.status;
        targetObject.time = action.payload.time;
        state.todoList = todoList;
      }
    },
    deleteTodo: (state, action) => {
      _.remove(todoList, (obj) => obj.id === action.payload.id);

      state.todoList = todoList;
    },
    updateFilterStatus: (state, action) => {
      state.filterStatus = action.payload;
    },
  },
});

export const { addTodo, updateTodo, deleteTodo, updateFilterStatus } =
  todoSlice.actions;
export default todoSlice.reducer;
