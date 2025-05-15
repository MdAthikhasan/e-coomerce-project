"use client";

import { addToCart } from "@/redux/features/cartSlice";
import { removeFromWishlist } from "@/redux/features/wishSlice";
import Image from "next/image";
import { useDispatch, useSelector } from "react-redux";

function Wishlistitem({ item }) {
 
  const dispatch = useDispatch();
  return (
    <div className="bg-gray-50 p-4 rounded-lg shadow flex justify-between items-center">
      {/* Item Details */}
      <div className="flex items-center gap-4">
        <Image src={item?.image} width={100} height={100} alt={item?.name} />

        <div>
          <h4 className="font-semibold text-gray-800">{item?.name}</h4>
          <p
            className={`flex items-center my-2 gap-2 text-sm ${
              item?.status === true ? "text-green-500" : "text-red-500"
            } `}
          >
            <span
              className={`bg-green-100  px-2 py-1 rounded-full ${
                item?.status === true ? "text-green-700" : "text-red-700"
              }`}
            >
              {item?.status === true ? "In stock" : "out of stock"}
            </span>
          </p>
          <p className="text-green-500 font-bold text-lg">৳ {item?.price}</p>
        </div>
      </div>

      {/* Action Buttons */}
      <div className="flex flex-col gap-2">
        <button
          onClick={() => {
            dispatch(addToCart(item?._id));
          }}
          className="flex items-center justify-center bg-green-500 text-white p-2 rounded-lg hover:bg-green-600"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth="1.5"
            stroke="currentColor"
            className="w-5 h-5"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M3 3h18M9 7h6m-6 4h6m-6 4h6"
            />
          </svg>
        </button>
        <button
          onClick={() => dispatch(removeFromWishlist(item._id))}
          className="flex items-center justify-center bg-red-500 text-white p-2 rounded-lg hover:bg-red-600"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth="1.5"
            stroke="currentColor"
            className="w-5 h-5"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M9 13h6m2 9a2 2 0 002-2V7a2 2 0 00-2-2h-2l-.348-1.392A2 2 0 0012.683 2h-1.366a2 2 0 00-1.969 1.608L9 5H7a2 2 0 00-2 2v13a2 2 0 002 2h10z"
            />
          </svg>
        </button>
      </div>
    </div>
  );
}

export default Wishlistitem;
