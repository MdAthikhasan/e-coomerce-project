"use client";

import { clearCarts } from "@/redux/features/cartSlice";
import { useDispatch } from "react-redux";

function ClearCart() {
  const dispatch = useDispatch();
  return (
    <span
      onClick={() => dispatch(clearCarts())}
      className="text-red-500 font-semibold text-lg flex items-center gap-2 cursor-pointer"
    >
      Clear Cart
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
    </span>
  );
}

export default ClearCart;
