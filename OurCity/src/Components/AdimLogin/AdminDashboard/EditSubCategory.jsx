import React, { useEffect, useState } from 'react';
import axios from '../../../../axios'
import { useParams, useNavigate } from 'react-router-dom';

const EditSubCategory = () => {
    const { id } = useParams();
    const [subcategory, setSubcategory] = useState({ title: '', image: '' });
    const navigate = useNavigate();

    useEffect(() => {
        axios.get(`/subcategory/getSubCategoryById/${id}`)  
            .then(res => setSubcategory(res.data.data))
            .catch(err => console.error(err));
    }, [id]);

    const handleUpdate = async () => {
        try {
            await axios.post(`/subcategory/updateSubCategory`, {
                _id: id,
                ...subcategory
            });
            navigate('/admin-category'); // or wherever you want to redirect
        } catch (err) {
            console.error('Show Error:', err);
        }
    };

    return (
        <div className="max-w-md mx-auto p-4 space-y-4">
            <h2 className="text-xl font-bold text-center">Edit Subcategory</h2>
            <input
                type="text"
                className="w-full p-2 border rounded"
                value={subcategory.title}
                onChange={(e) => setSubcategory({ ...subcategory, title: e.target.value })}
                placeholder="Title"
            />
            <input
                type="text"
                className="w-full p-2 border rounded"
                value={subcategory.image}
                onChange={(e) => setSubcategory({ ...subcategory, image: e.target.value })}
                placeholder="Image URL"
            />
            <button
                onClick={handleUpdate}
                className="w-full bg-orange-600 text-white p-2 rounded hover:bg-green-700"
            >
                Update
            </button>
        </div>
    );
};

export default EditSubCategory;
