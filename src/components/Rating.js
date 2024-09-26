import React from 'react';

const Rating = ({ rating }) => {
  const fullStars = Math.floor(rating / 2);
  const halfStars = rating % 2 >= 1 ? 1 : 0;
  const emptyStars = 5 - fullStars - halfStars;

  return (
    <div className="flex items-center">
      {/* Numeric Rating */}
      <span className="mr-2">{rating.toFixed(1)} / 10</span>
      {/* Star Icons */}
      {[...Array(fullStars)].map((_, index) => (
        <span key={`full-${index}`} className="text-yellow-500">&#9733;</span>
      ))}
      {[...Array(halfStars)].map((_, index) => (
        <span key={`half-${index}`} className="text-yellow-500">&#9734;</span>
      ))}
      {[...Array(emptyStars)].map((_, index) => (
        <span key={`empty-${index}`} className="text-gray-400">&#9734;</span>
      ))}
    </div>
  );
};

export default Rating;
