import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
  name: "cart",
  initialState: {
    cartItems: JSON.parse(localStorage.getItem("cartItems")) || [],
  },
  reducers: {
    addItem: (state, action) => {
      state.cartItems.push(action.payload);
      localStorage.setItem("cartItems", JSON.stringify(state.cartItems));
    },
    removeItem: (state, action) => {
      state.cartItems = state.cartItems.filter(item => item.id !== action.payload);
      localStorage.setItem("cartItems", JSON.stringify(state.cartItems));
    },
    clearCart: (state) => {
      state.cartItems = [];
      localStorage.removeItem("cartItems");
    },
    setCartItems: (state, action) => {
      state.cartItems = action.payload;
      localStorage.setItem("cartItems", JSON.stringify(state.cartItems));
    },
    updateQuantity: (state, action) => {
      state.cartItems = state.cartItems.map(item => item.id === action.payload.id ? { ...item, quantity: action.payload.quantity } : item);
      localStorage.setItem("cartItems", JSON.stringify(state.cartItems));
    },
    updateCart: (state, action) => {  
      state.cartItems = action.payload;
    },

  },
});

export const { addItem, removeItem, clearCart, setCartItems, updateCart, updateQuantity , removeFromCart} = cartSlice.actions;

export const selectCartItems = (state) => state.cart.cartItems;

export default cartSlice.reducer;
