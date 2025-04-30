import { createSlice } from "@reduxjs/toolkit";
import getProducts from "../../getData/products";
const products = await getProducts();
const initialState = {
  items: JSON.parse(localStorage.getItem("wishlistItem")) || [],
  total: 0,
};

const wishlistSlice = createSlice({
  name: "wishlist",
  initialState,
  reducers: {
    addToWishlist: (state, { payload }) => {
      const existingItem = state.items?.find(({ id }) => id === payload);
      if (existingItem) {
        const filterd = state.items.filter(
          (item) => item.id !== existingItem.id
        );
        state.items = filterd;
        localStorage.setItem("wishlistItem", JSON.stringify(state.items));
      } else {
        const item = products.find((product) => product.id === payload);
        state.items.push(item);
        localStorage.setItem("wishlistItem", JSON.stringify(state.items));
      }
    },
    removeFromWishlist: (state, { payload }) => {
      const filterd = state.items.filter((item) => item.id !== payload);
      state.items = filterd;
      localStorage.setItem("wishlistItem", JSON.stringify(state.items));
    },
  },
});

export const { addToWishlist, removeFromWishlist } = wishlistSlice.actions;
export default wishlistSlice.reducer;
