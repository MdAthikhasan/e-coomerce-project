"use client";

import { useState } from "react";

const Pagination = ({ totalPage, setItemNum }) => {
  const [currentPage, setCurrentPage] = useState(1);

  const prevHandler = () => {
    setCurrentPage((prevPage) => prevPage - 1);
    setItemNum((prevNums) => {
      return {
        ...prevNums,
        firstValue: prevNums.firstValue - 10,
        lastValue: prevNums.lastValue - 10,
      };
    });
  };
  const nextHandler = () => {
    setCurrentPage((prevPage) => prevPage + 1);
    setItemNum((prevNums) => {
      return {
        ...prevNums,
        firstValue: prevNums.firstValue + 10,
        lastValue: prevNums.lastValue + 10,
      };
    });
  };

  return (
    <div className="flex items-center justify-center gap-4 p-4">
      {/* Previous Button */}
      <button
        onClick={prevHandler}
        className="px-4 py-2 text-white bg-blue-500 rounded-md hover:bg-blue-600 disabled:bg-gray-300 disabled:cursor-not-allowed"
        disabled={currentPage === 1}
      >
        Prev
      </button>

      {/* Page Info */}
      <span className="text-gray-700 font-medium">
        {currentPage} of {totalPage || 0}
      </span>

      {/* Next Button */}
      <button
        onClick={nextHandler}
        className="px-4 py-2 text-white bg-blue-500 rounded-md hover:bg-blue-600 disabled:bg-gray-300 disabled:cursor-not-allowed"
        disabled={currentPage === totalPage}
      >
        Next
      </button>
    </div>
  );
};

export default Pagination;
