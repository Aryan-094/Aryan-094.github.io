// import React from "react";
// import { useParams } from "react-router-dom";
// import foodData from "../data/foodData"; // Adjust the import according to your structure
// import swiggyLogo from "../assets/swiggy_logo.png"; // Replace with your actual image paths
// import zomatoLogo from "../assets/zomato_logo.png"; 
// import eatsureLogo from "../assets/eatsure_logo.png"; 
// import magicpinLogo from "../assets/magicpin_logo.png"; 
// import Rating from './Rating'; // Adjust the path accordingly

// const FoodDetail = () => {
//   const { id } = useParams();
//   const foodItem = foodData.find(item => item.id === parseInt(id));

//   if (!foodItem) {
//     return <div>Food item not found.</div>;
//   }

//   return (
//     <div className="bg-gray-900 min-h-screen text-white p-8">
//       <h1 className="text-3xl font-bold">{foodItem.name}</h1>
//       <h2 className="text-xl font-semibold mt-4">Vendor: {foodItem.vendor}</h2>
//       <Rating rating={foodItem.rating} /> {/* Display rating here */}
//       <img src={foodItem.image} alt={foodItem.name} className="w-64 h-64 rounded-lg object-cover mt-4" />
//       <p className="text-gray-400 mt-4">{foodItem.description}</p>

//       <h3 className="text-2xl font-semibold mt-6">Price Comparisons:</h3>
//       <div className="flex flex-wrap mt-4 space-x-10">
//         {foodItem.prices.swiggy && (
//           <div className="flex items-center">
//             <img src={swiggyLogo} alt="Swiggy" className="w-16 h-16 mr-2" />
//             <span>Swiggy: ₹{foodItem.prices.swiggy}</span>
//           </div>
//         )}
//         {foodItem.prices.zomato && (
//           <div className="flex items-center">
//             <img src={zomatoLogo} alt="Zomato" className="w-16 h-16 mr-2" />
//             <span>Zomato: ₹{foodItem.prices.zomato}</span>
//           </div>
//         )}
//         {foodItem.prices.magicpin && (
//           <div className="flex items-center">
//             <img src={magicpinLogo} alt="Magicpin" className="w-16 h-16 mr-2" />
//             <span>Magicpin: ₹{foodItem.prices.magicpin}</span>
//           </div>
//         )}
//         {foodItem.prices.eatsure && (
//           <div className="flex items-center">
//             <img src={eatsureLogo} alt="Eatsure" className="w-16 h-16 mr-2" />
//             <span>Eatsure: ₹{foodItem.prices.eatsure}</span>
//           </div>
//         )}
//       </div>
//     </div>
//   );
// };

// export default FoodDetail;

import React from "react";
import { useParams } from "react-router-dom";
import foodData from "../data/foodData"; // Adjust the import according to your structure
import swiggyLogo from "../assets/swiggy_logo.png"; // Replace with your actual image paths
import zomatoLogo from "../assets/zomato_logo.png"; 
import eatsureLogo from "../assets/eatsure_logo.png"; 
import magicpinLogo from "../assets/magicpin_logo.png"; 
import Rating from './Rating'; // Adjust the path accordingly

const FoodDetail = () => {
  const { id } = useParams();
  const foodItem = foodData.find(item => item.id === parseInt(id));

  if (!foodItem) {
    return <div>Food item not found.</div>;
  }

  return (
    <div className="bg-gray-900 min-h-screen text-white p-8">
      <h1 className="text-3xl font-bold">{foodItem.name}</h1>
      <h2 className="text-xl font-semibold mt-4">Vendor: {foodItem.vendor}</h2>
      <Rating rating={foodItem.rating} /> {/* Display rating here */}
      <img src={foodItem.image} alt={foodItem.name} className="w-64 h-64 rounded-lg object-cover mt-4" />
      <p className="text-gray-400 mt-4">{foodItem.description}</p>
      
      <h3 className="text-lg font-semibold mt-4">Location: {foodItem.location}</h3>
      <p className="text-gray-400">{foodItem.address}</p>

      <h3 className="text-2xl font-semibold mt-6">Price Comparisons:</h3>
      <div className="flex flex-wrap mt-4 space-x-10">
        {foodItem.prices.swiggy && (
          <a href="https://www.swiggy.com" target="_blank" rel="noopener noreferrer" className="flex items-center">
            <img src={swiggyLogo} alt="Swiggy" className="w-16 h-16 mr-2" />
            <span>Swiggy: ₹{foodItem.prices.swiggy}</span>
          </a>
        )}
        {foodItem.prices.zomato && (
          <a href="https://www.zomato.com" target="_blank" rel="noopener noreferrer" className="flex items-center">
            <img src={zomatoLogo} alt="Zomato" className="w-16 h-16 mr-2" />
            <span>Zomato: ₹{foodItem.prices.zomato}</span>
          </a>
        )}
        {foodItem.prices.magicpin && (
          <a href="https://www.magicpin.in" target="_blank" rel="noopener noreferrer" className="flex items-center">
            <img src={magicpinLogo} alt="Magicpin" className="w-16 h-16 mr-2" />
            <span>Magicpin: ₹{foodItem.prices.magicpin}</span>
          </a>
        )}
        {foodItem.prices.eatsure && (
          <a href="https://www.eatsure.com" target="_blank" rel="noopener noreferrer" className="flex items-center">
            <img src={eatsureLogo} alt="Eatsure" className="w-16 h-16 mr-2" />
            <span>Eatsure: ₹{foodItem.prices.eatsure}</span>
          </a>
        )}
      </div>
    </div>
  );
};

export default FoodDetail;
