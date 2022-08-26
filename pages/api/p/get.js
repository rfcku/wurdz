import { faker } from "@faker-js/faker";

export default function get(req, res) {
  const posts = Array.from({ length: 5 }).map((i) => {
    return {
      title: faker.lorem.words(),
      body: faker.lorem.paragraphs(3),
      likes: faker.random.numeric(),
      comments: faker.random.numeric(),
      createdAt: faker.date.between().toString(),
    };
  });
  return res.status(200).json({ data: posts });
}
