import axios from "axios";

const apiClient = axios.create({
  baseURL: "http://localhost:8080/api",
  headers: {
    "Content-Type": "application/json",
  },
});

apiClient.interceptors.request.use(
  (config) => {
    const token = localStorage.getItem("token");
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

apiClient.interceptors.response.use(
  (response) => response,
  (error) => {
    if (error.response) {
      if (error.response.status === 401) {
        console.error("Not authorized");
      } else if (error.response.status === 404) {
        console.error("Not found");
      } else if (error.response.status === 500) {
        console.error("Server error");
      }
    } else {
      console.error("Network error");
    }
    return Promise.reject(error);
  }
);

export default apiClient;
