const axios = require("axios");

export const fetcher = (url) => {
  console.log("Fetcher", url);
  return fetch(`${API_URL}${url}`)
    .then((res) => res.json())
    .then(({ data }) => data)
    .catch((error) => ({ error, data: [] }));
};

axios.defaults.withCredentials = false;

const api = axios.create({
  baseURL: process.env.API_URL,
  responseType: "json",
  headers: {
    "Content-Type": "application/json",
  },
});

export const api_multipart = axios.create({
  baseURL: process.env.API_URL,
  responseType: "json",
  headers: {
    "Content-Type": "multipart/form-data",
  },
});

const interceptor = api.interceptors.request.use((config) => {
  const myConfig = config;
  let token = false;
  if (typeof window !== "undefined") {
    token = localStorage.getItem("@@wurdz-token");
  }
  if (token) {
    myConfig.headers.Authorization = `Bearer ${token}`;
  }
  return myConfig;
});

export const interceptor_multipart = api_multipart.interceptors.request.use(
  (config) => {
    const myConfig = config;
    let token = false;
    if (typeof window !== "undefined") {
      token = localStorage.getItem("@@wurdz-token");
    }
    if (token) {
      myConfig.headers.Authorization = `Bearer ${token}`;
    }
    return myConfig;
  }
);

api.interceptors.response.use(
  ({ data }) => data,
  (error) => {
    return { error, data: [] };
  }
);

axios.interceptors.request.eject(interceptor);
axios.interceptors.request.eject(interceptor_multipart);
export default api;
