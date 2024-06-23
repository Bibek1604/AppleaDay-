import { configureStore } from '@reduxjs/toolkit';
import productsReducer from '../slice/productsSlice';
import cartReducer from '../slice/cartSlice';
import couponsReducer from '../slice/couponsSlice';
import flashSaleReducer from '../slice/FlashsaleSlice';
import bestsaleReducer from '../slice/bestsaleSlice';
import orderReducer from '../slice/orderSlice';
import carouselsReducer from '../slice/firstcrauselsSlice'; // Correct the import path if needed
import loginReducer from '../slice/loginSlice';
import signupReducer from '../slice/signupSlice';

// Configure store with reducers
const store = configureStore({
  reducer: {
    products: productsReducer,
    cart: cartReducer,
    coupons: couponsReducer,
    flashSales: flashSaleReducer,
    bestsale: bestsaleReducer,
    orders: orderReducer,
    carousels: carouselsReducer, // Correct the reducer key
    login: loginReducer,
    signup: signupReducer,
  },
});

export default store;
