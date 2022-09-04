import { useState } from "react";
import {
  Card,
  Container,
  Grid,
  Text,
  Collapse,
  Avatar,
} from "@nextui-org/react";
import Link from "next/link";
import dayjs from "dayjs";
import { TiArrowDownOutline, TiArrowUpOutline } from "react-icons/ti";
import { CommentInput } from "../comments/input";
import { DebugTag } from "../debug/tag";
import { useVotes } from "../../hooks/useVotes";
import { TextTags } from "../tags/textTags";
import { Toolbar } from "../toolbar";
export const Comment = ({ tid, comment }) => {
  const [reply, setReply] = useState(false);
  const { _id, text, author, votes, replies, createdAt } = comment;
  return (
    <Collapse
      expanded
      title={
        <div
          style={{
            width: "160px",
            display: "flex",
            flexDirection: "row",
            alignContent: "center",
            alignItems: "center",
          }}
        >
          <Text size={12} css={{ color: "$accents6" }}>
            u/{author.username}
          </Text>
          <Text size={10} css={{ color: "$accents6" }}>
            {`${dayjs(createdAt || dayjs()).fromNow()}`}
          </Text>
        </div>
      }
      contentLeft={<Avatar squared size="xs" text="u" label="" />}
    >
      <Grid.Container xs={12}>
        {/* <Grid xs={12} direction="row">
          <hr />
          <Grid.Container gap={1}>
            <Grid>
              <Avatar squared size="xs" text="u" label="" />
            </Grid>
            <Grid>
              <Link href={`/b/${author.username}`}>
                <Text size={12} css={{ color: "$accents6" }}>
                  {author.username}
                </Text>
              </Link>
            </Grid>
            <Grid>
              <Text size={14} css={{ color: "$accents6" }}>
                {`${dayjs(createdAt || dayjs()).fromNow()}`}
              </Text>
            </Grid>
          </Grid.Container>
        </Grid> */}
        <Grid.Container>
          <Grid xs={12}>
            <Card variant="flat">
              <TextTags text={text} />
            </Card>
          </Grid>
          <Grid xs={12} direction="column">
            <DebugTag title="comment" value={_id} />
            <DebugTag title="votes" value={votes._id} />
            <DebugTag title="voted" value={votes.voted} />
          </Grid>
          <Toolbar votes={votes} reply={reply} setReply={setReply} size={12} />

          {reply && (
            <CommentInput tid={tid} cid={_id} />
            // <Grid.Container xs={12}>
            //   <Textarea
            //     placeholder="Write something ..."
            //     rows={2}
            //     css={{ w: "100%" }}
            //     bordered
            //     ariaLabel="write something"
            //   />
            // </Grid.Container>
          )}
          <Grid.Container>
            {replies && (
              <Collapse.Group>
                <Container
                  style={{
                    paddingLeft: 15,
                    borderLeft: `${
                      replies && "1px solid rgba(255,255,255,0.2)"
                    }`,
                  }}
                >
                  <Comments tid={tid} comments={replies} />
                </Container>
              </Collapse.Group>
            )}
          </Grid.Container>
        </Grid.Container>
      </Grid.Container>
    </Collapse>
  );
};

export const Comments = ({ tid, comments }) => {
  if (!comments) return null;
  const { rows, page, pageSize, total } = comments;
  if (!rows) return null;
  return (
    <Container gap={2}>
      <Collapse.Group borderWeight="light" className="post-comment-collapse">
        {rows &&
          rows.map((comment) => (
            <Comment key={comment._id} tid={tid} comment={comment} />
          ))}
      </Collapse.Group>
    </Container>
  );
};
