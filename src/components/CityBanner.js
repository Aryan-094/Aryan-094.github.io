import React from 'react';

const CityBanner = ({ show, onClose, onSelectCity }) => {
  if (!show) return null;

  const cities = ["Mumbai", "Delhi", "Bangalore", "Chennai", "Kolkata", "Hyderabad"];

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-75 z-50">
      <div className="bg-gray-800 text-white p-6 rounded-lg shadow-lg max-w-md w-full">
        <h2 className="text-2xl font-bold mb-4">Choose City</h2>
        <div className="grid grid-cols-2 gap-4">
          {cities.map(city => (
            <button
              key={city}
              className="bg-gray-700 p-2 rounded"
              onClick={() => onSelectCity(city)}
            >
              {city}
            </button>
          ))}
        </div>
        <button
          onClick={onClose}
          className="mt-4 bg-red-600 text-white px-4 py-2 rounded hover:bg-red-500"
        >
          Close
        </button>
      </div>
    </div>
  );
};

export default CityBanner;
