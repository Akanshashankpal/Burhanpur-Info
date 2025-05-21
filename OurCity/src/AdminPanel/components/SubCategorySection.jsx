import React, { useEffect, useState } from 'react';
import axios from '../../../axios';

const SubCategorySection = () => {
  const [data, setData] = useState([]);
  const [categories, setCategories] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const [formState, setFormState] = useState({
    id: null,
    title: '',
    image: '',
    categoryId: '',
  });

  const fetchSubCategories = () => {
    setLoading(true);
    axios
      .get('/subcategory/getSubCategory')
      .then((res) => {
        setData(res?.data?.result || []);
        setLoading(false);
      })
      .catch((err) => {
        console.error('Subcategory Fetch Error:', err);
        setError('Failed to fetch subcategories');
        setLoading(false);
      });
  };

  const fetchCategories = () => {
    axios
      .get('/category/getCategory')
      .then((res) => {
        const cats = res.data?.result || [];
        setCategories(cats);
      })
      .catch((err) => {
        console.error('Category Fetch Error:', err);
      });
  };

  useEffect(() => {
    fetchSubCategories();
    fetchCategories();
  }, []);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormState((prev) => ({ ...prev, [name]: value }));
  };

  const resetForm = () => {
    setFormState({ id: null, title: '', image: '', categoryId: '' });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!formState.title || !formState.image || !formState.categoryId) {
      alert('Please fill all fields');
      return;
    }

    if (formState.id) {
      axios
        .put('/subcategory/updateSubCategory', {
          _id: formState.id,
          title: formState.title,
          image: formState.image,
          category: formState.categoryId,
        })
        .then(() => {
          alert('Subcategory updated successfully');
          resetForm();
          fetchSubCategories();
        })
        .catch((err) => alert('Update failed: ' + err.message));
    }
  };

  const handleEdit = (subcategory) => {
    setFormState({
      id: subcategory._id,
      title: subcategory.title || subcategory.name || '',
      image: subcategory.image || '',
      categoryId: subcategory.category?._id || '',
    });
  };

  const handleDelete = (id) => {
    if (!window.confirm('Are you sure you want to delete this subcategory?')) return;

    axios
      .delete(`/subcategory/deleteSubCategory/${id}`)
      .then(() => {
        alert('Subcategory deleted successfully');
        fetchSubCategories();
      })
      .catch((err) => alert('Delete failed: ' + err.message));
  };

  return (
    <div className="px-6 py-8 max-w-5xl mx-auto">
      <h1 className="text-3xl font-bold text-gray-800 mb-6">All Subcategories</h1>

      {/* Show form only in edit mode */}
      {formState.id && (
        <form onSubmit={handleSubmit} className="mb-8 p-4 border border-gray-300 rounded shadow">
          <h2 className="text-xl font-semibold mb-4">Edit Subcategory</h2>

          <div className="mb-4">
            <label className="block mb-1 font-medium">Title</label>
            <input
              type="text"
              name="title"
              value={formState.title}
              onChange={handleInputChange}
              className="w-full border p-2 rounded"
            />
          </div>

          <div className="mb-4">
            <label className="block mb-1 font-medium">Image URL</label>
            <input
              type="text"
              name="image"
              value={formState.image}
              onChange={handleInputChange}
              className="w-full border p-2 rounded"
            />
          </div>

          <div className="mb-4">
            <label className="block mb-1 font-medium">Category</label>
            <select
              name="categoryId"
              value={formState.categoryId}
              onChange={handleInputChange}
              className="w-full border p-2 rounded"
            >
              <option value="">Select Category</option>
              {categories.map((cat) => (
                <option key={cat._id} value={cat._id}>
                  {cat.title || cat.name}
                </option>
              ))}
            </select>
          </div>

          <div className="flex gap-4">
            <button
              type="submit"
              className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 transition"
            >
              Update
            </button>
            <button
              type="button"
              onClick={resetForm}
              className="bg-gray-400 text-white px-4 py-2 rounded hover:bg-gray-500 transition"
            >
              Cancel
            </button>
          </div>
        </form>
      )}

      {/* Subcategories Table */}
      {loading ? (
        <p className="text-center text-gray-500 mt-10">Loading...</p>
      ) : error ? (
        <p className="text-center text-red-500 mt-10">{error}</p>
      ) : data.length === 0 ? (
        <p className="text-center text-gray-500 mt-10">No Subcategories Found</p>
      ) : (
        <div className="overflow-x-auto">
          <table className="min-w-full bg-white border border-gray-200 shadow-sm rounded">
            <thead>
              <tr className="bg-gray-100 text-gray-700">
                <th className="text-left p-4 border-b">Image</th>
                <th className="text-left p-4 border-b">Title</th>
                <th className="text-left p-4 border-b">Category</th>
                <th className="text-left p-4 border-b">Actions</th>
              </tr>
            </thead>
            <tbody>
              {data.map((subcategory) => (
                <tr key={subcategory._id} className="hover:bg-gray-50 transition">
                  <td className="p-4 border-b">
                    <img
                      src={subcategory.image}
                      alt={subcategory.title || 'subcategory'}
                      className="w-12 h-12 object-contain rounded"
                    />
                  </td>
                  <td className="p-4 border-b">{subcategory.title || subcategory.name}</td>
                  <td className="p-4 border-b">
                    {subcategory.category?.title || subcategory.category?.name || 'N/A'}
                  </td>
                  <td className="p-4 border-b flex gap-2">
                    <button
                      onClick={() => handleEdit(subcategory)}
                      className="bg-yellow-400 px-3 py-1 rounded hover:bg-yellow-500 transition"
                    >
                      Edit
                    </button>
                    <button
                      onClick={() => handleDelete(subcategory._id)}
                      className="bg-red-500 px-3 py-1 rounded text-white hover:bg-red-600 transition"
                    >
                      Delete
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
};

export default SubCategorySection;
