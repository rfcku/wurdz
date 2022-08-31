// import { faker } from "@faker-js/faker";
import API_URL from "..";
export default async function handler(req, res) {
  const populates = ["author", "votes", "board", "thread"];
  const { id } = req.query;
  const posts = await fetch(
    `${API_URL}/p/${id}?populate=${populates.join(",")}`
  ).then((res) => res.json());
  return res.status(200).json({ data: posts });
}
