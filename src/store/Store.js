import { configureStore } from '@reduxjs/toolkit';
import productsReducer from '../slice/productsSlice';
import cartReducer from '../slice/cartSlice';
import couponsReducer from '../slice/couponsSlice';
import flashSaleReducer from '../slice/FlashsaleSlice';
import bestsaleReducer from '../slice/bestsaleSlice';
import orderReducer from '../slice/orderSlice';
import carouselsReducer from '../slice/firstcrauselsSlice'; 
import loginReducer from '../slice/loginSlice';
import signupReducer from '../slice/signupSlice';
import searchReducer from '../slice/searchSlice';
import notificationReducer from '../slice/notificationSlice';
const store = configureStore({
  reducer: {
    products: productsReducer,
    cart: cartReducer,
    coupons: couponsReducer,
    flashSales: flashSaleReducer,
    bestsale: bestsaleReducer,
    orders: orderReducer,
    carousels: carouselsReducer,
    login: loginReducer,
    signup: signupReducer,
    search: searchReducer,
    notifications: notificationReducer,
  },
});

export default store;
