import { configureStore } from '@reduxjs/toolkit';
import productsReducer from '../slice/productsSlice'; 
import cartReducer from '../slice/cartSlice'; 
import couponsReducer from '../slice/couponsSlice';

const store = configureStore({
  reducer: {
    products: productsReducer,
    cart: cartReducer,
    coupons: couponsReducer,
  },
});

export default store;
