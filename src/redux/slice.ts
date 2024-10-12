// /redux/slice.ts
import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  value: 0, // Example initial state
};

const yourSlice = createSlice({
  name: "yourSlice",
  initialState,
  reducers: {
    increment: (state) => {
      state.value += 1;
    },
    decrement: (state) => {
      state.value -= 1;
    },
  },
});

export const { increment, decrement } = yourSlice.actions;
export const yourReducer = yourSlice.reducer;
