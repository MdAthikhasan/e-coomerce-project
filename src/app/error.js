"use client"; // Error boundaries must be Client Components

import { useEffect } from "react";

export default function Error({ error, reset }) {
  useEffect(() => {
    // Log the error to an error reporting service
   
    console.error("Hello! This is from error page",error);
  }, [error]);

  return (
    <div className="flex min-h-screen items-center justify-center bg-gray-50 px-4">
      <div className="max-w-md w-full bg-white shadow-lg rounded-lg p-6 text-center space-y-4">
        <h2 className="text-xl font-semibold text-red-600">
         {error?.message || "Something went wrong!"} 
        </h2>
        <p className="text-gray-600 text-sm">
          We encountered an unexpected error. Please try again.
        </p>
        <button
          onClick={() => reset()}
          className="mt-4 px-4 py-2 bg-red-600 hover:bg-red-700 text-white font-medium rounded-md transition duration-200"
        >
          Try Again
        </button>
      </div>
    </div>
  );
}
