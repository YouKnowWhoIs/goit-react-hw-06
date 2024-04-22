import { createSlice } from "@reduxjs/toolkit";
// import { initialState } from "./contacts";

const initialState = {
  items: [],
  filters: {
    name: "",
  },
};

const changeFilter = createSlice({
  name: "filters",
  initialState,
  reducers: {
    filterContact: (state, action) => {
      state.filters.name = action.payload;
    },
  },
});

export const { filterContact } = changeFilter.actions;

export const filterReducer = changeFilter.reducer;
