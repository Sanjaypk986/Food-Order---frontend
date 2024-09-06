import { createSlice } from "@reduxjs/toolkit";

export const addressSlice = createSlice({
  name: "address",
  initialState: {
    data: {},
  },
  reducers: {
    // Action to set all addresss in the state
    setAddress: (state, action) => {
      state.data = action.payload;
    },
  },
});

// Action creators are generated for each case reducer function
export const { setAddress } = addressSlice.actions;

export default addressSlice.reducer;
