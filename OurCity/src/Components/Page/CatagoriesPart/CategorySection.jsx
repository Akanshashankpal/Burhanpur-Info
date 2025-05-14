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
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-6">Categories</h1>
      
      {data.length > 0 ? (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {data.map((category, index) => (
            <div
              key={index}
              className="bg-white rounded-lg shadow hover:shadow-md cursor-pointer transition duration-200"
              onClick={() => navigate(`/subcategory/${category._id}`)}
            >
              <img
                src={category.image}
                alt={category.title || 'category'}
                className="w-full h-40 object-cover rounded-t-lg"
              />
              <div className="p-4">
                <p className="text-lg font-semibold">
                  {category.title || category.name}
                </p>
              </div>
            </div>
          ))}
        </div>
      ) : (
        <p>Loading or No Data</p>
      )}
    </div>
  );
};

export default CategorySection;
