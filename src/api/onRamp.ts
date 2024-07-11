import { api } from ".";

type InitPayment = {
  businessId: string;
  incomingCurrency: string;
  incomingAmount: number;
  outgoingCurrency: string;
  paymentType: string;
  country: string;
  accountNumber: string;
  accountName: string;
  bank: string;
  bankCode: string;
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
