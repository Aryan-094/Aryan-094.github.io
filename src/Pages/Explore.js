import React, { useContext } from "react";
import { Link } from "react-router-dom";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import foodData from "../data/foodData";
import Rating from '../components/Rating';
import { CityContext } from "../components/CityContext"; 

const Explore = () => {
  const { selectedCity } = useContext(CityContext); 
  const filteredFoodItems = foodData.filter(item => item.location === selectedCity); 

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
