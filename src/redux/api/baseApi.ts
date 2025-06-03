import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const baseApi = createApi({
  reducerPath: 'api',
  baseQuery: fetchBaseQuery({
    baseUrl: process.env.NEXT_PUBLIC_PORTFOLIO_SERVER_API_URL,
  }),
  endpoints: () => ({}),
  tagTypes: ['Projects'],
}); 