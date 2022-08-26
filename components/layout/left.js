import {
  Grid,
  Container,
  Text,
  Row,
  Col,
  Link,
  Input,
  Card,
  Spacer,
} from "@nextui-org/react";
import AutoComplete from "../autocomplete";

import { BsHeart } from "react-icons/bs";
import { BiLineChart } from "react-icons/bi";
export default function Module({ tags }) {
  return (
    <Container gap={0}>
      <Grid.Container>
        <Grid
          xs={12}
          justify="flex-start"
          alignItems="center"
          alignContent="center"
        >
          <Text h1>wurdz</Text>
        </Grid>
        <Grid.Container>
          <Grid>
            <Spacer />
            <Spacer />
            <Text h4 weight="bold">
              Top <BiLineChart />
            </Text>
          </Grid>
          {tags.map((tags, i) => {
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
                  <Text>{tags.title}</Text>
                </Card>
              </Grid>
            );
          })}
        </Grid.Container>
      </Grid.Container>
    </Container>
  );
}
