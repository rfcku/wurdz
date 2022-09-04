import { useState } from "react";

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
  Navbar,
} from "@nextui-org/react";
import { BsHeart, BsShareFill, BsFillAwardFill } from "react-icons/bs";
import { FaRegComment } from "react-icons/fa";
import Avatar from "../avatar";
import Thread from "../../components/thread";
import Votes from "../votes";
import usePost from "../../hooks/usePost";
import Debugger from "../debug";
import Linkify from "linkify-react";
import { DebugTag } from "../debug/tag";
import { Toolbar } from "../toolbar";

import "linkify-plugin-hashtag";
import "linkify-plugin-mention";

const relativeTime = require("dayjs/plugin/relativeTime");
dayjs.extend(relativeTime);

const content = "For help with GitHub.com, please email support@github.com";

const linkProps = {
  onClick: (event) => {
    if (!confirm("Are you sure you want to leave this page?")) {
      event.preventDefault();
    }
  },
};

const options = {
  defaultProtocol: "https",
  formatHref: {
    hashtag: (href) => "https://twitter.com/hashtag/" + href.substr(1),
    mention: (href) => "https://example.com/profiles" + href,
  },
};
export default function Posts({
  _id,
  title,
  text,
  votes,
  comments,
  createdAt,
  board,
  thread,
  isPressable,
}) {
  const [reply, setReply] = useState(false);

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
            <Debugger body={{ _id, title, text, votes }} title={"Post"} />
            <DebugTag title="post" value={_id} />
            <Link href={`/b/${board && board._id}`}>
              <Text style={{ cursor: "pointer" }}>
                <small>b/{board && board.name}</small>
              </Text>
            </Link>
            <Link href={`/p/${_id}`}>
              <Text
                h4
                css={{ lineHeight: "$xs" }}
                style={{ cursor: "pointer" }}
              >
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
        <Linkify tagName="p" options={{ options, attributes: linkProps }}>
          "@rfcku Works with hashtags #PhotoOfTheDay or #일상"{content}
          {""}
          {text}
        </Linkify>
        <Card.Image
          src="https://nextui.org/images/card-example-4.jpeg"
          objectFit="cover"
          width="100%"
          height={220}
          alt="Card image background"
        />
        <Grid.Container>
          <Grid xs={12}>
            <Toolbar
              votes={votes}
              reply={reply}
              setReply={setReply}
              size={14}
            />
          </Grid>
        </Grid.Container>
        {thread && (
          <div>
            <Thread {...thread} />
          </div>
        )}
      </Card.Body>
      <Card.Footer>
        <Votes {...votes} />
        <Button.Group color="outline" size="sm" light>
          <Button icon={<BsFillAwardFill />}>{``}</Button>
          <Button icon={<FaRegComment />}>
            {``}
            {votes && votes.count}
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
