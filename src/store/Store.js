import { configureStore } from '@reduxjs/toolkit';
import productsReducer from '../slice/productsSlice'; // Adjusted import path

const store = configureStore({
  reducer: {
    products: productsReducer,
  },
});

export default store;
