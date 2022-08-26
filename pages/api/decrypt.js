// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import { crypt } from "./encrypt";

const decryptArray = (arr) => {
  return JSON.parse(arr).map((x) => {
    const d = crypt(x, "decrypt");
    const [q, w, z] = d.split("-");
    return parseInt(w);
  });
};

export default function handler(req, res) {
  const { arr } = req.query;
  console.log("THIS ARR", arr);
  res.status(200).json({ data: JSON.parse(arr) });
}
