import React, { useState, useContext, useEffect } from "react";
import { Link } from "react-router-dom"; 
import Navbar from "../components/Navbar";
import SearchBar from "../components/SearchBar";
import Footer from "../components/Footer";
import foodData from "../data/foodData"; 
import Rating from '../components/Rating'; 
import { CityContext } from "../components/CityContext"; 

const Search = () => {
  const { selectedCity } = useContext(CityContext); 
  const [searchQuery, setSearchQuery] = useState("");
  const [showResults, setShowResults] = useState(false);

  const handleSearch = (query) => {
    setSearchQuery(query);
    setShowResults(true);
  };

  const filteredResults = foodData.filter(item =>
    item.name.toLowerCase().includes(searchQuery.toLowerCase()) &&
    item.location === selectedCity 
  );

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="bg-gray-900 min-h-screen text-white">
      <div className="min-h-[90vh]">
        <Navbar />

        <div className="container mx-auto px-4 py-10">
          <SearchBar onSearch={handleSearch} />

          {showResults && (
            <div className="mt-10">
              <h2 className="text-2xl sm:text-3xl font-semibold mb-4">
                Search results for "{searchQuery}" in {selectedCity}
              </h2>
              <p className="text-gray-400">{filteredResults.length} Results Found</p>

              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 mt-6">
                {filteredResults.map(item => (
                  <Link 
                    to={`/food/${item.id}`} 
                    key={item.id} 
                    className="bg-gray-800 rounded-lg p-4 sm:p-6 transition-transform transform hover:scale-105"
                  >
                    <img src={item.image} alt={item.name} className="w-full h-40 sm:h-48 lg:h-56 rounded-lg object-cover"/>
                    <h3 className="text-lg sm:text-xl font-semibold mt-4">{item.vendor}: {item.name}</h3>
                    <Rating rating={item.rating} />
                    <p className="text-gray-400 mt-2 text-sm sm:text-base">{item.description}</p>
                  </Link>
                ))}
              </div>
            </div>
          )}
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Search;
