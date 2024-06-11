import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

const initialState = {
  bestsale: [],
  status: 'idle', 
  error: null,
};

export const fetchbestsale = createAsyncThunk(
  'bestsale/fetchbestsale',
  async (_, { rejectWithValue }) => {
    try {
      const response = await axios.get('http://127.0.0.1:8000/best-selling-products/');
      return response.data;
    } catch (err) {
      console.error("Error fetching best sales:", err);
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

const bestsaleSlice = createSlice({
  name: 'bestsale',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchbestsale.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(fetchbestsale.fulfilled, (state, action) => {
        state.status = 'succeeded';
        state.bestsale = action.payload;
      })
      .addCase(fetchbestsale.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.payload || 'An error occurred';
      });
  },
});

export default bestsaleSlice.reducer;
