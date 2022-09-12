import api from "../../../utils";
export default async function handler(req, res) {
  const data = await api.get(`${API_URL}/b`).then((res) => res.json());
  return res.status(200).json({ data });
}
