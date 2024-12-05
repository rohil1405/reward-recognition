import { configureStore } from "@reduxjs/toolkit";
import navigationReducer from "../slices/navigationSlice";
import productTabReducer from "../slices/ProductTabsSlice";

const store = configureStore({
  reducer: {
    navigation: navigationReducer,
    productTab: productTabReducer,
  },
});

export default store;
