import axios from "axios";

const api = axios.create({
  baseURL: "https://69a8b96832e2d46caf445067.mockapi.io/",
  timeout: 5000,
  headers: {
    "Content-Type": "application/json",
    Accept: "application/json",
  },
});

export default api;