import getProducts from "@/app/getData/products";
import { Suspense } from "react";
import ShopPageComponent from "./components/shopComponent/ShopPageComponent";

function page() {
  const promise = getProducts();
  return (
    <Suspense fallback={<div className="text-center">Loading...</div>}>
      <ShopPageComponent promise={promise} />;
    </Suspense>
  );
}

export default page;
