import {
  Grid,
  Container,
  Text,
  Row,
  Col,
  Link as NextUiLink,
  Avatar,
  Input,
  Card,
  Button,
  Spacer,
} from "@nextui-org/react";
import { FaRegComment } from "react-icons/fa";
import { BsHeart, BsShareFill, BsFillAwardFill } from "react-icons/bs";
import Link from "next/link";
import dayjs from "dayjs";

const relativeTime = require("dayjs/plugin/relativeTime");
dayjs.extend(relativeTime);

export default function Posts({ title, body, likes, comments, createdAt }) {
  const nameUsers = ["1", "2", "3", "5"];
  return (
    <Card css={{ p: "$6" }} isPressable isHoverable>
      <Card.Header>
        <Link href="/u/userID">
          <Avatar
            squared
            src="https://i.pravatar.cc/150?u=a042581f4e29026024d"
            width="34px"
            height="34px"
          />
        </Link>
        <Grid.Container css={{ pl: "$6" }}>
          <Grid xs={12}>
            <Grid.Container>
              <Grid>
                <Link href="/b/boardId">
                  <Text>
                    <small>b/sdflkm</small>
                  </Text>
                </Link>
                <Link href="/p/postId">
                  <Text h4 css={{ lineHeight: "$xs" }}>
                    {title}
                  </Text>
                </Link>
              </Grid>
            </Grid.Container>
            <Spacer />
            <Avatar.Group count={12}>
              {nameUsers.map((name, index) => (
                <Avatar
                  key={index}
                  size="xs"
                  pointer
                  stacked
                  icon={<BsFillAwardFill color="gold" />}
                />
              ))}
            </Avatar.Group>
          </Grid>
          <Grid xs={12}>
            <Text css={{ color: "$accents8" }}>
              {dayjs().from(dayjs(createdAt))}
            </Text>
          </Grid>
        </Grid.Container>
      </Card.Header>
      <Card.Body css={{ py: "$2" }}>
        <Text>{body}</Text>
      </Card.Body>
      <Card.Image
        src="https://nextui.org/images/card-example-4.jpeg"
        objectFit="cover"
        width="100%"
        height={340}
        alt="Card image background"
      />
      <Card.Footer>
        <Button.Group color="outline" size="sm" light>
          <Button icon={<BsFillAwardFill />}>{``}</Button>
          <Button icon={<FaRegComment />}>
            {``}
            {likes}
          </Button>
          <Button icon={<BsHeart />}>
            {``}
            {comments}
          </Button>
          <Button icon={<BsShareFill />}>{``}</Button>
        </Button.Group>
      </Card.Footer>
    </Card>
  );
}
