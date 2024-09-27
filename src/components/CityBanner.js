import React from 'react';

const CityBanner = ({ show, onClose, onSelectCity }) => {
  if (!show) return null;

  const cities = ["Mumbai", "Delhi", "Bangalore", "Chennai", "Kolkata", "Hyderabad"];

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-75 z-50">
      <div className="bg-gray-800 text-white p-6 rounded-lg shadow-lg max-w-sm sm:max-w-md w-full mx-4">
        <h2 className="text-xl sm:text-2xl font-bold mb-4">Choose City</h2>
        <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
          {cities.map(city => (
            <button key={city} className="bg-gray-700 p-2 rounded text-sm sm:text-base w-full" onClick={() => onSelectCity(city)}>
              {city}
            </button>
          ))}
        </div>
        <button onClick={onClose} className="mt-4 bg-red-600 text-white px-4 py-2 rounded hover:bg-red-500 w-full">
          Close
        </button>
      </div>
    </div>
  );
};

export default CityBanner;
