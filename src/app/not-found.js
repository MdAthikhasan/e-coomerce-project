// pages/404.js

import Link from 'next/link';
import { FaArrowLeft } from 'react-icons/fa';

export default function not_found() {
  return (
    <div className="min-h-screen bg-white flex flex-col items-center justify-center px-6 py-12">
      <h1 className="text-6xl font-bold text-gray-900">404</h1>
      <p className="mt-4 text-xl text-gray-600">Oops! Page not found.</p>
      <p className="mt-2 text-gray-500 text-center max-w-md">
        The page you are looking for is not available.
      </p>
      <Link className="mt-6 inline-flex items-center text-blue-600 hover:underline font-medium" href="/">
        
          <FaArrowLeft className="mr-2" /> Go back to Home
      
      </Link>
    </div>
  );
}
