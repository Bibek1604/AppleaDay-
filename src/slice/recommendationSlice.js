import axios from 'axios';
import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

export const fetchRecommendations = createAsyncThunk('recommendations/fetchRecommendations', async () => {
    const response = await axios.get('http://127.0.0.1:8000/recommendations/');
    return response.data;
}
);

const recommendationSlice = createSlice({
    name: 'recommendations',
    initialState: {
        items: [],
        status: 'idle',
        error: null,
    },
    extraReducers: (builder) => {
        builder
            .addCase(fetchRecommendations.pending, (state) => {
                state.status = 'loading';
            })
            .addCase(fetchRecommendations.fulfilled, (state, action) => {
                state.status = 'succeeded';
                state.items = action.payload;
            })
            .addCase(fetchRecommendations.rejected, (state, action) => {
                state.status = 'failed';
                state.error = action.error.message;
            });
    },  
});

export default recommendationSlice.reducer;