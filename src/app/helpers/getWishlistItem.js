const getWishlistItems = () => {
  if (typeof window === "undefined") return null;
  return JSON.parse(localStorage.getItem("wishlistItems"));
};

export default getWishlistItems;
