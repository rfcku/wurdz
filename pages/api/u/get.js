import { faker } from "@faker-js/faker";

export default function get(req, res) {
  console.log("Getting Users");
  const tags = Array.from({ length: 7 }).map((i) => {
    return {
      title: `#${faker.random.word()}`,
    };
  });
}
