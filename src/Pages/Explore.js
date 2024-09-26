// import React from "react";
// import { Link } from "react-router-dom"; // Import Link for navigation
// import Navbar from "../components/Navbar";
// import Footer from "../components/Footer";
// import foodData from "../data/foodData"; // Import food data

// function Explore() {
//   // Sort the food data alphabetically by name
//   const sortedFoodData = [...foodData].sort((a, b) => a.name.localeCompare(b.name));

//   return (
//     <div className="bg-gray-900 min-h-screen text-white">
//       <Navbar />

//       <div className="container mx-auto px-4 py-10">
//         <h1 className="text-4xl font-bold mb-6 text-center">Experience the Best Food Offerings in Your City</h1>
//         <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
//           {sortedFoodData.map(item => (
//             <Link
//               to={`/food/${item.id}`} // Use item ID to create a unique route
//               key={item.id}
//               className="bg-gray-800 rounded-lg p-4 transition-transform transform hover:scale-105"
//             >
//               <img
//                 src={item.image}
//                 alt={item.name}
//                 className="w-full h-40 rounded-lg object-cover mb-4"
//               />
//               <h3 className="text-xl font-semibold">{item.name}</h3>
//               <p className="text-gray-400">Vendor: {item.vendor}</p>
//               <p className="text-yellow-400">Rating: {item.rating} / 10</p>
//               <p className="text-gray-400 mt-2">{item.description}</p>
//             </Link>
//           ))}
//         </div>
//       </div>

//       <Footer />
//     </div>
//   );
// }

// export default Explore;

import React, { useContext } from "react";
import { Link } from "react-router-dom";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import foodData from "../data/foodData";
import Rating from '../components/Rating';
import { CityContext } from "../components/CityContext"; // Import the CityContext

const Explore = () => {
  const { selectedCity } = useContext(CityContext); // Use context to get the selected city
  const filteredFoodItems = foodData.filter(item => item.location === selectedCity); // Filter based on selectedCity

  return (
    <div className="bg-gray-900 min-h-screen text-white">
      <div className="min-h-[90vh]">

        <Navbar />
        <div className="container mx-auto px-4 py-10">
          <h1 className="text-2xl font-semibold mb-4">Explore Best Food Options in {selectedCity}</h1>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredFoodItems.map(item => (
              <Link
                to={`/food/${item.id}`}
                key={item.id}
                className="bg-gray-800 rounded-lg p-6 transition-transform transform hover:scale-105"
              >
                <img
                  src={item.image}
                  alt={item.name}
                  className="w-full h-32 rounded-lg object-cover"
                />
                <h3 className="text-xl font-semibold mt-4">{item.vendor}: {item.name}</h3>
                <Rating rating={item.rating} />
                <p className="text-gray-400 mt-2">{item.description}</p>
              </Link>
            ))}
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Explore;
