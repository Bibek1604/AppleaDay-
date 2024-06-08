import axios from 'axios';
import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

export const validateCoupon = createAsyncThunk(
  'coupons/validateCoupon',
  async (code) => {
    const response = await axios.get('http://127.0.0.1:8000/coupons/');
    const coupons = response.data;
    const coupon = coupons.find(coupon => coupon.code === code && coupon.is_active);
    if (!coupon) {
      throw new Error('Invalid coupon code');
    }
    return { discount: parseFloat(coupon.discount_amount) };
  }
);

const couponsSlice = createSlice({
  name: 'coupons',
  initialState: {
    discount: 0,
    status: 'idle',
    error: null,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(validateCoupon.pending, (state) => {
        state.status = 'loading';
        state.error = null;
      })
      .addCase(validateCoupon.fulfilled, (state, action) => {
        state.status = 'succeeded';
        state.discount = action.payload.discount;
        state.error = null;
      })
      .addCase(validateCoupon.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.error.message;
        state.discount = 0;
      });
  },
});

export default couponsSlice.reducer;
