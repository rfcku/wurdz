import { Grid, Avatar, Container, Text, Card } from "@nextui-org/react";
import { Navbar } from "../../components/layout";
import { fetcher } from "../../utils";

export default function Home({ user, posts }) {
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
    </Container>
  );
}

export async function getServerSideProps() {
  const user = await fetcher("/u/get");

  return {
    props: {
      visits: 0,
      user: user[0],
    },
  };
}
