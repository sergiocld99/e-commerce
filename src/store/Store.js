import { configureStore } from "@reduxjs/toolkit";
import counterSlice from "../features/counter/counterSlice";
import shopSlice from "../features/shop/shopSlice";

// REDUX STEP 2: ADD SLICE TO STORE
export default configureStore({
  reducer: {
    counterSlice,
    shopSlice
  }
})