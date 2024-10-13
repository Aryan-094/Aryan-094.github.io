import React, { useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import foodData from "../data/foodData";
import swiggyLogo from "../assets/swiggy_logo.png";
import zomatoLogo from "../assets/zomato_logo.png";
import eatsureLogo from "../assets/eatsure_logo.png";
import magicpinLogo from "../assets/magicpin_logo.png";
import Rating from './Rating';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'; 
import { faArrowLeft } from '@fortawesome/free-solid-svg-icons'; 

const FoodDetail = () => {
  const { id } = useParams();
  const foodItem = foodData.find(item => item.id === parseInt(id));
  const navigate = useNavigate();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  if (!foodItem) {
    return <div>Food item not found.</div>;
  }

  // Function to format the name for the Zomato URL
  const formatZomatoName = (name) => {
    return name.toLowerCase().replace(/\s+/g, '-');
  };

  // Construct URLs with location
  const getSwiggyUrl = () => `https://www.swiggy.com/search?query=${encodeURIComponent(foodItem.name)}`;
  const getZomatoUrl = () => `https://www.zomato.com/${encodeURIComponent(foodItem.location)}/delivery/dish-${formatZomatoName(foodItem.name)}`;
  const getMagicpinUrl = () => `https://magicpin.in/${encodeURIComponent(foodItem.location)}/search?query=${encodeURIComponent(foodItem.name)}`;

  return (
    <div className="bg-gray-900 min-h-screen text-white p-8">
      <button onClick={() => navigate(-1)} className="flex items-center mb-4 text-lg text-gray-300 hover:text-red-500 transition duration-300">
        <FontAwesomeIcon icon={faArrowLeft} className="mr-2" /> 
        Back
      </button>

      <h1 className="text-3xl font-bold">{foodItem.name}</h1>
      <h2 className="text-xl font-semibold mt-4">Vendor: {foodItem.vendor}</h2>
      <Rating rating={foodItem.rating} /> 
      <img src={foodItem.image} alt={foodItem.name} className="w-full md:w-64 h-auto rounded-lg object-cover mt-4" /> 
      <p className="text-gray-400 mt-4">{foodItem.description}</p>

      <h3 className="text-lg font-semibold mt-4">Location: {foodItem.location}</h3>
      <p className="text-gray-400">{foodItem.address}</p>

      <h3 className="text-2xl font-semibold mt-6">Price Comparisons:</h3>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mt-4 justify-center">
        {foodItem.prices.swiggy && (
          <a href={getSwiggyUrl()} target="_blank" rel="noopener noreferrer" className="flex items-center">
            <img src={swiggyLogo} alt="Swiggy" className="w-14 h-14 md:w-16 md:h-16 mr-2" />
            <span className="text-sm md:text-base">Swiggy: ₹{foodItem.prices.swiggy}</span>
          </a>
        )}
        {foodItem.prices.zomato && (
          <a href={getZomatoUrl()} target="_blank" rel="noopener noreferrer" className="flex items-center">
            <img src={zomatoLogo} alt="Zomato" className="w-14 h-14 md:w-16 md:h-16 mr-2" />
            <span className="text-sm md:text-base">Zomato: ₹{foodItem.prices.zomato}</span>
          </a>
        )}
        {foodItem.prices.magicpin && (
          <a href={getMagicpinUrl()} target="_blank" rel="noopener noreferrer" className="flex items-center">
            <img src={magicpinLogo} alt="Magicpin" className="w-14 h-14 md:w-16 md:h-16 mr-2" />
            <span className="text-sm md:text-base">Magicpin: ₹{foodItem.prices.magicpin}</span>
          </a>
        )}
        {foodItem.prices.eatsure && (
          <a href="https://www.eatsure.com" target="_blank" rel="noopener noreferrer" className="flex items-center">
            <img src={eatsureLogo} alt="Eatsure" className="w-14 h-14 md:w-16 md:h-16 mr-2" />
            <span className="text-sm md:text-base">Eatsure: ₹{foodItem.prices.eatsure}</span>
          </a>
        )}
      </div>
    </div>
  );
};

export default FoodDetail;
