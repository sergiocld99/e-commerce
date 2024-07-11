import { configureStore } from "@reduxjs/toolkit";
import counterSlice from "../features/counter/counterSlice";
import shopSlice from "../features/shop/shopSlice";
import cartSlice from "../features/cart/cartSlice";
import authSlice from "../features/auth/authSlice";
import { shopApi } from "../services/shopService";
import { setupListeners } from "@reduxjs/toolkit/query";
import { authApi } from "../services/authService";

// REDUX STEP 2: ADD SLICE TO STORE
const store = configureStore({
  reducer: {
    counterSlice,
    shopSlice,
    cartSlice,
    authSlice,
    // RTK-STORE STEP 1: ADD API REDUCER
    [shopApi.reducerPath]: shopApi.reducer,
    [authApi.reducerPath]: authApi.reducer,
  },
  // RTK-STORE STEP 2: ADD API MIDDLEWARE
  middleware: defaultMiddleware => (
    defaultMiddleware()
      .concat(shopApi.middleware)
      .concat(authApi.middleware)
  )
})

// RTK-STORE STEP 3: ADJUST LISTENERS
setupListeners(store.dispatch)

export default store