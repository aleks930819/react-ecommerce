import { createSlice } from '@reduxjs/toolkit';
import { toast } from 'react-toastify';

const initialState = {
  cartItems: [],
  cartTotalQuantity: 0,
  cartTotalPrice: 0,
};

const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    addToCart(state, action) {
      const itemIndex = state.cartItems.findIndex(
        (item) => item.id === action.payload.id
      );

      if (itemIndex >= 0) {
        state.cartItems[itemIndex].itemQuantity++;
        toast.info('Increased product quantity', {
          position: 'bottom-left',
        });
      } else {
        const tempProduct = { ...action.payload, itemQuantity: 1 };
        state.cartItems.push(tempProduct);
        toast.success(`Added ${action.payload.name} to cart`, {
          position: 'bottom-left',
        });
      }

      state.cartTotalQuantity += 1;
      state.cartTotalPrice += action.payload.price;
    },

    removeItemFromCart: (state, action) => {
      const removeItem = state.cartItems.filter(
        (item) => item.id !== action.payload.id
      );
      state.cartItems = removeItem;
      console.log(action.payload);
    },
  },
});

export const { addToCart, removeItemFromCart } = cartSlice.actions;

export default cartSlice.reducer;
