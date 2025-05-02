"use client";

import Link from "next/link";
import { useSelector } from "react-redux";

export default function SearchContainer({ inputValue }) {
  const products = useSelector((state) => state.products?.value);
  const productFiltered =
    inputValue === ""
      ? []
      : products.filter((product) =>
          product.name.toLowerCase().includes(inputValue.toLowerCase())
        );

  console.log("product", productFiltered);
  return (
    <>
      {productFiltered.length > 0 && (
        <div className="w-full max-h-[545px] overflow-y-auto absolute top-full grid gap-y-2 p-4 bg-white shadow-lg z-10">
          {productFiltered.map((product) => (
            <Link key={product._id} href={`/shop/${product._id}`}>
              <div className="flex items-center bg-white rounded-lg shadow-sm p-4 hover:shadow-md transition">
                <img
                  src={product.image}
                  alt={product.name}
                  className="w-16 h-16 object-contain mr-4"
                />
                <div className="flex-1">
                  <h2 className="text-sm font-medium text-gray-800">
                    {product.name}
                  </h2>
                </div>
                <div className="text-red-600 font-bold text-lg whitespace-nowrap">
                  {product.price}
                </div>
              </div>
            </Link>
          ))}
        </div>
      )}
    </>
  );
}
