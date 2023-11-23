"use client";
import { createSlice } from "@reduxjs/toolkit";

// Define the type for the state
interface CursorState {
  toggleCursor: boolean;
}

const initialState: CursorState = {
  toggleCursor: true,
};

// Creating Slice or Reducer
const CursorSlice = createSlice({
  name: "cursor",
  initialState,
  reducers: {
    toggleCursorFunc: (state) => {
      state.toggleCursor = !state.toggleCursor;
    },
  },
});

//for calling in Action time
export const { toggleCursorFunc } = CursorSlice.actions;

//Because we are exporting it as default we can import it by any name eg:ThemeReducer
export default CursorSlice.reducer;
