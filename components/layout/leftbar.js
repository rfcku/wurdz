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
import { faker } from "@faker-js/faker";
import { BsHeart } from "react-icons/bs";
import { BiLineChart } from "react-icons/bi";
export default function Sidebar({ tags }) {
  return (
    <Container fluid gap={0} style={{ padding: 0 }} isPressable isHoverable>
      <Text h4 weight="bold">
        Top <BiLineChart />
      </Text>
      {tags.map((board, i) => {
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
            <Card key={i} css={{ padding: 10 }} isPressable>
              <Text>{board.title}</Text>
            </Card>
          </Grid>
        );
      })}
    </Container>
  );
}
