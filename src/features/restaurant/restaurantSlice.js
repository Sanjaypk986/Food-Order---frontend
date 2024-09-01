import { createSlice } from "@reduxjs/toolkit";

export const restaurantSlice = createSlice({
  name: "restaurant",
  initialState: {
    data: [],
  },
  reducers: {
    setAllRestaurants: (state, action) => {
      state.data = action.payload;
    },
  },
});

export const { setAllRestaurants } = restaurantSlice.actions;

export default restaurantSlice.reducer;
