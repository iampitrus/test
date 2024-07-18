import { api } from ".";

type InitPayment = {
  fullName: string;
  incomingCurrency: string;
  outgoingCurrency: string;
  amount: number;
  rateKey: string;
  network: string;
  currency: string;
  cryptoAddress: string;
  fee: number;
};

const onRampApi = api.injectEndpoints({
  endpoints: (builder) => ({
    createPaymentBuy: builder.mutation({
      query: (body: InitPayment) => ({
        method: "POST",
        url: "on-ramp/initiate-payment",
        body,
      }),
    }),
  }),
  overrideExisting: true,
});

export const { useCreatePaymentBuyMutation } = onRampApi;
