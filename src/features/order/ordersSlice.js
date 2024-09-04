import { createSlice } from "@reduxjs/toolkit";

export const ordersSlice = createSlice({
  name: "orders",
  initialState: {
    items: [], 
  },
  reducers: {
    getOrders: (state, action) => {
      state.items = action.payload;
    },
    cancelItem: (state, action) => {
      // Find the order by ID and update its status
      const orderIndex = state.items.findIndex(
        (order) => order._id === action.payload
      );
      if (orderIndex !== -1) {
        state.items[orderIndex].status = "Canceled";
      }
    },
  },
});

export const { getOrders, cancelItem } = ordersSlice.actions;

export default ordersSlice.reducer;
