import React from 'react';

const OuterExplorePopup = ({ image, title, description, ctaText, onCtaClick }) => {
  return (
    <div className="bg-gradient-to-r from-pink-100 to-purple-200 p-4 rounded-xl shadow-md text-center">
      <img
        src={image}
        alt="Promotion"
        className="w-full h-40 object-cover rounded-lg mb-4"
      />
      <h2 className="text-xl font-bold text-gray-800 mb-2">{title}</h2>
      <p className="text-gray-600 mb-4">{description}</p>
      <button
        onClick={onCtaClick}
        className="bg-purple-600 text-white px-4 py-2 rounded-full hover:bg-purple-700 transition"
      >
        {ctaText}
      </button>
    </div>
  );
};

export default OuterExplorePopup;
