const getCartItems = () => {
  try {
    return JSON.parse(localStorage.getItem("cartItems"));
  } catch (error) {
    console.error("Error getting cart items from local storage", error);
  }
};

export default getCartItems;
