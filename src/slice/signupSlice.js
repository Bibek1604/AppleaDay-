import axios from "axios";

import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

export const fetchSignup = createAsyncThunk(
    "signup/fetchSignup",
    async (signupData) => {
        const response = await axios.post("http://127.0.0.1:8000/register/", signupData);
        return response.data;
    }

);

const signupSlice = createSlice({
    name: "signup",
    initialState: {
        items: [],
        status: "idle",
        error: null,
    },
    extraReducers: (builder) => {
        builder
            .addCase(fetchSignup.pending, (state) => {
                state.status = "loading";
            })
            .addCase(fetchSignup.fulfilled, (state, action) => {
                state.status = "succeeded";
                state.items = action.payload;
            })
            .addCase(fetchSignup.rejected, (state, action) => {
                state.status = "failed";
                state.error = action.error.message;
            });
    },
});

export default signupSlice.reducer;
