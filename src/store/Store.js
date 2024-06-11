import { configureStore } from '@reduxjs/toolkit';
import productsReducer from '../slice/productsSlice'; 
import cartReducer from '../slice/cartSlice'; 
import couponsReducer from '../slice/couponsSlice';
import flashSaleReducer from '../slice/FlashsaleSlice';
import bestsaleReducer from '../slice/bestsaleSlice';


const store = configureStore({
  reducer: {
    products: productsReducer,
    cart: cartReducer,
    coupons: couponsReducer,
    flashSales: flashSaleReducer,
    bestsale: bestsaleReducer

  },
});

export default store;
