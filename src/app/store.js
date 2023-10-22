import { configureStore } from "@reduxjs/toolkit";
import todoReducer from "../slices/todoSlice";
import filterReducer from "../slices/filterStatus";

export const store = configureStore({
  reducer: {
    todo: todoReducer,
    filter: filterReducer,
  },
});
