import { createSlice } from "@reduxjs/toolkit";

export const restaurantSlice = createSlice({
  name: "restaurant",
  initialState: {
    restaurant: [],
    orders: [],
  },
  reducers: {
    setAllRestaurants: (state, action) => {
      state.restaurant = action.payload;
    },
    setRestaurant: (state, action) => {
      state.restaurant = action.payload;
    },
    resetRestaurant: (state) => {
      state.restaurant = [];
    },

  },
});

export const { setAllRestaurants,setRestaurant,resetRestaurant } = restaurantSlice.actions;

export default restaurantSlice.reducer;
