import { useState } from "react";
import axios from "../../../../../axios"; // ya axios from 'axios' if you're not using a custom instance

const CategorySearch = () => {
  const [searchText, setSearchText] = useState('');
  const [categories, setCategories] = useState([]);
  const [loading, setLoading] = useState(false);
  const [hasSearched, setHasSearched] = useState(false); // to control "no result" message

  const handleSearch = async () => {
    const trimmedSearch = searchText.trim();
    if (!trimmedSearch) return;

    try {
      setLoading(true);
      setHasSearched(true);

      console.log("Searching for:", trimmedSearch.toLowerCase()); // Debug log

      const response = await axios.post(
        'https://burhanpur-city-backend.vercel.app/api/category/searchCategory',
        { search: trimmedSearch.toLowerCase() } // you can remove `.toLowerCase()` if backend is already handling it
      );

      console.log("API Response:", response.data); // Debug log

      setCategories(response.data?.data || []);
    } catch (error) {
      console.error("Search failed:", error);
      setCategories([]);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="p-4 max-w-md mx-auto">
      <h2 className="text-xl font-semibold mb-4">Search Category</h2>
      <div className="flex gap-2 mb-4">
        <input
          type="text"
          className="border p-2 flex-1"
          value={searchText}
          onChange={(e) => setSearchText(e.target.value)}
          placeholder="Enter category name"
        />
        <button
          onClick={handleSearch}
          className="bg-blue-600 text-white px-4 py-2 rounded"
        >
          Search
        </button>
      </div>

      {loading && <p>Loading...</p>}

      <ul className="list-disc pl-5 space-y-2">
        {categories.map((cat) => (
          <li key={cat._id}>{cat.categoryName}</li>
        ))}
      </ul>

      {!loading && hasSearched && categories.length === 0 && (
        <p>No categories found for "{searchText}"</p>
      )}
    </div>
  );
};

export default CategorySearch;
