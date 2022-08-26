import { faker } from "@faker-js/faker";

export default function get(req, res) {
  const tags = Array.from({ length: 7 }).map((i) => {
    return {
      title: `#${faker.random.word()}`,
    };
  });

  return res.status(200).json({ data: tags });
}
