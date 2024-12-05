import { createSlice, PayloadAction } from "@reduxjs/toolkit";

const initialState = {
  activeTab: "All",
};

const productTabSlice = createSlice({
  name: "productTab",
  initialState,
  reducers: {
    setActiveTab(state, action) {
      state.activeTab = action.payload;
    },
  },
});

export const { setActiveTab } = productTabSlice.actions;

export default productTabSlice.reducer;
