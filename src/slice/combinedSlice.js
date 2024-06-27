import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

export const fetchAllData = createAsyncThunk('combined/fetchAllData', async () => {
  const [bestSelling, flashSales, products, recommendations] = await Promise.all([
    axios.get('http://127.0.0.1:8000/best-selling-products/'),
    axios.get('http://127.0.0.1:8000/flash-sales/'),
    axios.get('http://127.0.0.1:8000/products/'),
    axios.get('http://127.0.0.1:8000/recommendations/'),
  ]);

  return {
    bestSelling: bestSelling.data,
    flashSales: flashSales.data,
    products: products.data,
    recommendations: recommendations.data,
  };
});

const combinedSlice = createSlice({
  name: 'combined',
  initialState: {
    bestSelling: [],
    flashSales: [],
    products: [],
    recommendations: [],
    status: 'idle',
    error: null,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchAllData.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(fetchAllData.fulfilled, (state, action) => {
        state.status = 'succeeded';
        state.bestSelling = action.payload.bestSelling;
        state.flashSales = action.payload.flashSales;
        state.products = action.payload.products;
        state.recommendations = action.payload.recommendations;
      })
      .addCase(fetchAllData.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.error.message;
      });
  },
});

export default combinedSlice.reducer;
