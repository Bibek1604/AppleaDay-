// src/features/flashSale/flashSaleSlice.js

import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

const initialState = {
  flashSales: [],
  status: 'idle', // 'idle' | 'loading' | 'succeeded' | 'failed'
  error: null
};

// Async thunk to fetch flash sales
export const fetchFlashSales = createAsyncThunk(
  'flashSales/fetchFlashSales',
  async (_, { rejectWithValue }) => {
    try {
      const response = await axios.get('http://127.0.0.1:8000/flash-sales/');
      return response.data;
    } catch (err) {
      // Return the error message
      return rejectWithValue(err.response ? err.response.data : err.message);
    }
  }
);

const flashSaleSlice = createSlice({
  name: 'flashSales',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchFlashSales.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(fetchFlashSales.fulfilled, (state, action) => {
        state.status = 'succeeded';
        state.flashSales = action.payload;
      })
      .addCase(fetchFlashSales.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.payload || 'An error occurred';
      });
  },
});

export default flashSaleSlice.reducer;
