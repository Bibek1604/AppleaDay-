import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

// Async thunk to fetch carousels data
export const fetchCarousels = createAsyncThunk(
  'carousels/fetchCarousels',
  async () => {
    const response = await axios.get('http://127.0.0.1:8000/enhance/');
    return response.data;  // Ensure this returns an array
  }
);

// Carousels slice
const carouselsSlice = createSlice({
  name: 'carousels',
  initialState: {
    items: [],  // Ensure initial state is an array
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
        state.items = Array.isArray(action.payload) ? action.payload : [];  // Ensure payload is an array
      })
      .addCase(fetchCarousels.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.error.message;
      });
  },
});

export default carouselsSlice.reducer;
