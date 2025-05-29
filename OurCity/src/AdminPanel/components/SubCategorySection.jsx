import React, { useEffect, useState } from 'react';
import axios from '../../../axios';
import { motion } from 'framer-motion';

const SubCategorySection = () => {
  const [data, setData] = useState([]);
  const [categories, setCategories] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [showModal, setShowModal] = useState(false);
  const [mode, setMode] = useState('add');

  const [formState, setFormState] = useState({
    id: '',
    name: '',
    image: '',
    category: '',
    description: '',
    speciality: '',
    rating: '',
    address: '',
    timing: '',
    calling: '',
    details: 'prem',
    isActive: true,
    createdAt: '',
  });

  useEffect(() => {
    fetchSubCategories();
    fetchCategories();
  }, []);

  const fetchSubCategories = async () => {
    try {
      const res = await axios.get('/subcategory/getSubCategory');
      setData(res.data?.result || []);
    } catch {
      setError('Failed to fetch subcategories');
    } finally {
      setLoading(false);
    }
  };

  const fetchCategories = async () => {
    try {
      const res = await axios.get('/category/getCategory');
      setCategories(res?.data?.data || []);
    } catch (err) {
      console.error(err);
    }
  };

  const handleInputChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormState((prev) => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value,
    }));
  };

  const resetForm = () => {
    setFormState({
      id: '',
      name: '',
      image: '',
      category: '',
      description: '',
      speciality: '',
      rating: '',
      address: '',
      timing: '',
      calling: '',
      details: '',
      isActive: true,
      createdAt: '',
    });
    setShowModal(false);
    setMode('add');
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const {
      id,
      name,
      image,
      category,
      description,
      speciality,
      rating,
      address,
      timing,
      calling,
      details,
      isActive,
      createdAt,
    } = formState;

    if (!name || !image || !category) {
      alert('Please fill required fields: Name, Image, Category');
      return;
    }

    try {
      if (mode === 'edit') {
        const updateData = {
          name,
          image,
          category,
          description,
          speciality,
          rating,
          address,
          timing,
          calling,
          details,
          isActive,
          createdAt,
        };

        await axios.put(`/subcategory/updateSubCategory/${id}`, updateData);
        alert('Subcategory updated successfully');
      } else {
        const createData = {
          name,
          image,
          category,
          description,
          speciality,
          rating,
          address,
          timing,
          calling,
          details,
          isActive,
          createdAt,
        };

        await axios.post('/subcategory/createSubCategory', createData);
        alert('Subcategory added successfully');
      }

      resetForm();
      fetchSubCategories();
    } catch (err) {
      console.error(err);
      alert(`${mode === 'edit' ? 'Update' : 'Add'} failed`);
    }
  };

  const handleEdit = (subcategory) => {
    setMode('edit');
    setFormState({
      id: subcategory._id,
      name: subcategory.name || '',
      image: subcategory.image || '',
      category: subcategory.category?._id || subcategory.category || '',
      description: subcategory.description || '',
      speciality: subcategory.speciality || '',
      rating: subcategory.rating || '',
      address: subcategory.address || '',
      timing: subcategory.timing || '',
      calling: subcategory.calling || '',
      details: subcategory.details || '',
      isActive: subcategory.isActive ?? true,
      createdAt: subcategory.createdAt || '',
    });
    setShowModal(true);
  };

  const handleDelete = async (id) => {
    if (!window.confirm('Are you sure you want to delete this subcategory?')) return;
    try {
      await axios.delete(`/subcategory/deleteSubCategory/${id}`);
      fetchSubCategories();
    } catch {
      alert('Delete failed');
    }
  };

  const getCategoryName = (subcat) => {
    if (typeof subcat.category === 'string') {
      const match = categories.find((cat) => cat._id === subcat.category);
      return match?.title || match?.name || 'N/A';
    }
    return subcat.category?.title || subcat.category?.name || 'N/A';
  };

  return (
    <div className="p-6 max-w-6xl mx-auto">
      <div className="flex justify-between items-center mb-4">
        <h1 className="text-2xl font-bold">Subcategory Manager</h1>
        <button
          className="bg-blue-500 text-white p-2 rounded"
          onClick={() => {
            setMode('add');
            resetForm();
            setShowModal(true);
          }}
        >
          + Add SubCategory
        </button>
      </div>

      {loading ? (
        <p className="text-center text-gray-500">Loading...</p>
      ) : error ? (
        <p className="text-center text-red-500">{error}</p>
      ) : (
        <div className="overflow-x-auto rounded shadow border border-gray-200">
          <table className="min-w-full bg-white border-collapse">
            <thead className="bg-gray-100 text-gray-700 text-sm">
              <tr>
                <th className="p-3 border">Image</th>
                <th className="p-3 border">Name</th>
                <th className="p-3 border">Category</th>
                <th className="p-3 border text-center">Actions</th>
              </tr>
            </thead>
            <tbody>
              {data.map((subcat) => (
                <tr key={subcat._id} className="hover:bg-gray-50 border-t">
                  <td className="p-3 border">
                    <img
                      src={subcat.image}
                      alt={subcat.name}
                      className="w-12 h-12 object-cover rounded border"
                      onError={(e) => (e.target.src = 'https://via.placeholder.com/50')}
                    />
                  </td>
                  <td className="p-3 border">{subcat.name}</td>
                  <td className="p-3 border">{getCategoryName(subcat)}</td>
                  <td className="p-3 border text-center">
                    <button
                      onClick={() => handleEdit(subcat)}
                      className="text-blue-600 hover:underline mr-3"
                    >
                      Edit
                    </button>
                    <button
                      onClick={() => handleDelete(subcat._id)}
                      className="text-red-600 hover:underline"
                    >
                      Delete
                    </button>
                  </td>
                </tr>
              ))}
              {data.length === 0 && (
                <tr>
                  <td colSpan="4" className="text-center py-6 text-gray-500">
                    No subcategories found.
                  </td>
                </tr>
              )}
            </tbody>
          </table>
        </div>
      )}

      {showModal && (
        <div className="fixed inset-0 bg-black/40 backdrop-blur-sm flex items-center justify-center z-50">
          <motion.div
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            className="bg-white p-6 rounded-lg shadow-lg w-full max-w-lg max-h-[90vh] overflow-y-auto"
          >
            <h2 className="text-xl font-semibold mb-4">
              {mode === 'edit' ? 'Edit' : 'Add'} Subcategory
            </h2>
            <form onSubmit={handleSubmit} className="space-y-4">
              <input
                type="text"
                name="name"
                placeholder="Name *"
                value={formState.name}
                onChange={handleInputChange}
                className="w-full px-3 py-2 border rounded"
                required
              />

              <input
                type="text"
                name="image"
                placeholder="Image URL *"
                value={formState.image}
                onChange={handleInputChange}
                className="w-full px-3 py-2 border rounded"
                required
              />

              <select
                name="category"
                value={formState.category}
                onChange={handleInputChange}
                className="w-full px-3 py-2 border rounded"
                required
              >
                <option value="">Select Category *</option>
                {categories.map((cat) => (
                  <option key={cat._id} value={cat._id}>
                    {cat.name || cat.title}
                  </option>
                ))}
              </select>

              <textarea
                name="description"
                placeholder="Description"
                value={formState.description}
                onChange={handleInputChange}
                className="w-full px-3 py-2 border rounded"
              />

              <input
                type="number"
                name="rating"
                placeholder="Rating"
                value={formState.rating}
                onChange={handleInputChange}
                className="w-full px-3 py-2 border rounded"
              />

              <textarea
                name="details"
                placeholder="Details"
                value={formState.details}
                onChange={handleInputChange}
                className="w-full px-3 py-2 border rounded"
              />

              <div className="flex justify-end gap-2 pt-2">
                <button
                  type="button"
                  onClick={resetForm}
                  className="px-4 py-2 border rounded hover:bg-gray-100"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700"
                >
                  {mode === 'edit' ? 'Update' : 'Add'}
                </button>
              </div>
            </form>

          </motion.div>
        </div>
      )}
    </div>
  );
};

export default SubCategorySection;