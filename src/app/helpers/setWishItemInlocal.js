const setWishItemInlocal = (cartItems) => {
  localStorage.setItem("wishlistItems", JSON.stringify(cartItems));
};

export default setWishItemInlocal;
