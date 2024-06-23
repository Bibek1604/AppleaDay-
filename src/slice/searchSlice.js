import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import axios from 'axios';

export const fetchSearchResults = createAsyncThunk(
  'search/fetchSearchResults',
  async (searchQuery) => {
    try {
      const response = await axios.get(`http://127.0.0.1:8000/search/?query=${searchQuery}`);
      return response.data.products; // Assuming the response structure has a 'products' key
    } catch (error) {
      throw Error('Failed to fetch search results');
    }
  }
);

const initialState = {
  searchResults: [],
  status: 'idle',
  error: null,
};

const searchSlice = createSlice({
  name: 'search',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchSearchResults.pending, (state) => {
        state.status = 'loading';
        state.error = null;
      })
      .addCase(fetchSearchResults.fulfilled, (state, action) => {
        state.status = 'succeeded';
        state.searchResults = action.payload;
        state.error = null;
      })
      .addCase(fetchSearchResults.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.error.message || 'An error occurred';
      });
  },
});

export const selectSearchResults = (state) => state.search.searchResults;

export default searchSlice.reducer;
