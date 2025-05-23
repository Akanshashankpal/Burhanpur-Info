import axios from "axios";

const instance = axios.create({
  baseURL: "https://burhanpur-city-backend.vercel.app/api",
  headers: {
    "Content-Type": "application/json",
  },
});

// Add interceptor to attach token only when available
// instance.interceptors.request.use((config) => {
//   const token = localStorage.getItem("token"); // or from Redux/context
// const instance = axios.create({
//   baseURL: 'https://burhanpur-city-backend.vercel.app/api',
// });

// export default instance;

// Attach token from localStorage to every request
instance.interceptors.request.use((config) => {
  const token = localStorage.getItem('token');
  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }
  return config;
});

export default instance;
