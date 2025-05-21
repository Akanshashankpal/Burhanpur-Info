import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from '../../../axios';



const CategorySection = () => {
  const [data, setData] = useState([]);
   const [newSubCategory, setNewSubCategory] = useState({ title: '', image: '' });
   const [showForm, setShowForm] = useState(false);
   const navigate = useNavigate();
 
   useEffect(() => {
     fetchSubCategories();
   }, []);
 
   const fetchSubCategories = () => {
     axios
       .get('/category/getCategory')
       .then((res) => {
         setData(res?.data?.result || []);
       })
       .catch((err) => console.error("API Error:", err));
   };
 
   const handleDelete = async (id) => {
     try {
       const res = await fetch(
         'https://burhanpur-city-backend.vercel.app/api/category/deleteSubCategory',
         {
           method: 'DELETE',
           headers: {
             'Content-Type': 'application/json',
           },
           body: JSON.stringify({ _id: id }),
         }
       );
 
       if (!res.ok) throw new Error('Failed to delete subcategory');
 
       setData(data.filter((item) => item._id !== id));
       alert('Subcategory deleted successfully!');
     } catch (err) {
       console.error('Delete failed:', err);
     }
   };
 
   const handleAddCategory = () => {
     setShowForm(true);
   };
 
   const handleFormChange = (e) => {
     const { name, value } = e.target;
     setNewSubCategory((prev) => ({ ...prev, [name]: value }));
   };
 
   const handleFormSubmit = async (e) => {
     e.preventDefault();
 
     try {
       const res = await fetch('category/Category', {
         method: 'POST',
         headers: {
           'Content-Type': 'application/json',
         },
         body: JSON.stringify(newSubCategory),
       });
 
       if (!res.ok) throw new Error('Failed to create subcategory');
 
       const result = await res.json();
       setData((prev) => [...prev, result.result]);
       setShowForm(false);
       setNewSubCategory({ title: '', image: '' });
       alert('Subcategory added successfully!');
     } catch (err) {
       console.error('Add failed:', err);
     }
   };
 
   return (
     <div className="px-6 py-8">
       <div className="flex justify-between items-center mb-6">
         <h1 className="text-3xl font-bold text-gray-800">All categories</h1>
         <button
           onClick={handleAddCategory}
           className="px-5 py-2 bg-green-600 text-white font-medium rounded hover:bg-green-700 transition duration-200"
         >
           + Add SubCategory
         </button>
       </div>
 
       {showForm && (
         <form
           onSubmit={handleFormSubmit}
           className="mb-6 p-4 border rounded shadow-md bg-gray-50 max-w-md"
         >
           <div className="mb-4">
             <label className="block text-sm font-medium text-gray-700">Title</label>
             <input
               type="text"
               name="title"
               value={newSubCategory.title}
               onChange={handleFormChange}
               required
               className="mt-1 block w-full border rounded px-3 py-2"
             />
           </div>
           <div className="mb-4">
             <label className="block text-sm font-medium text-gray-700">Image URL</label>
             <input
               type="text"
               name="image"
               value={newSubCategory.image}
               onChange={handleFormChange}
               required
               className="mt-1 block w-full border rounded px-3 py-2"
             />
           </div>
           <button
             type="submit"
             className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700"
           >
             Submit
           </button>
         </form>
       )}
 
       {Array.isArray(data) && data.length > 0 ? (
         <div className="overflow-x-auto">
           <table className="min-w-full bg-white border border-gray-200 shadow-sm rounded">
             <thead>
               <tr className="bg-gray-100 text-gray-700">
                 <th className="text-left p-4 border-b">Image</th>
                 <th className="text-left p-4 border-b">Title</th>
                 <th className="text-center p-4 border-b">Actions</th>
               </tr>
             </thead>
             <tbody>
               {data.map((category, index) => (
                 <tr key={index} className="hover:bg-gray-50 transition">
                   <td className="p-4 border-b">
                     <img
                       src={category.image}
                       alt={category.title || 'subcategory'}
                       className="w-12 h-12 object-contain rounded"
                     />
                   </td>
                   <td className="p-4 border-b">{category.title || category.name}</td>
                   <td className="p-4 border-b text-center space-x-3">
                     <button
                       onClick={() => navigate(`/edit-subcategory/${category._id}`)}
                       className="px-4 py-1 bg-blue-500 text-white rounded hover:bg-blue-600 transition"
                     >
                       Edit
                     </button>
                     <button
                       onClick={() => handleDelete(category._id)}
                       className="px-4 py-1 bg-red-500 text-white rounded hover:bg-red-600 transition"
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
         <p className="text-center text-gray-500 mt-10">Loading or No Subcategories Found</p>
       )}
     </div>
   );
}

export default CategorySection;
