import { configureStore } from "@reduxjs/toolkit";
import cartReducer from "./features/cartSlice";
import wishlistReducer from "./features/wishSlice";
const store = configureStore({
  reducer: {
    cartItems: cartReducer,
    wishlistItems: wishlistReducer,
  },
});

export default store;
