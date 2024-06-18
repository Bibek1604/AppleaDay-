import { configureStore } from '@reduxjs/toolkit';
import productsReducer from '../slice/productsSlice';
import cartReducer from '../slice/cartSlice';
import couponsReducer from '../slice/couponsSlice';
import flashSaleReducer from '../slice/FlashsaleSlice';
import bestsaleReducer from '../slice/bestsaleSlice';
import orderReducer from '../slice/orderSlice';

const store = configureStore({
  reducer: {
    products: productsReducer,
    cart: cartReducer,
    coupons: couponsReducer,
    flashSales: flashSaleReducer,
    bestsale: bestsaleReducer,
    orders: orderReducer,
  },
});

export default store;
