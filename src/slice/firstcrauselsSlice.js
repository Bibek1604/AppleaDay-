import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

export const fetchCarousels = createAsyncThunk(
  'carousels/fetchCarousels',
  async () => {
    try {
      const response = await axios.get('http://127.0.0.1:8000/enhance/');
      return response.data;
    } catch (error) {
      throw Error('Failed to fetch carousels');
    }
  }
);

const firstcrauselsSlice = createSlice({
  name: 'carousels',
  initialState: {
    items: [],
    status: 'idle',
    error: null,
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchCarousels.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(fetchCarousels.fulfilled, (state, action) => {
        state.status = 'succeeded';
        state.items = action.payload;
      })
      .addCase(fetchCarousels.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.error.message;
      });
  },
});

export default firstcrauselsSlice.reducer;
