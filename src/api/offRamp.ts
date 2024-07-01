import { api } from ".";

type Details = {
  accountNumber: string;
  bankCode: string;
};

export type Currencies = {
  success: boolean;
  data: {
    incomingCurrencies: [];
    outgoingCurrencies: [];
  };
};

type Banks = {
  success: boolean;
  data: { Code: number; Name: string }[];
};

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

const authApi = api.injectEndpoints({
  endpoints: (builder) => ({
    getSupportedCurrencies: builder.query<Currencies, void>({
      query: () => ({
        method: "GET",
        url: "off-ramp/get-supported-currencies",
      }),
    }),

    getSupportedBanks: builder.query<Banks, void>({
      query: () => ({
        method: "GET",
        url: "off-ramp/get-supported-banks",
      }),
    }),

    getCurrentRates: builder.query<any, void>({
      query: () => ({
        method: "GET",
        url: "off-ramp/get-current-rates",
      }),
    }),

    resolveBank: builder.mutation({
      query: (body: Details) => ({
        method: "POST",
        url: "off-ramp/resolve-bank",
        body,
      }),
    }),
    createPayment: builder.mutation({
      query: (body: InitPayment) => ({
        method: "POST",
        url: "off-ramp/initiate-payment",
        body,
      }),
    }),
  }),
  overrideExisting: true,
});

export const {
  useGetCurrentRatesQuery,
  useGetSupportedBanksQuery,
  useGetSupportedCurrenciesQuery,
  useResolveBankMutation,
  useCreatePaymentMutation,
} = authApi;
