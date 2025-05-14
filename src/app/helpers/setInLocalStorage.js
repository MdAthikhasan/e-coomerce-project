const setToLocalStorage = (cartItems) => {
  try {
    localStorage.setItem("cartItems", JSON.stringify(cartItems));
  } catch (error) {
    console.error("Error setting cart items in local storage", error);
  }
};

export default setToLocalStorage;
