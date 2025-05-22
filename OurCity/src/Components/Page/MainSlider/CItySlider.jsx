import React, { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

import gurudwara from "./mainslideImg/gurudwara.jpg";
import rajakichatri from "./mainslideImg/rajakichatri.jpg";
import shanwara from "./mainslideImg/shanwaraMain.jpg";
import shahiqila from "./mainslideImg/shahiqila.jpg";
import railway from "./mainslideImg/railwayimg2.jpeg";

const images = [gurudwara, rajakichatri, shanwara, shahiqila, railway];

const CitySlider = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % images.length);
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="w-full h-[450px] relative overflow-hidden perspective-[1500px]">
      <AnimatePresence mode="wait">
        <motion.img
          key={currentIndex}
          src={images[currentIndex]}
          alt={`Image ${currentIndex + 1}`}
          className="absolute top-0 left-0 w-full h-full object-cover"
          initial={{ opacity: 0, rotateY: 90 }}
          animate={{ opacity: 1, rotateY: 0 }}
          exit={{ opacity: 0, rotateY: -90 }}
          transition={{ duration: 1 }}
          style={{ backfaceVisibility: "hidden" }}
        />
      </AnimatePresence>
    </div>
  );
};

export default CitySlider;
