import Features from "@/app/components/features/Features";
import HomeProducts from "@/app/components/HomeProducts/HomeProducts";

import Banner from "@/app/components/shred/header/banner/Banner";
import getProducts from "@/app/getData/products";
import { Suspense } from "react";
function Home() {
  const promise = getProducts();
  return (
    <>
      <Banner />
      <Features />
      <Suspense
        fallback={
          <div className="flex justify-center items-center h-screen text-2xl text-green-600">
            Loading...
          </div>
        }
      >
        <HomeProducts promise={promise} />
      </Suspense>
    </>
  );
}

export default Home;
