import React, { useEffect, useState } from 'react';
import axios from '../../../axios';

const SubCategorySection = () => {
  const [data, setData] = useState([]);
  const [categories, setCategories] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [showModal, setShowModal] = useState(false);

  const [formState, setFormState] = useState({
    id: null,
    title: '',
    image: '',
    categoryId: '',
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
      setCategories(res.data?.result || []);
    } catch (err) {
      console.error(err);
    }
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormState((prev) => ({ ...prev, [name]: value }));
  };

  const resetForm = () => {
    setFormState({ id: null, title: '', image: '', categoryId: '' });
    setShowModal(false);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const { id, title, image, categoryId } = formState;
    if (!title || !image || !categoryId) {
      alert('Please fill all fields');
      return;
    }
    try {
      await axios.put('/subcategory/updateSubCategory', {
        _id: id,
        title,
        image,
        category: categoryId,
      });
      alert('Subcategory updated successfully');
      resetForm();
      fetchSubCategories();
    } catch (err) {
      alert('Update failed');
    }
  };

  const handleEdit = (subcategory) => {
    setFormState({
      id: subcategory._id,
      title: subcategory.title || subcategory.name,
      image: subcategory.image,
      categoryId: subcategory.category?._id,
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

  return (
    <div className="p-6 max-w-6xl mx-auto">
      <h1 className="text-3xl font-bold mb-6 text-gray-800">Manage Subcategories</h1>

      {/* Modal */}
      {showModal && (
        <div className="fixed inset-0 bg-black/40 backdrop-blur-sm flex items-center justify-center z-50">
          <div className="bg-white p-6 rounded-xl shadow-lg w-full max-w-md">
            <h2 className="text-xl font-semibold mb-4">Edit Subcategory</h2>
            <form onSubmit={handleSubmit}>
              <div className="space-y-4">
                <input
                  type="text"
                  name="title"
                  value={formState.title}
                  onChange={handleInputChange}
                  placeholder="Title"
                  className="w-full border rounded px-4 py-2"
                />
                <input
                  type="text"
                  name="image"
                  value={formState.image}
                  onChange={handleInputChange}
                  placeholder="Image URL"
                  className="w-full border rounded px-4 py-2"
                />
                <select
                  name="categoryId"
                  value={formState.categoryId}
                  onChange={handleInputChange}
                  className="w-full border rounded px-4 py-2"
                >
                  <option value="">Select Category</option>
                  {categories.map((cat) => (
                    <option key={cat._id} value={cat._id}>
                      {cat.title || cat.name}
                    </option>
                  ))}
                </select>
              </div>
              <div className="flex justify-end gap-2 mt-6">
                <button
                  type="submit"
                  className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700"
                >
                  Update
                </button>
                <button
                  type="button"
                  onClick={resetForm}
                  className="bg-gray-300 px-4 py-2 rounded hover:bg-gray-400"
                >
                  Cancel
                </button>
              </div>
            </form>
          </div>
        </div>
      )}

      {/* Table */}
      {loading ? (
        <p className="text-center text-gray-500">Loading...</p>
      ) : error ? (
        <p className="text-center text-red-500">{error}</p>
      ) : (
        <div className="overflow-x-auto rounded shadow border border-gray-200">
          <table className="min-w-full bg-white">
            <thead>
              <tr className="bg-gray-100 text-left text-gray-700 text-sm">
                <th className="p-4">Image</th>
                <th className="p-4">Title</th>
                <th className="p-4">Category</th>
                <th className="p-4 text-right">Actions</th>
              </tr>
            </thead>
            <tbody>
              {data.map((subcat) => (
                <tr key={subcat._id} className="hover:bg-gray-50 border-t">
                  <td className="p-4">
                    <img
                      src={subcat.image}
                      alt="Subcat"
                      className="w-12 h-12 object-cover rounded border"
                      onError={(e) => (e.target.src = 'https://via.placeholder.com/50')}
                    />
                  </td>
                  <td className="p-4">{subcat.title || subcat.name}</td>
                  <td className="p-4">{subcat.category?.title || subcat.category?.name || 'N/A'}</td>
                  <td className="p-4 text-right flex gap-2 justify-end">
                    <button
                      onClick={() => handleEdit(subcat)}
                      className="  px-3 py-1 rounded flex items-center gap-1"
                    >
                      Edit
                    </button>
                    <button
                      onClick={() => handleDelete(subcat._id)}
                      className="text-red-700 px-3 py-1 rounded flex items-center gap-1"
                    >
                      Delete
                    </button>
                  </td>
                </tr>
              ))}
              {data.length === 0 && (
                <tr>
                  <td colSpan="4" className="p-4 text-center text-gray-500">
                    No subcategories found.
                  </td>
                </tr>
              )}
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
};

export default SubCategorySection;
