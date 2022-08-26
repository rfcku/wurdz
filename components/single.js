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
export default function Content({ post }) {
  if (!post) return null;
  return (
    <Container gap={1} style={{ padding: 0 }} align="center">
      <Grid.Container>
        <Grid>
          <Post {...post} />
        </Grid>
      </Grid.Container>
    </Container>
  );
}
