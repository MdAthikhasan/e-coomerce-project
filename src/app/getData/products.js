const getProducts = async () => {
  const res = await fetch("https://e-commerce-json-1.onrender.com/data");
  if (!res.ok) {
    throw new Error( "There was an error")
  }
  return res.json();
};

export default getProducts;
