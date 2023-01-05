import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

const productsApi = createApi({
  reducerPath: 'products',
  baseQuery: fetchBaseQuery({
    baseUrl: 'http://localhost:3006',
    fetchFn: async (...args) => {
      return fetch(...args);
    },
  }),
  endpoints(builder) {
    return {
      getProducts: builder.query({
        query: () => {
          return {
            url: '/products',
          };
        },
      }),
    };
  },
});

export const { useGetProductsQuery } = productsApi;
export { productsApi };
