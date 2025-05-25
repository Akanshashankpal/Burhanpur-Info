import React, { useState, useEffect } from 'react';
import axios from '../../../../axios';
import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';

const slideInVariants = {
  hidden: { x: '100vw', opacity: 0 },
  visible: {
    x: 0,
    opacity: 1,
    transition: {
      type: 'spring',
      stiffness: 80,
      damping: 20,
      delay: 0.2,
    },
  },
};

const CategorySection = () => {
  const [data, setData] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    axios
      .get('/category/getCategory')
      .then((res) => setData(res?.data?.data))
      .catch((err) => console.error(err));
  }, []);

  return (
    <motion.div
      className="px-4 sm:px-6 py-8 sm:py-12 bg-gradient-to-b from-white via-blue-50 to-blue-100 min-h-[60vh]"
      variants={slideInVariants}
      initial="hidden"
      animate="visible"
    >
      <h1 className="text-xl sm:text-3xl font-bold text-center text-blue-900 mb-6 sm:mb-10">
        🌟 Discover Categories
      </h1>

      {data.length > 0 ? (
        <div
          className="flex space-x-4 sm:space-x-6 overflow-x-auto scrollbar-thin scrollbar-thumb-blue-300 scrollbar-track-blue-100 py-3 sm:py-4 px-1 sm:px-2"
          style={{ WebkitOverflowScrolling: 'touch' }} // smooth scrolling on iOS
        >
          {data.map((category, index) => (
            <motion.div
              key={category._id || index}
              whileHover={{
                scale: 1.1,
                rotate: [0, 1, -1, 0],
                transition: { duration: 0.3 },
              }}
              onClick={() => navigate(`/subcategory/${category._id}`)}
              className="min-w-[90px] sm:min-w-[120px] flex flex-col items-center justify-center text-center cursor-pointer select-none"
              aria-label={`Go to ${category.title || category.name} category`}
              role="button"
              tabIndex={0}
              onKeyDown={(e) => {
                if (e.key === 'Enter' || e.key === ' ') {
                  navigate(`/subcategory/${category._id}`);
                }
              }}
            >
              <div className="w-20 h-20 sm:w-24 sm:h-24 rounded-full border-4 border-blue-300 overflow-hidden shadow-md hover:shadow-xl transition-shadow duration-300">
                <img
                  src={category.image || 'https://via.placeholder.com/100'}
                  alt={category.title || category.name || 'Category'}
                  className="w-full h-full object-cover"
                  loading="lazy"
                />
              </div>
              <p className="text-xs sm:text-sm font-medium text-gray-700 mt-2 sm:mt-3 hover:text-blue-600 transition-colors text-center px-1 break-words">
                {category.title || category.name}
              </p>
            </motion.div>
          ))}
        </div>
      ) : (
        <p className="text-center text-gray-500 mt-10">Loading categories...</p>
      )}
    </motion.div>
  );
};

export default CategorySection;
