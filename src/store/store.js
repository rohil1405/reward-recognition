import { configureStore } from "@reduxjs/toolkit";
import navigationReducer from '../slices/navigationSlice';

const store = configureStore({
  reducer: {
    navigation: navigationReducer,
  },
});

export default store;
