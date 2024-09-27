import React from "react";
import { Link } from "react-router-dom";

const HeroSection = () => {
  return (
    <section
      className="relative w-full h-screen bg-cover bg-center bg-no-repeat"
      style={{ backgroundImage: `url('/background.jpg')` }}
    >
      <div className="absolute inset-0 bg-black opacity-60"></div>

      <div className="relative text-center py-10 sm:py-20 px-4 flex flex-col items-center justify-center h-full">
        <h1 className="text-3xl sm:text-5xl font-bold mb-4 z-10 text-white">
          Welcome to FoodFinder!
        </h1>
        <p className="text-base sm:text-xl text-gray-300 mb-6 z-10">
          We're here to help you save your money.
          <br />
          Follow these simple steps:
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center mb-6 z-10">
          <div className="flex flex-col items-center mb-4 sm:mb-0">
            <div className="bg-red-900 text-white px-4 py-2 rounded-lg shadow-lg">Step 1</div>
            <p className="text-gray-200">Select Your City</p>
          </div>
          <div className="hidden sm:block w-10 h-1 bg-red-900 rounded"></div>

          <div className="flex flex-col items-center mb-4 sm:mb-0">
            <div className="bg-red-900 text-white px-4 py-2 rounded-lg shadow-lg">Step 2</div>
            <p className="text-gray-200">Search for Your Favorite Foods</p>
          </div>
          <div className="hidden sm:block w-10 h-1 bg-red-900 rounded"></div>

          <div className="flex flex-col items-center mb-4 sm:mb-0">
            <div className="bg-red-900 text-white px-4 py-2 rounded-lg shadow-lg">Step 3</div>
            <p className="text-gray-200">Compare Price</p>
          </div>
          <div className="hidden sm:block w-10 h-1 bg-red-900 rounded"></div>

          <div className="flex flex-col items-center">
            <div className="bg-red-900 text-white px-4 py-2 rounded-lg shadow-lg">Step 4</div>
            <p className="text-gray-200">Get the Best Prices!</p>
          </div>
        </div>

        <div className="space-y-4 sm:space-x-4 z-10">
          <button className="bg-red-600 text-white text-sm sm:text-lg px-6 py-2 mt-6 rounded-lg hover:bg-red-500 transition duration-300">
            <Link to={'/search'}>Search for Food</Link>
          </button>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
