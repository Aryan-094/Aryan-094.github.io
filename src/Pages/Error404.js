import React from 'react';
import { Link } from 'react-router-dom';

const Error404 = () => {
  return (
    <div className="flex items-center justify-center h-screen bg-gray-900">
      <div className="text-center">
        <h1 className="text-8xl font-bold text-red-600">404</h1>
        <p className="text-4xl font-semibold text-gray-300 mt-4">Oops! Page not found</p>
        <p className="text-gray-500 mt-2">The page you are looking for doesn't exist or has been moved.</p>
        <Link to="/" className="mt-6 inline-block px-6 py-3 bg-red-600 text-white font-semibold rounded-md hover:bg-red-700">
          Go to Home
        </Link>
      </div>
    </div>
  );
};

export default Error404;


