"use client";

import Box from "@mui/material/Box";
import Slider from "@mui/material/Slider";

const catagories = [
  "Electronics",
  "Books",
  "Sunnah Products",
  "Groceries & Foods",
  "Clothing",
  "Offer",
  "Others",
];
const priceCatagory = ["Low to High", " High to Low", "Rating", "Top Sale"];
const ShopFilterBar = ({
  setCatagoryName,
  rangeValue,
  setRangValue,
  maxValue,
}) => {
  const catagoryHandler = (e) => {
    setCatagoryName((categoryObj) => {
      return {
        ...categoryObj,
        name: e.target.value,
      };
    });
  };
  const priceCatagoryHandler = (e) => {
    setCatagoryName((categoryObj) => {
      return {
        ...categoryObj,
        price: e.target.value,
      };
    });
  };
  // const rangHanlder = (e) => {
  //   setRangValue((prevValue) => {
  //     return {
  //       ...prevValue,
  //       maxValue: e.target.value,
  //     };
  //   });
  // };
  return (
    <div className=" container mx-auto flex flex-col lg:flex-row items-center justify-between gap-6 p-6 border rounded-md  bg-white">
      {/* Select Category */}
      <div className="w-full lg:w-auto">
        <select
          onChange={catagoryHandler}
          id="category"
          className="w-full lg:w-64 p-2 border rounded-md text-gray-700 focus:ring-2 focus:ring-blue-500 focus:outline-none"
        >
          <option>Select a Catagory</option>
          {catagories.map((category, index) => (
            <option key={index} value={category}>
              {category}
            </option>
          ))}
        </select>
      </div>

      {/* Select Sorting Option */}
      <div className="w-full lg:w-auto">
        <select
          onChange={priceCatagoryHandler}
          id="sorting"
          className="w-full lg:w-64 p-2 border rounded-md text-gray-700 focus:ring-2 focus:ring-blue-500 focus:outline-none"
        >
          <option>Select Sorting Option</option>
          {priceCatagory.map((priceCatagory, index) => (
            <option key={index} value={priceCatagory}>
              {priceCatagory}
            </option>
          ))}
        </select>
      </div>

      {/* Select Price Range */}
      <div className="w-full lg:w-auto">
        <div className="">
          <div className="mx-5">
            <Box sx={{ width: { xs: "100%", md: "220px" } }}>
              <div className="flex justify-center text-sm text-gray-700 ">
                <span>Select Price Range</span>
              </div>
              <Slider
                getAriaLabel={() => "Price range"}
                value={rangeValue} // Temporary value for smooth interaction
                onChange={(e, newValue) => setRangValue(newValue)} // Update temporary value on scroll
                // onChangeCommitted={handlePriceChangeCommitted} // Update actual price when done
                valueLabelDisplay="auto"
                getAriaValueText={(price) => `${price}`}
                min={0} // Set minimum price
                max={maxValue} // Set maximum price
                sx={{
                  color: "#00bf63", // Equivalent to bg-green-700
                  "& .MuiSlider-thumb": {
                    backgroundColor: "#00bf63", // Thumb color
                  },
                  "& .MuiSlider-track": {
                    backgroundColor: "#00bf63", // Track color
                  },
                  "& .MuiSlider-rail": {
                    backgroundColor: "#a7f3d0", // Rail color (lighter green for contrast)
                  },
                }}
              />
              <div className="flex justify-between text-sm text-gray-700 ">
                <span>Min: {rangeValue[0]}</span>
                <span>Max: {rangeValue[1]}</span>
              </div>
            </Box>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ShopFilterBar;
