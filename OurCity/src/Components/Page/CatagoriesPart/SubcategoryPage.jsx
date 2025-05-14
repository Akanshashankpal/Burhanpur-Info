import  { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import axios from '../../../../axios';

const SubcategoryPage = () => {
  const { categoryId } = useParams();
  const [subcategories, setSubcategories] = useState([]);

  useEffect(() => {
    console.log("Category ID:", categoryId); 
    axios.get(`/subcategory/getSubCategory/${categoryId}`)
      .then(res => {
        console.log("Subcategory Response:", res); 
        setSubcategories(res?.data?.result); 
      })
      .catch(err => console.error("Subcategory fetch failed", err));
  }, [categoryId]);

  return (
    <div className="p-6">
      <h2 className="text-2xl font-bold mb-4">Subcategories</h2>

      {subcategories.length > 0 ? (
  <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
    {subcategories.map((sub, index) => (
      <div key={index} className="bg-white rounded-lg shadow hover:shadow-md transition duration-200">
        <img
          src={sub.image}
          alt={sub.name}
          className="w-20 m-auto object-cover rounded-t-lg"
        />
        <div className="p-4">
          <h3 className="text-lg font-semibold mb-1">{sub.name}</h3>
          <p className="text-sm text-gray-600">{sub.description}</p>
          <p className="text-sm font-bold text-gray-600 mt-5">{sub.address}</p>
        </div>
      </div>
    ))}
  </div>
) : (
  <p>No subcategories found.</p>
)}

    </div>
  );
};

export default SubcategoryPage;
