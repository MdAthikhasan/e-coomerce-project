import { createSlice } from "@reduxjs/toolkit";
import getProducts from "../../getData/products";
const products = await getProducts();
const initialState = {
  items: JSON.parse(localStorage.getItem("cartItems")) || [],
  total: 0,
};

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addToCart: (state, { payload }) => {
      const existingItem = state.items?.find(({ id }) => id === payload);

      if (existingItem) {
        state.items.find((item) => item.id === existingItem.id).quantity++;
      } else {
        const product = products.find((product) => product.id === payload);
        state.items.push({ ...product, quantity: 1 });
        localStorage.setItem("cartItems", JSON.stringify(state.items));
      }
    },
    removeFromCart: (state, { payload }) => {
      const filteredProducts = state.items?.filter(
        (cartItem) => cartItem.id !== payload
      );
      state.items = filteredProducts;
      localStorage.setItem("cartItems", JSON.stringify(state?.items));
    },
    updateQuantity: (state, { payload }) => {
      const { id, action } = payload;
      const item = state.items.find((item) => item.id === id);
      if (action == "+") {
        item.quantity += 1;
      }
      if (action == "-" && item.quantity > 1) {
        item.quantity -= 1;
      }
    },

    clearCarts: (state) => {
      state.items = [];
      localStorage.setItem("cartItems", JSON.stringify(state?.items));
    },
  },
});

export const { addToCart, removeFromCart, clearCarts, updateQuantity } =
  cartSlice.actions;
export default cartSlice.reducer;
