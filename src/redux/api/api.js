import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const apiSlice = createApi({
  reducerPath: "api",

  baseQuery: fetchBaseQuery({ baseUrl: "https://pcbuilderserver.vercel.app" }),

  endpoints: (builder) => ({
    getProducts: builder.query({
      query: () => "/api/featured",
    }),
  }),
});

export const { useGetProductsQuery } = apiSlice;
