// src/axios.js

import axios from 'axios';

const axiosInstance = axios.create({

  baseURL: 'https://burhanpur-city-backend.vercel.app/api/',
  headers: {
    'Content-Type': 'application/json',

 
  baseURL: 'https://burhanpur-city-backend.vercel.app/api',  
  headers: {
    'Content-Type': 'application/json',
    // Authorization: `Bearer ${token}`, 
    
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



