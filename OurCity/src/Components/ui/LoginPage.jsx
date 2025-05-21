import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { FiLock, FiEye, FiEyeOff } from 'react-icons/fi';

const LoginPage = () => {
  const [phone, setPhone] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [error, setError] = useState('');
  const navigate = useNavigate();

  useEffect(() => {
    AOS.init({ duration: 1000, once: true });
  }, []);

  const handleLogin = async () => {
    try {
      const res = await axios.post(
        'https://burhanpur-city-backend.vercel.app/api/Users/adminLogin',
        { phone, password }
      );
      const token = res.data.token;
      localStorage.setItem('authToken', token);
      setError('');
      navigate('/home');
    } catch (err) {
      console.error(err);
      setError('Invalid credentials');
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center px-4 relative overflow-hidden">
      {/* Watercolor background animation */}
      <div className="absolute inset-0 z-0 animate-pulse bg-gradient-to-br from-indigo-300 via-purple-200 to-pink-200 opacity-30 blur-[60px]" />

      <div
        className="relative z-10 bg-white p-8 rounded-2xl shadow-2xl w-full max-w-md"
        data-aos="zoom-in"
      >
        <h2 className="text-3xl font-bold text-center text-indigo-700 mb-6">
          Admin Login
        </h2>

        <div className="space-y-4">
          {/* Phone Input */}
          <input
            type="tel"
            placeholder="Phone"
            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
            required
          />

          {/* Password Input with Icons */}
          <div className="relative">
            <span className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400">
              <FiLock size={20} />
            </span>
            <input
              type={showPassword ? 'text' : 'password'}
              placeholder="Password"
              className="w-full pl-10 pr-10 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
            <span
              onClick={() => setShowPassword((prev) => !prev)}
              className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 cursor-pointer"
            >
              {showPassword ? <FiEyeOff size={20} /> : <FiEye size={20} />}
            </span>
          </div>

          {/* Login Button */}
          <button
            onClick={handleLogin}
            className="w-full bg-indigo-600 text-white py-2 rounded-lg hover:bg-indigo-700 transition duration-300"
          >
            Login
          </button>

          {/* Error Message */}
          {error && (
            <p className="text-red-500 text-sm text-center">{error}</p>
          )}
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
