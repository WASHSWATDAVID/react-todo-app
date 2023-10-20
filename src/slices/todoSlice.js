import { createSlice } from '@reduxjs/toolkit';
import moment from 'moment';
import _ from 'lodash';

const getInitialTodo = () => [
  {
    id: 1,
    title: 'Title',
    status: 'complete',
    time: moment(new Date('2023-10-17T05:42:46.660Z')).format(
      'h:mm A, DD/MM/YYYY'
    ),
  },
];
const initialValue = {
  filterStatus: 'all',
  filterList: [
    {label: 'All', value: 'all'},
    {label: 'Incomplete', value: 'incomplete'},
    {label: 'Complete', value: 'complete'},
  ],
  modalValue: {
    isOpen: false,
    type: '',
    todoData: {
      id: 0,
      title: '',
      status: 'incomplete',
    }
  },
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
        time: moment().format('h:mm A, DD/MM/YYYY'),
      };
      state.todoList.push(todo);
    },
    updateTodo: (state, action) => {
      const todoList = state.todoList;

      const targetObject = _.find(todoList, { id: action.payload.id });

      if (targetObject) {
        targetObject.title = action.payload.title;
        targetObject.status = action.payload.status;
        state.todoList = todoList;
      }
    },
    deleteTodo: (state, action) => {
      const todoList = state.todoList;
      _.remove(todoList, (obj) => obj.id === action.payload.id);

      state.todoList = todoList;
    },
    updateFilterStatus: (state, action) => {
      state.filterStatus = action.payload.filterStatus;
    },
    handleModal: (state, action) => {
      const { type, isOpen, todoData } = action.payload;
      const id = todoData?.id;
      const title = todoData?.title;
      const status = todoData?.status;

      state.modalValue.type = type;
      state.modalValue.isOpen = isOpen;

      if (isOpen) {
        if (type === 'add') {
          state.modalValue.todoData.title = '';
          state.modalValue.todoData.status = 'incomplete';
        } else if (type === 'update') {
          state.modalValue.todoData.id = id;
          state.modalValue.todoData.title = title;
          state.modalValue.todoData.status = status;
        } 
      } else {
        console.log("aa")
      }
    },
  },
});

export const { addTodo, updateTodo, deleteTodo, updateFilterStatus, handleModal } =
  todoSlice.actions;
export default todoSlice.reducer;
