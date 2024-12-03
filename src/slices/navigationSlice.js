import { createSlice } from "@reduxjs/toolkit";

const navigationSlice = createSlice({
    name: 'navigation',
    initialState: {currentPage: 'Recognize'},
    reducers: {
        navigateTo: (state, action) => {
            state.currentPage = action.payload;
        }
    }
});

export const {navigateTo} = navigationSlice.actions;
export default navigationSlice.reducer;