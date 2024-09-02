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
        console.log('Action Payload:', action.payload); 
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
      console.log("Updated items:", state.items); // Log updated items
  console.log("Updated total:", state.total);
    },
  },
});

// Action creators are generated for each case reducer function
export const { getCart, removeItem } = cartSlice.actions;

export default cartSlice.reducer;
