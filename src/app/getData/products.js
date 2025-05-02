import axios from "axios";

const getProducts = async () => {
  try {
    const res = await axios.get("https://e-commerce-json-1.onrender.com/data");
    return await res.data;
  } catch (error) {
    console.log(error);
  }
};

export default getProducts;
