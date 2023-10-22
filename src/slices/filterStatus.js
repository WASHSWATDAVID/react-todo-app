import { createSlice } from "@reduxjs/toolkit";

export const filterSlice = createSlice({
  name: "filter",
  initialState: { filterStatus: "all" },
  reducers: {
    changeFilter(state, action) {
      console.log(action.payload);
      state.filterStatus = action.payload;
    },
  },
});

export const { changeFilter } = filterSlice.actions;
export default filterSlice.reducer;
