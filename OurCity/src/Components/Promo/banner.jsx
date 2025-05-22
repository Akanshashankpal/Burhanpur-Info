import React, { useState } from 'react';
import './baner.css';
import promotional from "../../assets/promotional.jpg";
import { motion } from "framer-motion";

const Banner = ({onClose}) => {

    // const [visible,setVisible] = useState(true);

    // if(!visible) return null;

    
    


  return (
    <>
    <motion.div
      initial={{ opacity: 0, scale: 0.8 }}
      animate={{ opacity: 1, scale: 1 }}
      className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50"
    >
    <div className="card">
      <img src={promotional} alt="Promotional Banner" className="card-image" />
      <div className="card-content">
        <h2 className="card-title">Mega Summer Sale!</h2>
        <p className="card-description">
          Get up to 50% off on the latest fashion collections. Limited time only!
        </p>
        <a href="#" className="card-button">Shop Now</a>
        <button onClick={onClose} className="absolute top-2 right-3 text-white font-bold text-xl">
          ×
        </button>
        <div className="ad-label">ADVERTISEMENT</div>
      </div>
    </div>
    </motion.div>
    
    </>
    
    
  );
};

export default Banner;
