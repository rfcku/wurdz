import axios from "axios";

const API_URL = process.env.API_URL || "http://localhost:3000/api";
export const fetcher = (url) => {
  console.log("Fetcher", url);
  return fetch(`${API_URL}${url}`)
    .then((res) => res.json())
    .then(({ data }) => data)
    .catch((error) => ({ error, data: [] }));
};

axios.defaults.withCredentials = false;

const api = axios.create({
  baseURL:
    process.env.API_URL ||
    process.env.REACT_APP_BASE_URL ||
    "http://localhost:3000/api",
  responseType: "json",
  headers: {
    "Content-Type": "application/json",
  },
});

const interceptor = api.interceptors.request.use((config) => {
  const myConfig = config;
  const token = JSON.parse(localStorage.getItem("@@wurdz-token"));
  if (token) {
    myConfig.headers.Authorization = `Bearer ${token}`;
  }
  return myConfig;
});

axios.interceptors.request.eject(interceptor);
export default api;
