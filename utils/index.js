const API_URL = process.env.API_URL || "http://localhost:3000/api";
export const fetcher = (url) =>
  fetch(`${API_URL}${url}`)
    .then((res) => res.json())
    .then(({ data }) => data);
