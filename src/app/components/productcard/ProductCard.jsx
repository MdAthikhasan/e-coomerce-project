"use client";

import { addToCart } from "@/redux/features/cartSlice";
import { addToWishlist } from "@/redux/features/wishSlice";
import Link from "next/link";
import { useEffect, useMemo } from "react";
import { useDispatch, useSelector } from "react-redux";
const ProductCard = ({ product }) => {
  const dispatch = useDispatch();
  const { items: cartItems } = useSelector((state) => state.cartItems);
  const { items: wishlistItems } = useSelector((state) => state.wishlistItems);
  const wishlistid = useMemo(() => {
    return (
      wishlistItems?.find((item) => item?._id === product._id)?._id || null
    );
  }, [wishlistItems, product._id]);
  // handler functions
  const cartHandler = (id) => {
    dispatch(addToCart(id));
  };
  const wishHandler = (id) => {
    dispatch(addToWishlist(id));
  };
  useEffect(() => {
    localStorage.setItem("cartItems", JSON.stringify(cartItems));
    localStorage.setItem("wishlistItems", JSON.stringify(wishlistItems));
  }, [cartItems, wishlistItems]);

  return (
    <div
      suppressHydrationWarning={true}
      className="border rounded-lg shadow-sm p-4 flex flex-col"
    >
      <div className="relative">
        <Link href={`/shop/${product?._id}`}>
          <img
            src={product?.image}
            alt={product?.name}
            className="rounded-md w-full h-40 object-cover"
          />
        </Link>

        <div className="absolute top-2 left-2 bg-green-500 text-white px-2 py-1 rounded text-sm">
          ৳ {product?.price}
        </div>
        <div className="absolute top-2 right-2  py-1">
          <button
            onClick={() => wishHandler(product?._id)}
            className="p-2 rounded-full"
          >
            <svg
              id="heart-icon"
              xmlns="http://www.w3.org/2000/svg"
              fill={product?._id === wishlistid ? "#b91c1c" : "#a0a0a0"}
              viewBox="0 0 24 24"
              strokeWidth="1.5"
              stroke="currentColor"
              className={`w-6 h-6 ${
                product?._id === wishlistid ? "text-red-900" : "text-gray-800"
              } hover:text-red-900 transition`}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M12 21l-1.45-1.318C5.4 15.368 2 12.291 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.791-3.4 6.868-8.55 11.182L12 21z"
              />
            </svg>
          </button>
        </div>
      </div>
      <div className="mt-2">
        <p className="text-yellow-500 text-sm">{product.individualRating} ★</p>
        <h3 className="text-lg font-bold">{product.name}</h3>
        <p
          className={`flex items-center gap-2 text-sm ${
            product?.status === true ? "text-green-500" : "text-red-500"
          } `}
        >
          <span
            className={`bg-green-100  px-2 py-1 rounded-full ${
              product?.status === true ? "text-green-700" : "text-red-700"
            }`}
          >
            {product?.status === true ? "In stock" : "out of stock"}
          </span>
        </p>
      </div>
      <button
        onClick={() => cartHandler(product?._id)}
        className="mt-auto bg-green-500 text-white py-2 rounded-md hover:bg-green-600"
      >
        Add to Cart
      </button>
    </div>
  );
};

export default ProductCard;
