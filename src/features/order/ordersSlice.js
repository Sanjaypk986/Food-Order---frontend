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
      const { orderId, restaurantId } = action.payload;
      
      // Find the order by ID
      const orderIndex = state.items.findIndex((order) => order._id === orderId);
      
      if (orderIndex !== -1) {
        if (restaurantId) {
          // Find the restaurant by restaurant ID and update its status
          const restaurantIndex = state.items[orderIndex].restaurants.findIndex(
            (restaurant) => restaurant.restaurant._id === restaurantId
          );
          
          if (restaurantIndex !== -1) {
            state.items[orderIndex].restaurants[restaurantIndex].status = "Cancelled";
          }
        } else {
          // If no restaurantId, cancel the entire order
          state.items[orderIndex].status = "Cancelled";
        }
      }
    },
    
    changeOrderStatus: (state, action) => {
      const { restaurantOrderId, status } = action.payload;    
      // Finding the order by comparing the correct  orderId
      const orderIndex = state.items.findIndex((order) => {
        return order._id === restaurantOrderId; // Compare with the outer orderId
      });
      if (orderIndex === -1) {
        return;
      } 
      const order = state.items[orderIndex];   
      // Update the status of the found order
      order.status = status;
    },
    
    
    
  },
});

export const { getOrders, cancelItem, changeOrderStatus } = ordersSlice.actions;

export default ordersSlice.reducer;
