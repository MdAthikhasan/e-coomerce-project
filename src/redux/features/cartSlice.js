import getProducts from "@/app/getData/products";
import getCartItems from "@/app/helpers/getCartItems";
import setToLocalStorage from "@/app/helpers/setInLocalStorage";
import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

const initialState = {
  items: getCartItems() || [],
  products: [],
  total: 0,
  loading: false,
  error: null,
};

export const fetchProducts = createAsyncThunk("cart/fetchData", async () => {
  return await getProducts();
});
const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addToCart: (state, { payload }) => {
      const existingItem = state.items?.find((item) => item._id === payload);
      console.log(state.products.length, "state.products.length");
      console.log("payloadd", payload);
      if (existingItem) {
        state.items.find((item) => item._id === existingItem._id).quantity++;
      } else {
        const product = state?.products?.find(
          (product) => product._id === payload
        );
        state.items.push({ ...product, quantity: 1 });
        setToLocalStorage(state?.items);
      }
    },
    removeFromCart: (state, { payload }) => {
      const filteredProducts = state.items?.filter(
        (cartItem) => cartItem._id !== payload
      );
      state.items = filteredProducts;
      setToLocalStorage(state.items);
    },
    updateQuantity: (state, { payload }) => {
      const { id, action } = payload;
      const item = state.items.find((item) => item._id === id);
      if (action == "+") {
        item.quantity += 1;
      }
      if (action == "-" && item.quantity > 1) {
        item.quantity -= 1;
      }
    },

    clearCarts: (state) => {
      state.items = [];
      setToLocalStorage(state.items);
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchProducts.pending, (state) => {
        state.loading = true;
      })
      .addCase(fetchProducts.fulfilled, (state, action) => {
        state.loading = false;
        state.products = action.payload;
      })
      .addCase(fetchProducts.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      });
  },
});

export const { addToCart, removeFromCart, clearCarts, updateQuantity } =
  cartSlice.actions;
export default cartSlice.reducer;
