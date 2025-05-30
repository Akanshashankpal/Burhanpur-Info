import React, { useState, useEffect } from 'react';
import { Atom } from 'react-loading-indicators';
import { motion } from 'framer-motion';

const Gurudwara = () => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 1000);
    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const sectionVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: (i = 1) => ({
      opacity: 1,
      y: 0,
      transition: {
        delay: i * 0.2,
        duration: 0.6,
        ease: 'easeOut',
      },
    }),
  };

  return (
    <div className="min-h-screen">
      {loading ? (
        <div className="fixed inset-0 z-50 bg-white flex items-center justify-center">
          <div className="transform -translate-x-1/2 -translate-y-1/2 absolute top-1/2 left-1/2">
            <Atom color="#fa0606" size="medium" text="" textColor="#f40c0c" />
          </div>
        </div>
      ) : (
        <motion.div
          className="max-w-6xl mx-auto px-4 py-10 space-y-12 font-sans"
          initial="hidden"
          animate="visible"
          variants={sectionVariants}
          custom={0}
        >
          {/* Title */}
          <motion.div
            className="text-center"
            variants={sectionVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            custom={0}
          >
            <h1 className="text-4xl font-bold text-gray-800">Gurudwara</h1>
            <p className="text-lg text-gray-500 mt-2">
             This Gurdwara holds historical significance as it was visited by Guru Nanak Dev Ji
            </p>
          </motion.div>
          {/* Add more sections here */}
        </motion.div>
      )}
    </div>
  );
};

export default Gurudwara;
