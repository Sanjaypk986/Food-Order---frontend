import { createSlice } from "@reduxjs/toolkit";

export const userSlice = createSlice({
  name: "user",
  initialState: {
    user: [],
  },
  reducers: {
    setUser: (state, action) => {
      state.user = action.payload;
    },
    resetUser: (state) => {
      state.user = [];
    },
  },
});

export const { setUser,resetUser } = userSlice.actions;

export default userSlice.reducer;
