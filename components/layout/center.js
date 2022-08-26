import {
  Grid,
  Container,
  Text,
  Row,
  Button,
  Col,
  Link,
  Card,
  Spacer,
} from "@nextui-org/react";

import { List, ListItem, ListItemButton } from "@mui/material";
import { Pagination, Textarea } from "@nextui-org/react";
import { BsChatText, BsFillChatTextFill } from "react-icons/bs";
// import { IoFlameSharp } from "react-icons/io";
// import { AiOutlineHistory } from "react-icons/ai";
import { BiTrendingUp } from "react-icons/bi";
import { FaPepperHot } from "react-icons/fa";
import Post from "../post";
import Input from "../input";
export default function Content({ posts, tags }) {
  if (!posts) return null;
  return (
    <Container gap={1} style={{ padding: 0 }} align="center">
      <Grid.Container>
        <Grid xs={12} align="flex-end" justify="flex-end">
          <Button.Group light>
            <Button icon={<FaPepperHot />}>Hot</Button>
            <Button icon={<BiTrendingUp />}>Trending</Button>
          </Button.Group>
        </Grid>
        <Grid xs={12} css={{ padding: 15 }}>
          <Input />
        </Grid>
      </Grid.Container>
      <Grid.Container>
        <Grid>
          <List>
            {posts.map((post, i) => {
              return (
                <ListItem xs={12} key={i}>
                  <Post {...post} />
                </ListItem>
              );
            })}
          </List>
          <Pagination loop color="success" total={10} initialPage={6} />
        </Grid>
      </Grid.Container>
    </Container>
  );
}
