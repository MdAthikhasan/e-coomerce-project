const getProducts = async () => {
  const res = await fetch("https://e-commerce-json-1.onrender.com/data");
  if (!res.ok) {
    throw new Error("Failed to fetch products");
  }
  return res.json();
};

export default getProducts;
