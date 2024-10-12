// /redux/store.ts
import { configureStore } from "@reduxjs/toolkit";
import { yourReducer } from "./slice"; // Import your slice reducer

export const store = configureStore({
  reducer: {
    yourSlice: yourReducer, // Add your reducer here
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
