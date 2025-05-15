"use client";

const catagories = [
  "Electronics",
  "Books",
  "Sunnah Products",
  "Groceries & Foods",
  "Clothing",
  "Offer",
  "Others",
];

const FilterBar = ({ setCatagoryName, categoryName }) => {
  return (
    <div className="border-b">
      <div className="max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8 overflow-x-auto">
        <ul className="flex justify-around items-center space-x-4 md:space-x-8 py-3">
          {catagories.map((category, index) => (
            <li
              onClick={(e) => setCatagoryName(e.target.textContent)}
              key={index}
              className={`text-gray-500 hover:text-green-600 cursor-pointer ${
                categoryName === category ? "text-green-600  underline" : ""
              }`}
            >
              {category}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default FilterBar;
