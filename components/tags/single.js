import { Grid, Container, Text, Card, User, Spacer } from "@nextui-org/react";
import Link from "next/link";
import useSWR from "swr";
import { fetcher } from "../../utils";
import { CgCommunity } from "react-icons/cg";

export default function Sidebar() {
  const { data } = useSWR(`/b/`, fetcher);
  if (!data) return <div>No Data</div>;
  return (
    <Container gap={0}>
      <Grid.Container>
        <Grid>
          <Spacer />
          <Spacer />
          <Text h3>
            <CgCommunity /> tags
          </Text>
        </Grid>
        <Grid.Container>
          {data &&
            data.rows &&
            data.rows.map((board, i) => {
              return (
                <Grid
                  xs={12}
                  key={`${i}-rightbar`}
                  style={{
                    paddingLeft: 0,
                    paddingRight: 0,
                    paddingTop: 5,
                    paddingBottom: 5,
                  }}
                >
                  <Card css={{ padding: 10 }} isHoverable isPressable>
                    <Link href={`/b/${board.name}`}>
                      <User
                        // bordered
                        as="button"
                        size="sm"
                        color="primary"
                        name={<Text weight="bold">{`b/${board.name}`}</Text>}
                        description={board.description}
                        src="https://i.pravatar.cc/150?u=a042581f4e29026024d"
                      />
                    </Link>
                  </Card>
                </Grid>
              );
            })}
        </Grid.Container>
      </Grid.Container>
    </Container>
  );
}
