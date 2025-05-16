import React, { useState, useEffect } from 'react';
import axios from '../../../../axios';
import { useNavigate } from 'react-router-dom';

const AdminCategory = () => {
  const [data, setData] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    axios
      .get('/category/getCategory')
      .then((res) => setData(res?.data?.data))
      .catch((err) => console.error(err));
  }, []);

  const handleDelete = async (id) => {
    try {
      const res = await fetch('https://burhanpur-city-backend.vercel.app/api/category/deleteSubCategory', {
        method: 'DELETE',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ _id: id }),
      });

      if (!res.ok) {
        throw new Error('Failed to delete subcategory');
      }

      setData(data.filter((item) => item._id !== id));
      alert('Subcategory deleted successfully!');
    } catch (err) {
      console.error('Delete failed:', err);
    }
  };

  const handleAddCategory = () => {
    navigate('/admin/add-category');
  };

  return (
    <div className="px-4 py-6">
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-2xl font-bold">All Categories</h1>
        <button
          onClick={handleAddCategory}
          className="px-4 py-2 bg-green-600 text-white rounded hover:bg-green-700"
        >
          + Add Category
        </button>
      </div>

      {data.length > 0 ? (
        <div className="overflow-x-auto">
          <table className="min-w-full table-auto border">
            <thead className="bg-gray-100">
              <tr>
                <th className="p-2 border">Image</th>
                <th className="p-2 border">Title</th>
                <th className="p-2 border">Actions</th>
              </tr>
            </thead>
            <tbody>
              {data.map((category, index) => (
                <tr key={index} className="text-center">
                  <td className="p-2 border">
                    <img
                      src={category.image}
                      alt={category.title || 'category'}
                      className="w-12 h-12 object-contain mx-auto"
                    />
                  </td>
                  <td className="p-2 border">{category.title || category.name}</td>
                  <td className="p-2 border space-x-2">
                    <button
                      className="px-3 py-1 bg-blue-500 text-white rounded hover:bg-blue-600"
                      onClick={() => navigate(`/edit-subcategory/${category._id}`)}
                    >
                      Edit
                    </button>
                    <button
                      onClick={() => handleDelete(category._id)}
                      className="px-3 py-1 bg-red-500 text-white rounded hover:bg-red-600"
                    >
                      Delete
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      ) : (
        <p className="text-center text-gray-500">Loading or No Categories Found</p>
      )}
    </div>
  );
};

export default AdminCategory;
