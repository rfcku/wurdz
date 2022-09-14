const axios = require("axios");

const API = process.env.API_URL || "https://wurdz-api.herokuapp.com";

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
  // console.log("Outgoing request", config);
  const myConfig = config;
  let token = false;
  if (typeof window !== "undefined") {
    token = localStorage.getItem("@@wurdz-token");
  }
  if (token) {
    myConfig.headers.Authorization = `Bearer ${token}`;
  }
  console.log("Outgoing request", myConfig.headers);
  return myConfig;
});

api.interceptors.response.use(
  ({ data }) => data,
  (error) => {
    console.log("Request Error", error.response.data);
    return { error, data: [] };
  }
);

axios.interceptors.request.eject(interceptor);
export default api;
