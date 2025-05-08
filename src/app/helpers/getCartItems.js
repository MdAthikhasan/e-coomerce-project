const getCartItems = () => {
  if (typeof window === "undefined") return null;
  return JSON.parse(localStorage.getItem("cartItems"));
};

export default getCartItems;
