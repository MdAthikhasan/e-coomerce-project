const setWishItemInlocal = (cartItems) => {
  try {
    localStorage.setItem("wishlistItems", JSON.stringify(cartItems));
  } catch (error) {
    console.error("Error setting wishlist items in local storage", error);
  }
};

export default setWishItemInlocal;
