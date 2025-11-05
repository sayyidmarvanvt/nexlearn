import axios from "axios";
import { store } from "@/store";
import { logout } from "@/store/authSlice";

const api = axios.create({
  baseURL: "/", // Uses your Next.js rewrite
});

// 🔹 Request Interceptor
api.interceptors.request.use(
  (config) => {
    const state = store.getState();
    const token = state.auth.access_token;
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
  },
  (error) => Promise.reject(error)
);

export default api;
