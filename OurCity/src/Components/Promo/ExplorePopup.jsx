import React from 'react'
// import Banner from './banner'
import './baner.css';

import promotional2 from "../../assets/promotional2.jpg";
import { motion } from "framer-motion";




const ExplorePopup = ({isOpen, OnClose}) => {
  if (!isOpen) return null;

  const [isVisible, setIsVisible] = useState(true);

  if (!isVisible) return null; // Do not render the card if it's closed



  return  (
    <>
    <motion.div
      initial={{ opacity: 0, scale: 0.8 }}
      animate={{ opacity: 1, scale: 1 }}
      // className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50"
      className="z-50"
    >
      {/* Overlay with blur */}
<div className="fixed bottom-4 right-4 z-50"></div>

{/* Card Wrapper */}
<div className="fixed top-50 right-10 z-50 max-w-xs w-full">
  <div className="bg-cyan-400 rounded-xl shadow-lg overflow-hidden relative">
    <img
      src={promotional2}
      alt="Promotional Banner"
      className="w-full h-28 object-cover"
    />
    <div className="p-4">
      <h2 className="text-lg font-semibold text-gray-900">Mega Summer Sale!</h2>
      <p className="text-sm text-gray-600 mt-1">
        Get up to 50% off on the latest fashion collections. Limited time only!
      </p>
      <a
        href="#"
        className="mt-3 inline-block bg-pink-500 hover:bg-pink-600 text-white text-sm font-medium py-2 px-4 rounded"
      >
        Shop Now
      </a>
      <div className="text-center text-xs text-gray-500 mt-3">ADVERTISEMENT</div>
    </div>
    <button
       onClick={() => setIsVisible(false)} 
      className="absolute top-2 right-2 text-white text-xl font-bold hover:text-red-400"
    >
      ×
    </button>
  </div>
</div>

    </motion.div>
    
    </>
  );
}

export default ExplorePopup

