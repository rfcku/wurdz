import { Grid, Container } from "@nextui-org/react";
import { Right, Left, Center, Navbar } from "../../components/layout";

import { fetcher } from "../../utils";
export default function Home({ posts, tags, boards }) {
  if (!posts) return null;
  return (
    <Container>
      <Grid.Container gap={2}>
        <Grid xs={12}>
          <Navbar />
        </Grid>
      </Grid.Container>
      <Grid.Container gap={2}>
        <Grid xs={2}>
          <Left tags={tags} />
        </Grid>
        <Grid xs={8}>
          <Center posts={posts} />
        </Grid>
        <Grid xs={2}>
          <Right boards={boards} />
        </Grid>
      </Grid.Container>
    </Container>
  );
}

export async function getServerSideProps() {
  const posts = await fetcher("/p");
  const tags = await fetcher("/t");
  const boards = await fetcher("/b");

  return {
    props: {
      visits: 0,
      tags,
      posts,
      boards,
    },
  };
}
