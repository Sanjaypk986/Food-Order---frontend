import { createSlice } from "@reduxjs/toolkit";

export const cartSlice = createSlice({
  name: "cart",
  initialState: {
    items: [],
    total: 0,
  },
  reducers: {
    // Action to set all cart in the state
    getCart: (state, action) => {
      // set items and total
      state.items = action.payload.items;
      state.total = action.payload.total;
    },
    removeItem: (state, action) => {
      state.items = state.items.filter(
        (item) => item.food._id !== action.payload
      );
      state.total = state.items.reduce(
        (total, item) => total + item.food.price * item.quantity,
        0
      );
    },
    incrementItem: (state, action) => {
        const item = state.items.find(item => item.food._id === action.payload);
        if (item) {
          item.quantity += 1;
          state.total += item.food.price; // Update total price
        }
      },
      decrementItem: (state, action) => {
        const item = state.items.find(item => item.food._id === action.payload);
        if (item && item.quantity > 1) {
          item.quantity -= 1;
          state.total -= item.food.price; // Update total price
        }
      }
  },
});

// Action creators are generated for each case reducer function
export const { getCart, removeItem , incrementItem , decrementItem } = cartSlice.actions;

export default cartSlice.reducer;
