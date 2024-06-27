import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

export const fetchProducts = createAsyncThunk('bestsale/fetchbestsale', async () => {
  const response = await axios.get('http://127.0.0.1:8000/best-selling-products/');
  return response.data;
});

const initialState = {
  bestsale: [],
  status: 'idle',
  error: null,
};

const bestsaleSlice = createSlice({
  name: 'bestsale',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchProducts.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(fetchProducts.fulfilled, (state, action) => {
        state.status = 'succeeded';
        state.bestsale = action.payload;
      })
      .addCase(fetchProducts.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.error.message;
      });
  },
});

export default bestsaleSlice.reducer;