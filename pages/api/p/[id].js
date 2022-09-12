import api from "../../../utils";
export default async function handler(req, res) {
  const populates = ["author", "votes", "board", "thread", "comments"];
  const { id } = req.query;
  const posts = await api
    .get(`/p/${id}?populate=${populates.join(",")}`)
    .then(({ data, error }) => {
      if (!error) {
        return data;
      }
    })
    .catch((err) => {
      console.log("axios error", err);
    });
  return res.status(200).json({ data: posts });
}
