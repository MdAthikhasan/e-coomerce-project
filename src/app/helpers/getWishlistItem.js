const getWishlistItems = () => {
  try {
    return JSON.parse(localStorage.getItem("wishlistItems"));
  } catch (error) {
    console.error("Error getting wishlist items from local storage", error);
  }
};

export default getWishlistItems;
