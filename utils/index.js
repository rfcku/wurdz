export const fetcher = (url) =>
  fetch(`http://localhost:3000/api${url}`)
    .then((res) => res.json())
    .then(({ data }) => data);
