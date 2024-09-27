import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch, faTimes } from "@fortawesome/free-solid-svg-icons";

const SearchBar = ({ onSearch }) => {
  const [inputValue, setInputValue] = useState("");

  const handleChange = (e) => {
    setInputValue(e.target.value);
  };

  const clearInput = () => {
    setInputValue("");
  };

  const handleSearch = () => {
    if (inputValue.trim()) {
      onSearch(inputValue);
      clearInput(); 
    }
  };

  const handleKeyDown = (e) => {
    if (e.key === "Enter") {
      handleSearch(); 
    }
  };

  return (
    <div className="container mx-auto px-4 py-10">
      <div className="flex justify-center">
        <div className="relative w-full md:w-1/2">
          <input
            type="text"
            className={`w-full bg-gray-800 text-white rounded-full px-6 py-3 focus:outline-none ${
              inputValue ? "pr-16" : ""
            }`}
            placeholder="Search for food"
            value={inputValue}
            onChange={handleChange}
            onKeyDown={handleKeyDown} 
          />
          {inputValue && (
            <FontAwesomeIcon
              icon={faTimes}
              className="absolute right-16 top-3 text-gray-400 cursor-pointer hover:text-white"
              onClick={clearInput}
            />
          )}
          <FontAwesomeIcon
            icon={faSearch}
            className="absolute right-4 top-3 text-gray-400 cursor-pointer hover:text-white"
            onClick={handleSearch}
          />
        </div>
      </div>
    </div>
  );
};

export default SearchBar;
