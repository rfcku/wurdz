import { useState, useEffect } from "react";
import useSwr from "swr";
import { useSession } from "next-auth/react";
import Image from "next/image";
import {
  Grid,
  Container,
  Text,
  Row,
  Col,
  Link,
  Input,
  Spacer,
} from "@nextui-org/react";
import dayjs from "dayjs";
import { useAlert } from "react-alert";
import {
  RightBar,
  LeftBar,
  Single as Content,
  Navbar,
} from "../../components/layout";
import { PostAdd } from "@mui/icons-material";
import { faker } from "@faker-js/faker";
export const fetcher = (url) => fetch(`${url}`).then((res) => res.json());

export default function Home({ post, tags, boards }) {
  const alert = useAlert();
  if (!post) return null;
  return (
    <Container>
      <Grid.Container gap={2}>
        <Grid xs={12}>
          <Navbar />
        </Grid>
      </Grid.Container>
      <Grid.Container gap={2}>
        <Grid xs={2}>
          <LeftBar tags={tags} />
        </Grid>
        <Grid xs={8}>
          <Content post={post} />
        </Grid>
        <Grid xs={2}>
          <RightBar boards={boards} />
        </Grid>
      </Grid.Container>
    </Container>
  );
}

export async function getServerSideProps() {
  const posts = Array.from({ length: 1 }).map((i) => {
    return {
      title: faker.lorem.words(),
      body: faker.lorem.paragraphs(3),
      likes: faker.random.numeric(),
      comments: faker.random.numeric(),
      createdAt: faker.date.between().toString(),
    };
  });

  const tags = Array.from({ length: 7 }).map((i) => {
    return {
      title: `#${faker.random.word()}`,
    };
  });

  const boards = Array.from({ length: 5 }).map((i) => {
    return {
      title: `${faker.random.word()}`,
      description: faker.random.word(),
    };
  });

  return {
    props: {
      visits: 0,
      tags,
      post: posts[0],
      boards,
    },
  };
}
