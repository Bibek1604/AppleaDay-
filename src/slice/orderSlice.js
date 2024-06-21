// orderSlice.js

import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

// Define a thunk to asynchronously place an order
export const placeOrder = createAsyncThunk(
  "orders/placeOrder",
  async (orderData, { rejectWithValue }) => {
    try {
      // Make a POST request to your Django backend
      const response = await axios.post("http://127.0.0.1:8000/order/", orderData);
      return response.data; // Return the response data on success
    } catch (error) {
      // Handle and return the error using rejectWithValue
      return rejectWithValue(error.response.data || 'Failed to place order');
    }
  }
);

// Define the initial state and reducers for orders
const orderSlice = createSlice({
  name: "orders",
  initialState: {
    orders: [],
    status: "idle", // "idle", "loading", "succeeded", "failed"
    error: null
  },
  reducers: {
    clearOrders: (state) => {
      state.orders = [];
    }
  },
  extraReducers: (builder) => {
    builder
      .addCase(placeOrder.pending, (state) => {
        state.status = "loading";
        state.error = null; // Clear any previous errors
      })
      .addCase(placeOrder.fulfilled, (state, action) => {
        state.status = "succeeded";
        state.orders.push(action.payload); // Add the new order to state
      })
      .addCase(placeOrder.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.payload || 'Failed to place order'; // Set the error message
      });
  }
});

// Export action creators and reducer
export const { clearOrders } = orderSlice.actions;
export default orderSlice.reducer;
