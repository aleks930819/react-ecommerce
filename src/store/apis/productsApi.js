import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { JSON_API } from '../../helpers/Constants';

const productsApi = createApi({
  reducerPath: 'products',
  baseQuery: fetchBaseQuery({
    baseUrl: `${JSON_API}`,
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
