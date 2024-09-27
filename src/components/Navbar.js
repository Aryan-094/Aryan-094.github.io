import React, { useContext, useState } from "react";
import logo from "../assets/Logo.jpg";
import { Link, useLocation } from "react-router-dom";
import CityBanner from "./CityBanner";
import { CityContext } from "./CityContext";

const Navbar = () => {
  const location = useLocation();
  const { selectedCity, setSelectedCity } = useContext(CityContext);
  const [showBanner, setShowBanner] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleBannerClose = () => {
    setShowBanner(false);
  };

  const handleCitySelect = (city) => {
    setSelectedCity(city);
    setShowBanner(false);
  };

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <>
      <nav className="p-4 flex justify-between items-center bg-gray-800">
        <Link to="/" className="flex items-center">
          <img src={logo} alt="Logo" className="w-12 h-12 mr-2" />
          <h1 className="text-lg font-bold text-white">Zayka Bazaar</h1>
        </Link>

        <button
          className="sm:hidden text-white focus:outline-none"
          onClick={toggleMenu}
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d={isMenuOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"}></path>
          </svg>
        </button>

        <div className="hidden sm:flex space-x-6">
          <Link to="/" className={`text-white hover:bg-red-600 px-3 py-2 rounded ${location.pathname === '/' ? 'bg-red-600' : ''}`}>Home</Link>
          <Link to="/about-us" className={`text-white hover:bg-red-600 px-3 py-2 rounded ${location.pathname === '/about-us' ? 'bg-red-600' : ''}`}>About Us</Link>
          <Link to="/search" className={`text-white hover:bg-red-600 px-3 py-2 rounded ${location.pathname === '/search' ? 'bg-red-600' : ''}`}>Search</Link>
          <Link to="/explore" className={`text-white hover:bg-red-600 px-3 py-2 rounded ${location.pathname === '/explore' ? 'bg-red-600' : ''}`}>Explore</Link>
        </div>

        {isMenuOpen && (
          <div className="sm:hidden absolute top-16 right-0 bg-gray-800 w-full text-center space-y-2 py-2 z-20">
            <Link to="/" className={`block text-white hover:bg-red-600 py-2 ${location.pathname === '/' ? 'bg-red-600' : ''}`} onClick={() => setIsMenuOpen(false)}>Home</Link>
            <Link to="/about-us" className={`block text-white hover:bg-red-600 py-2 ${location.pathname === '/about-us' ? 'bg-red-600' : ''}`} onClick={() => setIsMenuOpen(false)}>About Us</Link>
            <Link to="/search" className={`block text-white hover:bg-red-600 py-2 ${location.pathname === '/search' ? 'bg-red-600' : ''}`} onClick={() => setIsMenuOpen(false)}>Search</Link>
            <Link to="/explore" className={`block text-white hover:bg-red-600 py-2 ${location.pathname === '/explore' ? 'bg-red-600' : ''}`} onClick={() => setIsMenuOpen(false)}>Explore</Link>
          </div>
        )}

        <button onClick={() => setShowBanner(true)} className="bg-red-600 text-white px-4 py-2 rounded hover:bg-red-500">
          {selectedCity}
        </button>
      </nav>

      <CityBanner show={showBanner} onClose={handleBannerClose} onSelectCity={handleCitySelect} />
    </>
  );
};

export default Navbar;
