import React from 'react'
import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios'
import { createSlice } from '@reduxjs/toolkit';

export const fetchOrder = createAsyncThunk('order/fetchOrder', async () => {
    try {
      const response = await axios.post('http://127.0.0.1:8000/order/');
      return response.data;
    } catch (error) {
      throw error;
    }
  });
  

const initialState = {
    order: [],
    status: 'idle',
    error: null,
    };




const  orderSlice = createSlice ({
  name: 'order',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchOrder.pending, (state) => {
        state.status = 'loading';
        state.error = null;
      })
      .addCase(fetchOrder.fulfilled, (state, action) => {
        state.status = 'succeeded';
        state.order = action.payload;
        state.error = null;
      })
      .addCase(fetchOrder.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.error.message || 'An error occurred';
      });
    },
  });

export default orderSlice.reducer;