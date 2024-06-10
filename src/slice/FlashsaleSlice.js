import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

const initialState = {
  flashSales: [],
  status: 'idle', 
  error: null,
};

export const fetchFlashSales = createAsyncThunk(
  'flashSales/fetchFlashSales',
  async (_, { rejectWithValue }) => {
    try {
      const response = await axios.get('http://127.0.0.1:8000/flash-sales/');
      return response.data;
    } catch (err) {
      console.error("Error fetching flash sales:", err);
      if (err.response) {
        console.error("Response data:", err.response.data);
        console.error("Response status:", err.response.status);
        console.error("Response headers:", err.response.headers);
        return rejectWithValue(err.response.data);
      } else if (err.request) {
        console.error("Request data:", err.request);
        return rejectWithValue('No response received from server.');
      } else {
        console.error("Error message:", err.message);
        return rejectWithValue(err.message);
      }
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
