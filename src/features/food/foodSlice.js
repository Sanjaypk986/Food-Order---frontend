import { createSlice } from '@reduxjs/toolkit'

export const foodSlice = createSlice({
  name: 'food',
  initialState: {
    data: [] 
  },
  reducers: {
    // Action to set all foods in the state
    setAllFoods: (state, action) => {
      state.data = action.payload;
    },

  }
})

// Action creators are generated for each case reducer function
export const { setAllFoods } = foodSlice.actions;

export default foodSlice.reducer;
