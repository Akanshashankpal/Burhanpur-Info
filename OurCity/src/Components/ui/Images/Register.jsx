import React, { useState } from 'react';
import axios from '../../../../axios';

const Register = () => {
    const [formData, setFormData] = useState({
        name: '',
        phone: '',
        password: '',
        email: '',
        role: '',
        address: ''
    });

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleRegister = async (e) => {
        e.preventDefault();
        try {
            const res = await axios.post('/users/createUser', formData); // ✔️ lowercase users
            if (res.data.success) {
                alert('Registration successful!');
            } else {
                alert('Registration failed: ' + res.data.message);
            }
        } catch (err) {
            console.error('Registration error:', err);
            alert('An error occurred during registration.');
        }
    };

    return (
        <div className="flex items-center bg-gray-100 ">
            <form
                onSubmit={handleRegister}
                className="bg-white p-8 rounded-2xl shadow-lg max-w-md w-full space-y-4"
            >
                <h2 className="text-2xl font-bold text-center text-gray-800">Register</h2>

                <input
                    type="text"
                    name="name"
                    placeholder="Name"
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
                <input
                    type="number"
                    name="phone"
                    placeholder="Phone"
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
                <input
                    type="email"
                    name="email"
                    placeholder="Email"
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
                <input
                    type="password"
                    name="password"
                    placeholder="Password"
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
                <input
                    type="text"
                    name="role"
                    placeholder="Role"
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
                <input
                    type="text"
                    name="address"
                    placeholder="Address"
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                />

                <button
                    type="submit"
                    className="w-full bg-purple-500 text-white font-semibold py-2 rounded-md hover:bg-blue-700 transition"
                >
                    Register
                </button>
            </form>
        </div>
    );
};

export default Register;
