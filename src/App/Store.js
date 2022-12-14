import { configureStore } from "@reduxjs/toolkit";

//We import the navSlice reducer to our store
import navReducer from "../Slices/navSlice";

export const Store = configureStore({
  reducer: {
    nav: navReducer,
  },
});
