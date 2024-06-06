import { createSlice } from "@reduxjs/toolkit";
import type { RootState } from "./store";

const initialState: {
  crypto: string;
  fiat: string;
  pair: string;
  amount: number;
  acctDetails: {
    name: string;
    accountnumber: string;
    accountname: string;
  };
} = {
  crypto: "BTC",
  fiat: "NGN",
  pair: "",
  amount: 0,
  acctDetails: { name: "", accountnumber: "", accountname: "" },
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
    setAcctDetails: (state, action) => {
      state.acctDetails = action.payload;
    },
  },
});

export const selectUser = (state: RootState) => state.user;

export const { getChosenPair, setCrypto, setFiat, setAmount, setAcctDetails } =
  userSlice.actions;

export default userSlice.reducer;
