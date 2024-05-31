import { createSlice } from "@reduxjs/toolkit";
import type { RootState } from "./store";

const initialState: { currencyPair: string } = {
  currencyPair: "",
};

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    setChosenPair: (state, action) => {
      state.currencyPair = action.payload;
    },
  },
});

export const selectUser = (state: RootState) => state.user;

export const { setChosenPair } = userSlice.actions;

export default userSlice.reducer;
