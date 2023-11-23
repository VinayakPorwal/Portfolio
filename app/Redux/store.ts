"use client";
// Create your Redux store
import { configureStore } from "@reduxjs/toolkit";

import themeReducer from "./Features/themeSlice";
import cursorReducer from "./Features/cursorToggle";

const store = configureStore({
  reducer: {
    theme: themeReducer,
    cursor: cursorReducer,
  },
});

export default store;
// ReturnType is a built-in TypeScript utility type that extracts the return type of a function
export type RootState = ReturnType<typeof store.getState>;
// typeof store.dispatch refers to the type of this dispatch function.
export type AppDispatch = typeof store.dispatch;
