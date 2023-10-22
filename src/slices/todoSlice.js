import { createSlice } from "@reduxjs/toolkit";
import moment from "moment";
import "moment/locale/ko";
import { todoStatus } from "./todoAction";

const getInitialTodo = () => [];

export const todoSlice = createSlice({
  name: "todo",
  initialState: {
    todoList: getInitialTodo()
  },
  reducers: {
    // todo 추가
    addTodo(state, action) {
      const todo = {
        ...action.payload,
        id: state.todoList.length + 1,
        time: moment().format("YYYY-MM-DD HH:mm:ss")
      };
      state.todoList = [...state.todoList, todo];
      console.log(state.todoList);
    },
    // todo status 업데이트
    updateFilterStatus(state, action) {
      const updatedTodoList = state.todoList.map((todo) => {
        if (todo.id === action.payload.id) {
          return {
            ...todo,
            status:
              todo.status === todoStatus.INCOMPLETE
                ? todoStatus.COMPLETED
                : todoStatus.INCOMPLETE
          };
        }
        return todo; // 나머지 항목은 그대로 둠
      });
      return { ...state, todoList: updatedTodoList };
    },
    // todo 수정
    updateTodo(state, action) {
      const todoList = state.todoList.map((todo) => {
        if (todo.id === action.payload.id) {
          return {
            ...action.payload,
            time: moment().format("YYYY-MM-DD HH:mm:ss")
          };
        }
        return todo;
      });
      state.todoList = todoList;
    },
    // todo 삭제
    deleteTodo(state, action) {
      const todoList = [...state.todoList]; // 복제해서 새로운 배열 생성
      const changeTodoIndex = todoList.findIndex(
        (todo) => todo.id === action.payload.id
      );
      todoList.splice(changeTodoIndex, 1);
      state.todoList = todoList;
    }
  }
});

export const { addTodo, updateTodo, deleteTodo, updateFilterStatus } =
  todoSlice.actions;
export default todoSlice.reducer;
