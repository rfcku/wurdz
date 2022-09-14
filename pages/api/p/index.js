import api from "../../../utils";
export default async function handler(req, res) {
  const populates = ["author", "votes", "comments"];
  const { token } = req.query;
  const posts = await api
    .get(`/all?populate=${populates.join(",")}`)
    .then(({ data, error }) => {
      if (!error) return data;
      throw error;
    })
    .catch((err) => {
      console.log("axios error", err);
    });
  return res.status(200).json({ data: posts });
}
