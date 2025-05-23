import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import axios from "./../../../axios"; // uses token-enabled axios

const CategorySection = () => {
  const [categories, setCategories] = useState([]);
  const [modalOpen, setModalOpen] = useState(false);
  const [isEditMode, setIsEditMode] = useState(false);
  const [currentCategoryId, setCurrentCategoryId] = useState(null);
  const [formData, setFormData] = useState({ name: "", description: "", image: "" });
  const [loading, setLoading] = useState(false);
  const [selectedCategoryId, setSelectedCategoryId] = useState(null); // ✅ Added state

  const fetchCategories = async () => {
    try {
      const res = await axios.get("/category/getCategory");
      setCategories(res.data?.data || []);
    } catch (error) {
      console.error("Error fetching categories:", error.response?.data || error.message);
    }
  };

  useEffect(() => {
    fetchCategories();
  }, []);

  const openAddModal = () => {
    setIsEditMode(false);
    setFormData({ name: "", description: "", image: "" });
    setModalOpen(true);
  };

  const openEditModal = (category) => {
    setIsEditMode(true);
    setCurrentCategoryId(category._id);
    setFormData({
      name: category.name,
      description: category.description,
      image: category.image,
    });
    setModalOpen(true);
  };

  const handleAddSubcategory = (categoryId) => {
    setSelectedCategoryId(categoryId);
    console.log("Selected Category ID for Subcategory:", categoryId);
    // Optionally: open a subcategory modal here
  };

  const handleDelete = async (id) => {
    if (!window.confirm("Are you sure you want to delete this category?")) return;
    try {
      await axios.delete(`/category/deleteCategory/${id}`);
      fetchCategories();
    } catch (error) {
      console.error("Delete failed:", error.response?.data || error.message);
      alert("Error deleting category");
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const { name, description, image } = formData;

    if (!name.trim() || !image.trim()) {
      alert("Please fill in required fields: Name and Image URL");
      return;
    }

    setLoading(true);

    const payload = {
      name: name.trim(),
      description: description.trim() || "No description",
      image: image.trim(),
      isActive: true,
    };

    try {
      if (isEditMode) {
        await axios.put(`/category/updateCategory/${currentCategoryId}`, payload);
        alert("Category updated successfully!");
      } else {
        await axios.post("/category/createCategory", payload);
        alert("Category added successfully!");
      }
      fetchCategories();
      setModalOpen(false);
    } catch (err) {
      console.error("Error saving category:", err.response?.data || err.message);
      alert(
        err.response?.data?.message ||
        err.response?.data?.error ||
        "Server error while saving category."
      );
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="p-6 max-w-6xl mx-auto">
      <div className="flex justify-between items-center mb-4">
        <h1 className="text-2xl font-bold">Category Manager</h1>
        <button
          onClick={openAddModal}
          className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700"
        >
          + Add Category
        </button>
      </div>

      <div className="overflow-x-auto">
        <table className="w-full border-collapse shadow-md">
          <thead className="bg-gray-100 text-left">
            <tr>
              <th className="p-3 border">Image</th>
              <th className="p-3 border">Name</th>
              <th className="p-3 border">Description</th>
              <th className="p-3 border text-center">Actions</th>
            </tr>
          </thead>
          <tbody>
            {categories.map((cat) => (
              <tr key={cat._id} className="border-b hover:bg-gray-50">
                <td className="p-3 border">
                  <img src={cat.image} alt={cat.name} className="w-12 h-12 object-contain" />
                </td>
                <td className="p-3 border font-medium">{cat.name}</td>
                <td className="p-3 border text-gray-600">{cat.description}</td>
                <td className="p-3 border text-center space-x-3">
                  <button
                    onClick={() => openEditModal(cat)}
                    className="text-blue-600 hover:underline"
                  >
                    Edit
                  </button>
                  <button
                    onClick={() => handleDelete(cat._id)}
                    className="text-red-600 hover:underline"
                  >
                    Delete
                  </button>
                  <button
                    onClick={() => handleAddSubcategory(cat._id)}
                    className="text-green-600 hover:underline"
                  >
                    + Subcategory
                  </button>
                </td>
              </tr>
            ))}
            {categories.length === 0 && (
              <tr>
                <td colSpan="4" className="text-center py-6 text-gray-500">
                  No categories found.
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>

      {modalOpen && (
        <div className="fixed inset-0 bg-black/40 backdrop-blur-sm flex items-center justify-center z-50">
          <motion.div
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            className="bg-white p-6 rounded-lg shadow-lg w-full max-w-lg"
          >
            <h2 className="text-xl font-semibold mb-4">
              {isEditMode ? "Edit Category" : "Add Category"}
            </h2>
            <form onSubmit={handleSubmit} className="space-y-4">
              <input
                type="text"
                placeholder="Category Name"
                value={formData.name}
                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                className="border w-full px-3 py-2 rounded"
                required
              />
              
              <input
                type="text"
                placeholder="Description"
                value={formData.description}
                onChange={(e) => setFormData({ ...formData, description: e.target.value })}
                className="border w-full px-3 py-2 rounded"
              />
              <input
                type="text"
                placeholder="Image URL"
                value={formData.image}
                onChange={(e) => setFormData({ ...formData, image: e.target.value })}
                className="border w-full px-3 py-2 rounded"
                required
              />
              <div className="flex justify-end gap-2">
                <button
                  type="button"
                  onClick={() => setModalOpen(false)}
                  className="px-4 py-2 border rounded hover:bg-gray-100"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  disabled={loading}
                  className={`px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 ${
                    loading ? "opacity-60 cursor-not-allowed" : ""
                  }`}
                >
                  {loading
                    ? isEditMode
                      ? "Updating..."
                      : "Adding..."
                    : isEditMode
                    ? "Update"
                    : "Add"}
                </button>
              </div>
            </form>
          </motion.div>
        </div>
      )}
    </div>
  );
};

export default CategorySection;
