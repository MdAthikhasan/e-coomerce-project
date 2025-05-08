import getProducts from "@/app/getData/products";
import getWishlistItems from "@/app/helpers/getWishlistItem";

import setWishItemInlocal from "@/app/helpers/setWishItemInlocal";
import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

const initialState = {
  items: getWishlistItems() || [],
  products: [],
  loading: false,
  error: null,
  total: 0,
};
export const fetchProductData = createAsyncThunk(
  "wishlist/fetchData",
  async () => {
    return await getProducts();
  }
);
const wishlistSlice = createSlice({
  name: "wishlist",
  initialState,
  reducers: {
    addToWishlist: (state, { payload }) => {
      const existingItem = state.items?.find((item) => item?._id === payload);
      
      if (existingItem) {
        const filterd = state?.items?.filter(
          (item) => item?._id !== existingItem?._id
        );
        state.items = filterd;
        setWishItemInlocal(state?.items);
      } else {
        const item = state?.products?.find(
          (product) => product?._id === payload
        );
        state.items.push(item);
        setWishItemInlocal(state?.items);
      }
    },
    removeFromWishlist: (state, { payload }) => {
      const filterd = state.items.filter((item) => item?._id !== payload);
      state.items = filterd;
      setWishItemInlocal(state?.items);
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchProductData.pending, (state) => {
        state.loading = true;
      })
      .addCase(fetchProductData.fulfilled, (state, action) => {
        state.loading = false;
        state.products = action.payload;
      })
      .addCase(fetchProductData.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      });
  },
});

export const { addToWishlist, removeFromWishlist } = wishlistSlice.actions;
export default wishlistSlice.reducer;
