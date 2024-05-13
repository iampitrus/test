import { api } from ".";

type Details = {
  accountNumber: number;
  bankCode: number;
};

const authApi = api.injectEndpoints({
  endpoints: (builder) => ({
    getSupportedCurrencies: builder.query<any, void>({
      query: () => ({
        method: "GET",
        url: "off-ramp/get-supported-currencies",
      }),
    }),

    getSupportedBanks: builder.query<any, void>({
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
  }),
  overrideExisting: true,
});

export const {
  useGetCurrentRatesQuery,
  useGetSupportedBanksQuery,
  useGetSupportedCurrenciesQuery,
  useResolveBankMutation,
} = authApi;
