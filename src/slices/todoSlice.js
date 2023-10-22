import { createSlice } from "@reduxjs/toolkit";
import moment from "moment";
import "moment/locale/ko";

const getInitialTodo = () => [];

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
        time: moment().format("YYYY-MM-DD HH:mm:ss"),
      };
      state.todoList = [...state.todoList, todo];
      console.log(state.todoList);
    },
    updateFilterStatus(state, action) {
      const todoList = [...state.todoList]; // 복제해서 새로운 배열 생성
      const changeTodoIndex = todoList.findIndex(
        (todo) => todo.id === action.payload.id
      );
      if (changeTodoIndex !== -1) {
        todoList[changeTodoIndex].status =
          todoList[changeTodoIndex].status === "incomplete"
            ? "completed"
            : "incomplete";
        state.todoList = todoList; // 직접 업데이트
      }
    },
    updateTodo(state, action) {
      const todoList = [...state.todoList]; // 복제해서 새로운 배열 생성
      const changeTodoIndex = todoList.findIndex(
        (todo) => todo.id === action.payload.id
      );
      console.log(changeTodoIndex);
      if (changeTodoIndex !== -1) {
        todoList[changeTodoIndex] = {
          ...action.payload, // 다른 프로퍼티들을 그대로 복사
          time: moment().format("YYYY-MM-DD HH:mm:ss"),
        };
      }
      state.todoList = todoList;
    },
    deleteTodo(state, action) {
      const todoList = [...state.todoList]; // 복제해서 새로운 배열 생성
      const changeTodoIndex = todoList.findIndex(
        (todo) => todo.id === action.payload.id
      );
      todoList.splice(changeTodoIndex, 1);
      state.todoList = todoList;
    },
  },
});

export const { addTodo, updateTodo, deleteTodo, updateFilterStatus } =
  todoSlice.actions;
export default todoSlice.reducer;
