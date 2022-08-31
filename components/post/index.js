import Link from "next/link";
import dayjs from "dayjs";
import {
  Grid,
  Container,
  Text,
  Row,
  Col,
  Link as NextUiLink,
  Input,
  Card,
  Button,
  Spacer,
} from "@nextui-org/react";
import { BsHeart, BsShareFill, BsFillAwardFill } from "react-icons/bs";
import { FaRegComment } from "react-icons/fa";
import Avatar from "../avatar";
import Thread from "../../components/thread";
const relativeTime = require("dayjs/plugin/relativeTime");
dayjs.extend(relativeTime);

export default function Posts({
  _id,
  title,
  text,
  likes,
  comments,
  createdAt,
  board,
  thread,
  isPressable,
}) {
  return (
    <Card
      css={{ p: "$6" }}
      isPressable={isPressable ? isPressable : false}
      isHoverable={isPressable ? isPressable : false}
    >
      <Card.Header>
        <Avatar />
        <Grid.Container css={{ pl: "$6" }}>
          <Grid css={{ textAlign: "left" }}>
            <small>Post: {_id}</small>
            <Link href={`/b/${board && board._id}`}>
              <Text>
                <small>b/{board && board.name}</small>
              </Text>
            </Link>
            <Link href={`/p/${_id}`}>
              <Text h4 css={{ lineHeight: "$xs" }}>
                {title}
              </Text>
            </Link>
            <Text css={{ color: "$accents8", fontSize: "$xs" }}>
              {dayjs().from(dayjs(createdAt))}
            </Text>
          </Grid>
        </Grid.Container>
      </Card.Header>
      <Card.Body>
        <Text>{text}</Text>
        <Card.Image
          src="https://nextui.org/images/card-example-4.jpeg"
          objectFit="cover"
          width="100%"
          height={220}
          alt="Card image background"
        />
        {thread && (
          <div>
            <Thread {...thread} />
          </div>
        )}
      </Card.Body>
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
