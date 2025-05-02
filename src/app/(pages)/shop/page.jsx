"use client";
import Pagination from "@/app/components/pagination/Pagination";
import ProductCard from "@/app/components/productcard/ProductCard";
import ShopFilterBar from "@/app/components/shopfilterbar/ShopFilterbar";
import { useSession } from "next-auth/react";
import { useState } from "react";

import { useSelector } from "react-redux";
export default function Shop() {
  const { data: session, status } = useSession();
  const products = useSelector((state) => state.products?.value) || [];

  const maxValue = 50000;
  const [rangeValue, setRangeValue] = useState([0, maxValue]);
  const [categoryName, setCategoryName] = useState({ name: "", price: "" });
  const [itemNums, setItemNum] = useState({
    firstValue: 0,
    lastValue: 10,
  });

  const sorted = products
    ?.filter(
      (product) =>
        !categoryName.name || product?.category === categoryName?.name
    )
    .filter(
      (product) =>
        product?.price >= rangeValue[0] && product?.price <= rangeValue[1]
    )
    .sort((a, b) =>
      categoryName.price === "Low to High"
        ? a.price - b.price
        : categoryName.price === "High to Low"
        ? b.price - a.price
        : 0
    );

  const sliced = sorted.slice(itemNums.firstValue, itemNums.lastValue);
  const totalPage = Math.ceil(sorted.length / 10);

  return (
    <div className="container mx-auto p-4">
      {products.length > 0 && (
        <ShopFilterBar
          setCatagoryName={setCategoryName}
          setRangValue={setRangeValue}
          rangeValue={rangeValue}
          maxValue={maxValue}
        />
      )}

      {products.length > 0 ? (
        <>
          <h1 className="text-2xl font-bold mt-4">
            {" "}
            {categoryName.name || "All Products"}
          </h1>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4 mt-4">
            {sliced.length > 0 ? (
              sliced.map((product) => (
                <ProductCard key={product._id} product={product} />
              ))
            ) : (
              <p className="text-center text-red-500">Product Not Found</p>
            )}
          </div>
          {sorted.length > 10 && (
            <Pagination totalPage={totalPage} setItemNum={setItemNum} />
          )}
        </>
      ) : (
        <p className="text-center text-red-500">Products not Found</p>
      )}
    </div>
  );
}

// "use client";
// import Pagination from "@/app/components/pagination/Pagination";
// import ProductCard from "@/app/components/productcard/ProductCard";
// import ShopFilterBar from "@/app/components/shopfilterbar/ShopFilterbar";
// import { useSession } from "next-auth/react";
// import { useState } from "react";

// import { useSelector } from "react-redux";

// export default function Shop() {
//   const { data: session, status } = useSession();
//   // if (status === "loading") return <div>Loading...</div>;
//   // if (!session) {
//   //   redirect("/signin");
//   // }

//   // If the user is not authenticated, redirect to the login page
//   const products = useSelector((state) => state.products?.value);
//   const [itemNums, setItemNum] = useState({
//     firstValue: 0,
//     lastValue: 10,
//     totalPage: Math.ceil(products.length / 10),
//   });
//   const [categoryName, setCatagoryName] = useState({
//     name: "",
//     price: "",
//   });
//   const maxValue = 50000;
//   const [rangeValue, setRangValue] = useState([0, maxValue]);

//   const { firstValue, lastValue } = itemNums;
//   return (
//     <div className="container mx-auto p-4">
//       {products && (
//         <ShopFilterBar
//           setCatagoryName={setCatagoryName}
//           setRangValue={setRangValue}
//           rangeValue={rangeValue}
//           maxValue={maxValue}
//         />
//       )}
//       <h1 className="text-2xl font-bold mt-4">
//         {products && products.length > 0 && "All Products"}
//       </h1>
//       <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4 mt-4">
//         {products && products.length > 0 ? (
//           products
//             ?.filter((product) => {
//               return (
//                 !categoryName.name || product.category === categoryName.name
//               );
//             })
//             ?.filter(
//               (product) =>
//                 product.price >= rangeValue[0] && product.price <= rangeValue[1]
//             )
//             ?.sort((firstObj, lastObj) =>
//               categoryName.price === "Low to High"
//                 ? firstObj.price - lastObj.price
//                 : categoryName.price === "High to Low"
//                 ? lastObj.price - firstObj.price
//                 : 0
//             )
//             ?.slice(firstValue, lastValue)
//             ?.map((product) => (
//               <ProductCard key={product.id} product={product} />
//             ))
//         ) : (
//           <p className="text-center text-red-500">Products not Found</p>
//         )}
//       </div>
//       <div className="">
//         {products && products.length > 0 && (
//           <Pagination itemNums={itemNums} setItemNum={setItemNum} />
//         )}
//       </div>
//     </div>
//   );
// }
