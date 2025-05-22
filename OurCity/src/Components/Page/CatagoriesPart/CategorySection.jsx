import React, { useState, useEffect } from 'react';
import axios from '../../../../axios';
import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
      delayChildren: 0.2,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0 },
  hover: {
    scale: 1.05,
    boxShadow: '0 8px 20px rgba(0, 0, 0, 0.15)',
    transition: { duration: 0.3 },
  },
};

const CategorySection = () => {
  const [data, setData] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    axios
      .get(`/category/getCategory?ts=${Date.now()}`) // avoid cached response
      .then((res) => {
        console.log("Fetched categories:", res?.data?.data); // Debug
        setData(res?.data?.data || []);
      })
      .catch((err) => {
        console.error("Error fetching categories:", err);
      });
  }, []);

  return (
    <div className="px-4 py-6">
      <h1 className="text-2xl font-bold mb-6 text-center">Explore Categories</h1>

      {data.length > 0 ? (
        <motion.div
          className="grid grid-cols-4 sm:grid-cols-5 md:grid-cols-6 lg:grid-cols-7 gap-6 justify-items-center"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          {data.map((category, index) => (
            <motion.div
              key={category._id || index}
              className="flex flex-col items-center justify-center text-center p-3 bg-white rounded-lg cursor-pointer select-none"
              onClick={() => navigate(`/subcategory/${category._id}`)}
              variants={itemVariants}
              whileHover="hover"
              transition={{ type: 'spring', stiffness: 300, damping: 20 }}
            >
              <img
                src={category.image}
                alt={category.title || 'category'}
                className="w-12 h-12 object-contain mb-2"
              />
              <p className="text-sm font-semibold text-gray-800">
                {category.title || category.name}
              </p>
            </motion.div>
          ))}
        </motion.div>
      ) : (
        <p className="text-center text-gray-500">Loading or No Categories Found</p>
      )}
    </div>
  );
};

export default CategorySection;
