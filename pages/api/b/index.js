import { faker } from "@faker-js/faker";

export default function handler(req, res) {
  const boards = Array.from({ length: 5 }).map((i) => {
    return {
      title: `${faker.random.word()}`,
      description: faker.random.word(),
    };
  });

  return res.status(200).json({ data: boards });
}
