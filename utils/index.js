const axios = require("axios");

// const API = process.env.API_URL || "https://wurdz-api.herokuapp.com";
const API = process.env.API_URL || "http://localhost:4000";

export const fetcher = (url) => {
  return fetch(`${API}${url}`)
    .then((res) => res.json())
    .then(({ data }) => data)
    .catch((error) => ({ error, data: [] }));
};

axios.defaults.withCredentials = false;

const api = axios.create({
  baseURL: API,
  responseType: "json",
  headers: {
    "Content-Type": "application/json",
  },
});

const interceptor = api.interceptors.request.use((config) => {
  let token = false;
  if (typeof window !== "undefined") {
    token = localStorage.getItem("@@wurdz-token");
  }
  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }
  config.headers.Authorization = `Bearer ${token}`;
  // console.log("Outgoing request", config.headers);
  return config;
});

api.interceptors.response.use(
  ({ data }) => data,
  (error) => {
    console.log("Request Error", error);
    // return { error };
  }
);

axios.interceptors.request.eject(interceptor);
export default api;
