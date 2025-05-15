import React, { useState, useEffect } from 'react';
import axios from '../../../../axios';
import { useNavigate } from 'react-router-dom';

const CategorySection = () => {
  const [data, setData] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    axios.get('/category/getCategory')
      .then(res => setData(res?.data?.data))
      .catch(err => console.error(err));
  }, []);

  return (
    <div className="px-4 py-6">
      <h1 className="text-2xl font-bold mb-6 text-center"> Explore Categories</h1>

      {data.length > 0 ? (
        <div className="grid grid-cols-4 sm:grid-cols-5 md:grid-cols-6 lg:grid-cols-7 gap-4 justify-items-center">
          {data.map((category, index) => (
            <div
              key={index}
              className="flex flex-col items-center justify-center text-center p-2 bg-white rounded-lg shadow hover:shadow-md cursor-pointer transition duration-200"
              onClick={() => navigate(`/subcategory/${category._id}`)}
            >
              <img
                src={category.image}
                alt={category.title || 'category'}
                className="w-10 h-10 object-contain mb-2"
              />
              <p className="text-sm font-medium">{category.title || category.name}</p>
            </div>
          ))}
        </div>
      ) : (
        <p className="text-center text-gray-500">Loading or No Categories Found</p>
      )}
    </div>
  );
};

export default CategorySection;
