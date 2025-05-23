"use client";

import { fetchProducts } from "@/redux/features/cartSlice";
import { fetchProductData } from "@/redux/features/wishSlice";
import { use, useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import FilterBar from "../filterbar/FilterBar";
import ProductCard from "../productcard/ProductCard";

export default function HomeProducts({ promise }) {
  const [categoryName, setCatagoryName] = useState("Electronics");
  const products = use(promise);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchProducts()); // thunk dispatch
    dispatch(fetchProductData()); // thunk dispatch
  }, []);
  const filteredProducts = products
    ?.filter((product) => product.category === categoryName)
    .slice(0, 10);
  return (
    <div className="container mx-auto p-4">
      {products && (
        <FilterBar
          setCatagoryName={setCatagoryName}
          catagoryName={categoryName}
        />
      )}
      <h1 className="text-2xl font-bold mt-4">
        {filteredProducts && categoryName}
      </h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4 mt-4">
        {filteredProducts && filteredProducts.length > 0 ? (
          filteredProducts?.map((product) => (
            <ProductCard key={product._id} product={product} />
          ))
        ) : (
          <p className="text-center text-red-500">Products not Found</p>
        )}
      </div>
    </div>
  );
}
