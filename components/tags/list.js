import useSWR from "swr";
import { Grid, Container, Text, Card, Spacer } from "@nextui-org/react";

import { fetcher } from "../../utils";
import { BiLineChart } from "react-icons/bi";

export default function Module() {
  const { data } = useSWR(`/b`, fetcher);
  if (!data) return <div>No Data</div>;
  const { rows } = data;
  return (
    <Container gap={0}>
      <Grid.Container>
        <Grid.Container>
          <Grid>
            <Spacer />
            <Spacer />
            <Text h4 weight="bold">
              Top <BiLineChart />
            </Text>
          </Grid>
          {rows.map((tags, i) => {
            return (
              <Grid
                xs={12}
                key={`${i} - leftbar`}
                style={{
                  paddingLeft: 0,
                  paddingRight: 0,
                  paddingTop: 5,
                  paddingBottom: 5,
                }}
              >
                <Card key={i} css={{ padding: 10, width: "100%" }} isPressable>
                  <Text>{tags.name}</Text>
                </Card>
              </Grid>
            );
          })}
        </Grid.Container>
      </Grid.Container>
    </Container>
  );
}
