// src/axios.js

import axios from "axios";

const axiosInstance = axios.create({
  baseURL: 'https://burhanpur-city-backend.vercel.app/api/',  
  headers: {
    'Content-Type': 'application/json',
    // Authorization: `Bearer ${token}`, 
    
  },
  timeout: 10000, 
});

export default axiosInstance;
