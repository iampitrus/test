import { createSlice } from "@reduxjs/toolkit";
import type { RootState } from "./store";
import Cookies from "js-cookie";

const initialState: { user: any; accessToken: string; showAuth: boolean } = {
  user: null,
  accessToken: "",
  showAuth: false,
};

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    // called only with final sign in
    setUser: (state, action) => {
      Cookies.set(
        "userData",
        JSON.stringify({
          user: action.payload.data,
          accessToken: action.payload.data.accessToken,
        })
      );
      state.user = action.payload.data;
      state.accessToken = action.payload.data.accessToken;
    },
    logoutUser: (state) => {
      Cookies.remove;
      state.user = null;
      state.accessToken = "";
    },
    initialUser: (state, action) => {
      state.user = action.payload;
    },
    showAuth: (state, action) => {
      state.showAuth = action.payload;
    },
  },
});

export const selectAuth = (state: RootState) => state.auth;

export const { setUser, logoutUser, initialUser, showAuth } = authSlice.actions;

export default authSlice.reducer;
