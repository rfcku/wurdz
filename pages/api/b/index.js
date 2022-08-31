import API_URL from "..";
export default async function handler(req, res) {
  const data = await fetch(`${API_URL}/b`).then((res) => res.json());
  return res.status(200).json({ data });
}
