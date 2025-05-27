import React from 'react';

const Buttons = ({ onClick}) => {
  return (
    <div className=" from-blue-100 via-white to-blue-100">
      <button
      onClick={onClick}
      className="px-6 py-3 bg-blue-600 text-white font-semibold rounded-xl shadow-md hover:bg-blue-700 transition duration-300 ease-in-out transform hover:scale-105">
        Learn More 
      </button>
    </div>
  );
};

export default Buttons;
