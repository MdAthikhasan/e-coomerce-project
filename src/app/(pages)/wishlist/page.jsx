"use client";

import Wishlistitem from "@/app/components/wishlistitem/Wishlistitem";
import { useRouter } from "next/navigation";
import { useSelector } from "react-redux";

export default function WishlistPage() {
  const { items: wishlistitem } = useSelector((state) => state.wishlistItems);
  const router = useRouter();
  return (
    <div className="container mx-auto px-4 py-6">
      {/* Go Back Button */}
      <button
        onClick={() => router.back()}
        className="flex items-center gap-2 text-white bg-green-500 px-4 py-2 rounded-lg hover:bg-green-600"
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
            d="M15.75 19.5L8.25 12l7.5-7.5"
          />
        </svg>
        GO BACK
      </button>

      <div className="mt-6 bg-white p-6 rounded-lg shadow">
        {/* Wishlist Title */}
        <h3 className="font-semibold text-xl text-gray-800 mb-4">Wishlist</h3>

        {/* Wishlist Item */}
        {wishlistitem.length > 0 ? (
          wishlistitem.map((item) => <Wishlistitem key={item.id} item={item} />)
        ) : (
          <p className="text-red-500">No wishlist item found</p>
        )}
      </div>
    </div>
  );
}
