import { createSlice } from "@reduxjs/toolkit";
import { initialState } from "./contacts";

const filterSlice = createSlice({
  name: "filters",
  initialState,
  reducers: {
    filterContact: (state, action) => {
      state.filters.name = action.payload;
    },
  },
});

export const { filterContact } = filterSlice.actions;

export const filterReducer = filterSlice.reducer;
