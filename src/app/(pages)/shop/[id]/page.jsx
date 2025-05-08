import getProducts from "@/app/getData/products";
import { Suspense } from "react";
import ProductDetails from "./component/ProductDetails";

async function page() {
  const products = await getProducts();
  return (
    <Suspense fallback={<div className="text-center">Loading...</div>}>
      <ProductDetails products={products} />;
    </Suspense>
  );
}

export default page;
