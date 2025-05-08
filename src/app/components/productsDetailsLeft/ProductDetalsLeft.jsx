"use client";

import Image from "next/image";

function ProductDetalsLeft({ product }) {
  return (
    <div className="flex justify-center items-center">
      <Image
        src={product?.image}
        alt="Product Image"
        width={300}
        height={300}
        className="rounded-lg object-cover"
      />
    </div>
  );
}

export default ProductDetalsLeft;
