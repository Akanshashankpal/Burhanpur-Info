// src/axios.js

import axios from 'axios';

const axiosInstance = axios.create({
<<<<<<< HEAD
  baseURL: 'https://burhanpur-city-backend.vercel.app/api/',
  headers: {
    'Content-Type': 'application/json',
=======
  baseURL: 'https://burhanpur-city-backend.vercel.app/api',  
  headers: {
    'Content-Type': 'application/json',
    // Authorization: `Bearer ${token}`, 
    
>>>>>>> a81da7c937816503c402a8b8770d02b96c81f572
  },
  timeout: 10000,
});

// Attach token from localStorage to every request
axiosInstance.interceptors.request.use((config) => {
  const token = localStorage.getItem('token');
  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }
  return config;
}, (error) => {
  return Promise.reject(error);
});

export default axiosInstance;
