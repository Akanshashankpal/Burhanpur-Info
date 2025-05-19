import React, { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

// Image imports
import gurudwara from "./mainslideImg/gurudwara.jpg";
import rajakichatri from "./mainslideImg/rajakichatri.jpg";
import shanwara from "./mainslideImg/shanwaraMain.jpg";
import shahiqila from "./mainslideImg/shahiqila.jpg";
import railway from "./mainslideImg/railwayimg2.jpeg";

const slides = [
  {
    image: gurudwara,
    title: "Gurudwara Bari Sangat",
    subtitle: "Ek pavitra sthal Burhanpur ke dil mein",
  },
  {
    image: rajakichatri,
    title: "Raja Ki Chhatri",
    subtitle: "Itihas aur virasat ka ek jeevant pratik",
  },
  {
    image: shanwara,
    title: "Shanwara Chowk",
    subtitle: "Burhanpur ka sabse vyaast bazaar",
  },
  {
    image: shahiqila,
    title: "Shahi Qila",
    subtitle: "Mughal kalin virasat aur shaan",
  },
  {
    image: railway,
    title: "Railway Station",
    subtitle: "Burhanpur ka gateway to India",
  },
];

const CItySlider = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % slides.length);
    }, 4000);

    return () => clearInterval(interval);
  }, []);

  const currentSlide = slides[currentIndex];

  return (
    <div className="w-full h-[450px] relative overflow-hidden">
      {/* Background Image Animation */}
      <AnimatePresence mode="wait">
        <motion.img
          key={currentIndex}
          src={currentSlide.image}
          alt={`Slide ${currentIndex + 1}`}
          className="absolute top-0 left-0 w-full h-full object-cover"
          initial={{ opacity: 0, scale: 1.05 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0.98 }}
          transition={{ duration: 1 }}
        />
      </AnimatePresence>

      {/* Only Text Box With Background */}
      <AnimatePresence mode="wait">
        <motion.div
          key={`text-${currentIndex}`}
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          transition={{ duration: 1 }}
          className="absolute inset-0 flex items-center justify-center "
        >
          <div className="px-6 py-4 rounded-xl text-center  max-w-[80%] md:max-w-[60%]">
            <h1 className="text-white text-3xl md:text-5xl font-bold ">{currentSlide.title}</h1>
            <p className="text-white text-lg md:text-xl mt-2">{currentSlide.subtitle}</p>
          </div>
        </motion.div>
      </AnimatePresence>
    </div>
  );
};

export default CItySlider;
