// import React, { useEffect, useState } from 'react';
// import { useParams, useNavigate } from 'react-router-dom';
// // import axios from '../../../axios';
// import axios from '../../../../axios';

// const EditSubCategory = () => {
//   const { id } = useParams();
//   const navigate = useNavigate();

//   const [formData, setFormData] = useState({
//     title: '',
//     image: ''
//   });

//   useEffect(() => {
//     axios
//       .get(`https://burhanpur-city-backend.vercel.app/api/subcategory/getSingleSubCategory/${id}`)
//       .then((res) => {
//         const data = res?.data?.result;
//         setFormData({
//           title: data.title || '',
//           image: data.image || ''
//         });
//       })
//       .catch((err) => console.error('Failed to fetch subcategory', err));
//   }, [id]);

//   const handleChange = (e) => {
//     const { name, value } = e.target;
//     setFormData((prev) => ({ ...prev, [name]: value }));
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     try {
//       await axios.put(
//         'https://burhanpur-city-backend.vercel.app/api/subcategory/updateSubCategory',
//         {
//           _id: id,
//           title: formData.title,
//           image: formData.image
//         }
//       );
//       alert('SubCategory updated successfully!');
//       navigate('/admin/subcategories');
//     } catch (err) {
//       console.error('Update failed', err);
//       alert('Failed to update subcategory');
//     }
//   };

//   return (
//     <div className="max-w-xl mx-auto p-6 bg-white shadow rounded mt-10">
//       <h2 className="text-2xl font-bold mb-4">Edit SubCategory</h2>
//       <form onSubmit={handleSubmit} className="space-y-4">
//         <div>
//           <label className="block text-gray-700 mb-1">Title</label>
//           <input
//             type="text"
//             name="title"
//             value={formData.title}
//             onChange={handleChange}
//             className="w-full px-4 py-2 border rounded"
//             required
//           />
//         </div>
//         <div>
//           <label className="block text-gray-700 mb-1">Image URL</label>
//           <input
//             type="text"
//             name="image"
//             value={formData.image}
//             onChange={handleChange}
//             className="w-full px-4 py-2 border rounded"
//             required
//           />
//         </div>
//         <button
//           type="submit"
//           className="bg-blue-600 text-white px-5 py-2 rounded hover:bg-blue-700 transition"
//         >
//           Update SubCategory
//         </button>
//       </form>
//     </div>
//   );
// };

// export default EditSubCategory;
