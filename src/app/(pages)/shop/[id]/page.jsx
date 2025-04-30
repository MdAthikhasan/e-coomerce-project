"use client";

import ProductDetalsRight from "@/app/components/productDetailsRight/ProductDetalsRight";
import ProductDetalsLeft from "@/app/components/productsDetailsLeft/ProductDetalsLeft";
import { useParams, useRouter } from "next/navigation";
import { useSelector } from "react-redux";

// components/ProductDetails.js
export default function ProductDetails() {
  const products = useSelector((state) => state.products?.value);
  const params = useParams();
  const router = useRouter();

  return (
    <div className="max-w-7xl mx-auto p-4">
      <button
        onClick={() => router.back()}
        className="flex items-center text-green-600 hover:underline mb-4"
      >
        <svg
          className="w-5 h-5 mr-2"
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M15 19l-7-7 7-7"
          />
        </svg>
        Go Back
      </button>
      {products && products.length > 0 ? (
        products
          ?.filter((product) => product.id === params.id)
          ?.map((product) => (
            <div
              key={product.id}
              className="grid grid-cols-1 md:grid-cols-2 gap-6 bg-white shadow-lg rounded-lg p-6"
            >
              <ProductDetalsLeft product={product} />
              <ProductDetalsRight product={product} />
            </div>
          ))
      ) : (
        <h1 className="text-red-600">Product Not Found</h1>
      )}
    </div>
  );
}
