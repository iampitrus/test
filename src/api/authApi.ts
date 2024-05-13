import { api } from ".";

type LOGIN = {
  token: string;
  email: string;
};

type googleAuth = {
  token: string;
};

type verifyEmail = {
  email: string;
};

const authApi = api.injectEndpoints({
  endpoints: (builder) => ({
    login: builder.mutation({
      query: (body: LOGIN) => ({
        method: "POST",
        url: "auth/login",
        body,
      }),
    }),

    register: builder.mutation({
      query: (params) => ({
        method: "POST",
        url: "/auth/send-verification",
        body: {
          email: params.email,
        },
      }),
    }),

    googleAuth: builder.mutation({
      query: (body: googleAuth) => ({
        method: "POST",
        url: "auth/google",
        body,
      }),
    }),

    resendOtp: builder.mutation({
      query: (body: verifyEmail) => ({
        method: "POST",
        url: "auth/resend-verification-email",
        body,
      }),
    }),
  }),
  overrideExisting: true,
});

export const {
  useLoginMutation,
  useRegisterMutation,
  useGoogleAuthMutation,
  useResendOtpMutation,
} = authApi;
