"use client";
import { createSlice } from "@reduxjs/toolkit";

// Define the type for the state
interface ThemeState {
  darkMode: boolean;
}

const initialState: ThemeState = {
  darkMode: true,
};

// Creating Slice or Reducer
const themeSlice = createSlice({
  name: "Slice",
  initialState,
  reducers: {
    toggleTheme: (state) => {
      state.darkMode = !state.darkMode;
    },
  },
});

//for calling in Action time
export const { toggleTheme } = themeSlice.actions;

//Because we are exporting it as default we can import it by any name eg:ThemeReducer
export default themeSlice.reducer;
