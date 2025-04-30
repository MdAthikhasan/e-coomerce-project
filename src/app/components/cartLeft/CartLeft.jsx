"use client";

import { removeFromCart, updateQuantity } from "@/app/redux/features/cartSlice";
import Image from "next/image";
import { useDispatch } from "react-redux";
function CartLeft({ cartItem }) {
  const dispatch = useDispatch();
  const quentityHandler = (e) => {
    const { textContent: action } = e.target;
    dispatch(updateQuantity({ id: cartItem.id, action }));
  };

  return (
    <div className="bg-white p-4 rounded-lg shadow flex justify-between items-center">
      <div className="flex items-center gap-4">
        <Image
          src={cartItem?.image}
          alt="Medjool Dates"
          width={80}
          height={80}
          className="rounded-lg object-cover"
        />

        <div>
          <h4 className="font-semibold text-gray-800">{cartItem?.name}</h4>
          <p className="text-green-500 my-2 font-bold">৳ {cartItem?.price}</p>
          <div className="flex items-center gap-2">
            <button
              onClick={quentityHandler}
              className="bg-gray-200 text-gray-800 px-3 py-1 rounded-lg hover:bg-gray-300"
            >
              -
            </button>
            <span className="text-gray-800 font-semibold">
              {cartItem?.quantity}
            </span>
            <button
              onClick={quentityHandler}
              className="bg-gray-200 text-gray-800 px-3 py-1 rounded-lg hover:bg-gray-300"
            >
              +
            </button>
          </div>
        </div>
      </div>

      <button
        onClick={() => dispatch(removeFromCart(cartItem.id))}
        className="text-red-500 hover:bg-red-100 p-2 rounded-lg"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth="1.5"
          stroke="currentColor"
          className="w-6 h-6"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M9 13h6m2 9a2 2 0 002-2V7a2 2 0 00-2-2h-2l-.348-1.392A2 2 0 0012.683 2h-1.366a2 2 0 00-1.969 1.608L9 5H7a2 2 0 00-2 2v13a2 2 0 002 2h10z"
          />
        </svg>
      </button>
    </div>
  );
}

export default CartLeft;
