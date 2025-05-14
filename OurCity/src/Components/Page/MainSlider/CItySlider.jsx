import React, { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

import gurudwara from "./mainslideImg/gurudwara.jpg";
import rajakichatri from "./mainslideImg/rajakichatri.jpg";
import shanwara from "./mainslideImg/shanwaraMain.jpg";
import shahiqila from "./mainslideImg/shahiqila.jpg";
import railway from "./mainslideImg/railwayimg2.jpeg";

const images = [gurudwara, rajakichatri, shanwara, shahiqila, railway];

const CItySlider = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % images.length);
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="w-full h-[450px] relative">
      <AnimatePresence>
        <motion.img
          key={currentIndex}
          src={images[currentIndex]}
          alt={`Image ${currentIndex + 1}`}
          className="absolute top-0 left-0 w-full h-full object-cover"
          initial={{ opacity: 0, scale: 1.05 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0.98 }}
          transition={{ duration: 1 }}
        />
      </AnimatePresence>

      {/* Overlay Text with Upward Positioning */}
      {/* <div className="absolute inset-0 flex items-start justify-center bg-black/30 z-10">
        <h1 className="text-white text-4xl font-bold mt-12">Burhanpur City</h1>
      </div> */}
    </div>
  );
};

export default CItySlider;
