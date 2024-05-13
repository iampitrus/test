import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { API_URL } from "../config";
import { RootState } from "../redux/store";
import Cookies from "js-cookie";

// Root api file, other apis are injected into it

export const api = createApi({
  reducerPath: "api",
  baseQuery: fetchBaseQuery({
    baseUrl: API_URL,
    prepareHeaders: (headers, { getState }) => {
      const accessRedux = (getState() as RootState).auth.accessToken;
      const userlocalStorage = JSON.parse(Cookies.get("user") || "{}");

      const accessToken = accessRedux
        ? accessRedux
        : userlocalStorage.accessToken;

      if (accessToken) {
        // Set the Authorization header with Bearer token
        headers.set("Authorization", `Bearer ${accessToken}`);
      }
      return headers;
    },
  }),
  endpoints: () => ({}),
});
