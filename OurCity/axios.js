import axios from "axios";

const instance = axios.create({
  baseURL: "https://burhanpur-city-backend.vercel.app/api",
  headers: {
    "Content-Type": "application/json",
  },
});

// Add interceptor to attach token only when available
instance.interceptors.request.use((config) => {
  const token = localStorage.getItem("token"); // or from Redux/context
  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }
  return config;
});

export default instance;
