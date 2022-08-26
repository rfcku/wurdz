export const fetcher = (url) =>
  fetch(`/api${url}`)
    .then((res) => res.json())
    .then(({ data }) => data);
