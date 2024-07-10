import { configureStore } from "@reduxjs/toolkit";
import counterSlice from "../features/counter/counterSlice";
import shopSlice from "../features/shop/shopSlice";
import { shopApi } from "../services/shopService";
import { setupListeners } from "@reduxjs/toolkit/query";

// REDUX STEP 2: ADD SLICE TO STORE
const store = configureStore({
  reducer: {
    counterSlice,
    shopSlice,
    // RTK-STORE STEP 1: ADD API REDUCER
    [shopApi.reducerPath]: shopApi.reducer
  },
  // RTK-STORE STEP 2: ADD API MIDDLEWARE
  middleware: defaultMiddleware => defaultMiddleware().concat(shopApi.middleware)
})

// RTK-STORE STEP 3: ADJUST LISTENERS
setupListeners(store.dispatch)

export default store