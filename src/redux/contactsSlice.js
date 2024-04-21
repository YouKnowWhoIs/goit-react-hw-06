import { createSlice } from "@reduxjs/toolkit";
import { initialState } from "./contacts";

const contactSlice = createSlice({
  name: "contact", // case "contact/...":
  initialState,
  reducers: {
    addContact: (state, action) => {
      state.contacts.items.push(action.payload);
    }, // case "contact/addContact":
    deleteContact: (state, action) => {
      state.contacts.items = state.contacts.items.filter(
        (contact) => contact.id !== action.payload
      );
    }, // case "contact/deleteContact":
  },
});

export const { addContact, deleteContact } = contactSlice.actions;

export const contactReducer = contactSlice.reducer;
