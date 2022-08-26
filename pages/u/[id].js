import { useState, useEffect } from "react";
import useSwr from "swr";
import { useSession } from "next-auth/react";
import Image from "next/image";
import {
  Grid,
  Avatar,
  Container,
  Text,
  Row,
  Card,
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

export default function Home({ user, posts }) {
  //   const alert = useAlert();
  console.log("USERS", user);
  if (!user) return null;
  return (
    <Container>
      <Grid.Container gap={2}>
        <Grid xs={12}>
          <Navbar />
        </Grid>
      </Grid.Container>
      <Grid.Container gap={2}>
        <Card>
          <Card.Body>
            <Grid
              xs={12}
              align="center"
              justify="center"
              alignContent="center"
              alignItems="center"
            >
              <Avatar
                src="https://i.pravatar.cc/150?u=a04258114e29026702d"
                css={{ size: "$30" }}
              />
            </Grid>
            <Grid
              xs={12}
              align="center"
              justify="center"
              alignContent="center"
              alignItems="center"
              direction="column"
            >
              <Text h2>@{user.username}</Text>
            </Grid>
          </Card.Body>
        </Card>
      </Grid.Container>
      <Grid.Container gap={2}></Grid.Container>
    </Container>
  );
}

export async function getServerSideProps() {
  console.log("THIS WAS CALLED");
  const posts = Array.from({ length: 5 }).map((i) => {
    return {
      title: faker.lorem.words(),
      body: faker.lorem.paragraphs(3),
      likes: faker.random.numeric(),
      comments: faker.random.numeric(),
      createdAt: faker.date.between().toString(),
    };
  });

  const user = Array.from({ length: 1 }).map((i) => {
    return {
      id: 1,
      name: faker.name.findName(),
      username: "bret",
      email: "Sincere@april.biz",
      website: "hildegard.org",
    };
  });

  return {
    props: {
      visits: 0,
      user: user[0],
      posts,
    },
  };
}
