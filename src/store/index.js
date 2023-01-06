import { configureStore } from '@reduxjs/toolkit';
import { setupListeners } from '@reduxjs/toolkit/query';
import { productsApi } from './apis/productsApi';
import cartReducer from './featuers/cartSlice';
import counterReducer from './featuers/counterSlice';
import themeReducer from './featuers/themeReducer';

export const store = configureStore({
  reducer: {
    counter: counterReducer,
    cart: cartReducer,
    theme: themeReducer,
    [productsApi.reducerPath]: productsApi.reducer,
  },
  middleware: (getDefaultMiddleware) => {
    return getDefaultMiddleware().concat(productsApi.middleware);
  },
});

setupListeners(store.dispatch);

export { useGetProductsQuery } from './apis/productsApi';
