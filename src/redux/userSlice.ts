import { createSlice } from "@reduxjs/toolkit";
import type { RootState } from "./store";

const initialState: {
  crypto: string;
  fiat: string;
  pair: string;
  amount: number;
} = {
  crypto: "BTC",
  fiat: "NGN",
  pair: "",
  amount: 0,
};

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    setFiat: (state, action) => {
      state.fiat = action.payload;
    },
    setCrypto: (state, action) => {
      state.crypto = action.payload;
    },
    getChosenPair: (state) => {
      state.pair = state.crypto + state.fiat;
    },
    setAmount: (state, action) => {
      state.amount = action.payload;
    },
  },
});

export const selectUser = (state: RootState) => state.user;

export const { getChosenPair, setCrypto, setFiat, setAmount } =
  userSlice.actions;

export default userSlice.reducer;
