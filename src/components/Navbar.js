import React, { useContext, useState } from "react";
import logo from "../assets/Logo.jpg";
import { Link, useLocation } from "react-router-dom";
import CityBanner from "./CityBanner";
import { CityContext } from "./CityContext"; 

const Navbar = () => {
  const location = useLocation();
  const { selectedCity, setSelectedCity } = useContext(CityContext); 
  const [showBanner, setShowBanner] = useState(false);

  const handleBannerClose = () => {
    setShowBanner(false);
  };

  const handleCitySelect = (city) => {
    setSelectedCity(city); 
    setShowBanner(false);
  };

  return (
    <>
      <nav className="p-4 flex justify-between items-center bg-gray-800">
        <Link to="/" className="flex items-center">
          <img src={logo} alt="Logo" className="w-12 h-12 mr-2" />
          <h1 className="text-lg font-bold text-white">Zayka Bazaar</h1>
        </Link>

        <div className="flex space-x-6">
          <Link to="/" className={`text-white hover:bg-red-600 px-3 py-2 rounded ${location.pathname === '/' ? 'bg-red-600' : ''}`}>Home</Link>
          <Link to="/about-us" className={`text-white hover:bg-red-600 px-3 py-2 rounded ${location.pathname === '/about-us' ? 'bg-red-600' : ''}`}>About Us</Link>
          <Link to="/search" className={`text-white hover:bg-red-600 px-3 py-2 rounded ${location.pathname === '/search' ? 'bg-red-600' : ''}`}>Search</Link>
          <Link to="/explore" className={`text-white hover:bg-red-600 px-3 py-2 rounded ${location.pathname === '/explore' ? 'bg-red-600' : ''}`}>Explore</Link>
        </div>

        <button onClick={() => setShowBanner(true)} className="bg-red-600 text-white px-4 py-2 rounded hover:bg-red-500">
          {selectedCity}
        </button>
      </nav>

      <CityBanner show={showBanner} onClose={handleBannerClose} onSelectCity={handleCitySelect} />
    </>
  );
};

export default Navbar;