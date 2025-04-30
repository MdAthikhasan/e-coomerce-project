import { configureStore } from "@reduxjs/toolkit";

import cartReducer from "./features/cartSlice";
import productsReducer from "./features/productsSlice";
import wishlistReducer from "./features/wishlist";

const store = configureStore({
  reducer: {
    products: productsReducer,
    cartItems: cartReducer,
    wishlistItems: wishlistReducer,
  },
});

export default store;
