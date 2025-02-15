"use client";

import { useSession } from "next-auth/react";
import Link from "next/link";
import { useState } from "react";
import { FaBars, FaHeart, FaShoppingCart } from "react-icons/fa";
import { useSelector } from "react-redux";
const Header = () => {
  const [isMobileMenuOpen, setMobileMenuOpen] = useState(false);
  const { data, status } = useSession();
  const { items, total } = useSelector((state) => state.cartItems);

  // if (status === "loading") return <div>Loading...</div>;
  return (
    <nav className="bg-white shadow-md px-4 md:px-8 lg:px-16 py-4">
      <div className="container mx-auto flex items-center justify-between">
        {/* Logo */}
        <div className="flex items-center space-x-2">
          {/* <Image
            src="/logo.png"
            alt="Logo"
            width={40}
            height={40}
            className="w-8 h-8"
          /> */}
          <span className="text-lg font-bold text-green-600">Sunnah Store</span>
        </div>

        {/* Search Bar */}
        <div className="hidden md:flex items-center space-x-2">
          <input
            type="text"
            placeholder="Search Products"
            className="border border-gray-300 rounded-lg px-4 py-2 w-60 focus:outline-none focus:ring-2 focus:ring-green-300"
          />
          <button className="bg-green-500 text-white px-4 py-2 rounded-lg hover:bg-green-600">
            SEARCH
          </button>
        </div>

        {/* Menu Items */}
        <div className="hidden md:flex items-center space-x-6">
          <Link className="text-gray-800 hover:text-green-500" href={"/shop"}>
            {" "}
            Products
          </Link>
          <Link className="text-gray-800 hover:text-green-500" href={"/about"}>
            About
          </Link>

          <Link
            className="text-gray-800 hover:text-green-500"
            href={"/contact"}
          >
            {" "}
            Contact
          </Link>
          <div className="relative">
            <Link href={"/cart"} className="text-gray-800 hover:text-green-500">
              <FaShoppingCart size={18} />
              <span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs rounded-full w-5 h-5 flex items-center justify-center">
                {items.length || 0}
              </span>
            </Link>
          </div>
          <Link href="/wishlist" className="text-red-500 hover:text-red-600">
            <FaHeart size={20} />
          </Link>

          <button className="bg-green-500 text-white px-4 py-2 rounded-lg hover:bg-green-600">
            <Link href="/signin">SIGN IN</Link>
          </button>
          <button className="bg-green-500 text-white px-4 py-2 rounded-lg hover:bg-green-600">
            <Link href="/signup">SIGN UP</Link>
          </button>
        </div>

        {/* Mobile Menu Button */}
        <div className="md:hidden">
          <button
            onClick={() => setMobileMenuOpen(!isMobileMenuOpen)}
            className="text-gray-800"
          >
            <FaBars size={24} />
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="md:hidden mt-4 space-y-4">
          <input
            type="text"
            placeholder="Search Products"
            className="border border-gray-300 rounded-lg px-4 py-2 w-full focus:outline-none focus:ring-2 focus:ring-green-300"
          />
          <button className="bg-green-500 text-white px-4 py-2 rounded-lg w-full hover:bg-green-600">
            SEARCH
          </button>
          <a href="#" className="block text-gray-800 hover:text-green-500">
            Products
          </a>
          <a href="#" className="block text-gray-800 hover:text-green-500">
            About
          </a>
          <a href="#" className="block text-gray-800 hover:text-green-500">
            Contact
          </a>
          <a href="#" className="block text-red-500 hover:text-red-600">
            Wishlist
          </a>
          {session.user ? (
            <div className="block text-gray-800 hover:text-green-500">
              Welcome, {session.user.name}
            </div>
          ) : (
            <button className="bg-green-500 text-white px-4 py-2 rounded-lg w-full hover:bg-green-600">
              <Link href={"/signin"}> SIGN IN</Link>
            </button>
          )}

          <button className="bg-green-500 text-white px-4 py-2 rounded-lg w-full hover:bg-green-600">
            <Link href={"/signup"}> SIGN UP</Link>
          </button>
        </div>
      )}
    </nav>
  );
};

export default Header;
