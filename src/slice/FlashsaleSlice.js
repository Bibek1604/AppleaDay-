import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

export const fetchFlashSales = createAsyncThunk(
  'flashSales/fetchFlashSales',
  async () => {
    try {
      const response = await axios.get('http://127.0.0.1:8000/flash-sales/');
      return response.data;
    } catch (error) {
      throw Error('Failed to fetch flash sales');
    }
  }
);

const initialState = {
  flashSales: [],
  status: 'idle',
  error: null,
};

const flashSaleSlice = createSlice({
  name: 'flashSales',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchFlashSales.pending, (state) => {
        state.status = 'loading';
        state.error = null;
      })
      .addCase(fetchFlashSales.fulfilled, (state, action) => {
        state.status = 'succeeded';
        state.flashSales = action.payload;
        state.error = null;
      })
      .addCase(fetchFlashSales.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.error.message || 'An error occurred';
      });
  },
});

export default flashSaleSlice.reducer;