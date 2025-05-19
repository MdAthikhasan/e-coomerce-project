"use client";

import { useSession } from "next-auth/react";
import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import { FaBars, FaHeart, FaSearch, FaShoppingCart } from "react-icons/fa";
import { useDispatch, useSelector } from "react-redux";

import { getCartItems } from "@/redux/features/cartSlice";
import { getWithListItems } from "@/redux/features/wishSlice";
import AccountMenu from "../components/accountMenu/AccountMenu";
import SearchContainer from "../components/searchContainer/SearchContainer";

const Header = () => {
  const [isMobileMenuOpen, setMobileMenuOpen] = useState(false);
  const dispatch = useDispatch();
  const { items } = useSelector((state) => state?.cartItems);
  const [inputValue, setInputValue] = useState("");
  const searchBoxRef = useRef(null);

  const handleSearchBtn = () => {
    searchBoxRef.current.classList.toggle("hidden");
  };
  const handleHamburgerMenu = () => {
    setMobileMenuOpen((prev) => !prev);
  };
  const { data, status } = useSession();

  useEffect(() => {
    if (typeof window !== "undefined") {
      try {
        const savedCartItems = localStorage.getItem("cartItems");
        const savedWishlistItems = localStorage.getItem("wishlistItems");

        if (savedCartItems) {
          const parsedCart = JSON.parse(savedCartItems);
          if (Array.isArray(parsedCart)) {
            dispatch(getCartItems(parsedCart));
          }
        }

        if (savedWishlistItems) {
          const parsedWishlist = JSON.parse(savedWishlistItems);
          if (Array.isArray(parsedWishlist)) {
            dispatch(getWithListItems(parsedWishlist));
          }
        }
      } catch (error) {
        console.error("Error loading from localStorage:", error);
      }
    }
  }, [dispatch]);

  const totalQuantity =
    items?.reduce(
      (accumulator, cartItem) => accumulator + (cartItem?.quantity || 0),
      0
    ) ?? 0;

  // if (status === "loading") return <div>Loading...</div>;
  return (
    <nav
      suppressHydrationWarning={true}
      className=" bg-white shadow-md px-4 md:px-8 lg:px-16 py-4 "
    >
      <div className="container relative  lg:static mx-auto flex items-center justify-between">
        {/* Logo */}
        <Link href={"/"}>
          <div className="flex items-center space-x-2">
            {/* <Image
            src="/logo.png"
            alt="Logo"
            width={40}
            height={40}
            className="w-8 h-8"
          /> */}
            <span className="text-lg font-bold text-green-600">
              Sunnah Store
            </span>
          </div>
        </Link>

        {/* Search Bar */}
        {!isMobileMenuOpen && (
          <div
            ref={searchBoxRef}
            className="absolute z-10 hidden lg:flex  w-full  md:max-w-[600px]  top-[45px] md:static"
          >
            <div className="w-full relative">
              <input
                type="text"
                value={inputValue}
                onChange={(e) => setInputValue(e.target.value)}
                placeholder="Search Products"
                className="border  w-full border-gray-300 text-black rounded-sm px-4 py-2 focus:outline-none focus:ring-2 focus:ring-green-300"
              />
              <SearchContainer inputValue={inputValue} />
            </div>
          </div>
        )}

        {/* Menu Items */}
        <div className="hidden lg:flex items-center space-x-6">
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
                {totalQuantity}
              </span>
            </Link>
          </div>
          <Link href="/wishlist" className="text-red-500 hover:text-red-600">
            <FaHeart size={20} />
          </Link>
          {data?.user ? (
            <AccountMenu />
          ) : (
            <div className="flex">
              <button className="bg-green-500 text-white px-4 py-2 rounded-lg hover:bg-green-600">
                <Link href="/signin">SIGN IN</Link>
              </button>
              <button className="bg-green-500 text-white px-4 py-2 rounded-lg hover:bg-green-600">
                <Link href="/signup">SIGN UP</Link>
              </button>
            </div>
          )}
        </div>

        {/* Mobile Menu Button */}
        <div className="lg:hidden flex items-center">
          {!isMobileMenuOpen && (
            <button onClick={handleSearchBtn} className="text-gray-800 mr-2">
              <FaSearch size={24} />
            </button>
          )}
          <button onClick={handleHamburgerMenu} className="text-gray-800">
            <FaBars size={24} />
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="lg:hidden mt-4 space-y-4">
          <Link
            className="block text-gray-800 hover:text-green-500"
            href={"/shop"}
          >
            {" "}
            Products
          </Link>
          <Link
            className="block text-gray-800 hover:text-green-500"
            href={"/about"}
          >
            About
          </Link>
          <Link
            className="block text-gray-800 hover:text-green-500"
            href={"/contact"}
          >
            {" "}
            Contact
          </Link>
          <Link
            href={"/cart"}
            className="block text-gray-800 hover:text-green-500"
          >
            Cart
            <span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs rounded-full w-5 h-5 flex items-center justify-center">
              {totalQuantity || 0}
            </span>
          </Link>
          <Link
            href="/wishlist"
            className="block text-red-500 hover:text-red-600"
          >
            Favourite
          </Link>
          {/* {data?.user ? (
            <AccountMenu />
          ) : (
            <div className="flex">
              <button className="bg-green-500 text-white px-4 py-2 rounded-lg hover:bg-green-600">
                <Link href="/signin">SIGN IN</Link>
              </button>
              <button className="bg-green-500 text-white px-4 py-2 rounded-lg hover:bg-green-600">
                <Link href="/signup">SIGN UP</Link>
              </button>
            </div>
          )} */}
          {data?.user ? (
            <div className="block text-gray-800 hover:text-green-500">
              Welcome
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
