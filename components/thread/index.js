import { useState } from "react";
import {
  Card,
  Container,
  Col,
  Textarea,
  Grid,
  Text,
  Row,
  Button,
} from "@nextui-org/react";
import dayjs from "dayjs";
import VoteCard from "../votes";

const Comment = ({ comment }) => {
  const [reply, setReply] = useState(false);

  const { _id, text, author, votes, replys, createdAt } = comment;
  return (
    <Row xs={12}>
      <Col xs={12}>
        <Card>
          <Text>{text}</Text>
          {reply && (
            <Textarea
              placeholder="Write something ..."
              rows={2}
              css={{ w: "100%" }}
              bordered
            />
          )}
          <Text
            size={15}
            onClick={() => setReply(!reply)}
            css={{ color: "$accents6" }}
          >
            Reply
          </Text>
          <VoteCard votes={votes} size={12} />
          <Text size={10} css={{ color: "$accents6" }}>
            by: {author.username}
          </Text>
          <Text size={10} css={{ color: "$accents6" }}>
            Date: {`${dayjs(createdAt || dayjs()).fromNow()}`}
          </Text>
          {replys && (
            <Container>
              <Comments comments={replys} />
            </Container>
          )}
        </Card>
      </Col>
    </Row>
  );
};

const Comments = ({ comments }) => {
  if (!comments) return null;
  const { rows, page, pageSize, total } = comments;
  if (!rows) return null;
  return (
    <Container gap={2}>
      {rows &&
        rows.map((comment) => <Comment key={comment._id} comment={comment} />)}
    </Container>
  );
};

export default function Thread({ _id, comments, votes }) {
  console.log("Thread", _id, comments, votes);

  const [commenting, setCommenting] = useState(false);
  const [comment, setComment] = useState("");

  if (!comments) return <>No Comments</>;

  const handleSaveComment = (e) => {
    console.log("Handling Save Comment", e.target, comment);
    setCommenting(false);
    setComment("");
  };

  const handleChangeComment = (e) => {
    console.log("Handling Change Comment", e.target, comment);
    setComment(e.target.value);
  };
  return (
    <Grid.Container>
      <Grid xs={12}>
        <Text size={10} css={{ color: "$accents6" }}>
          Thread: {_id}
        </Text>
      </Grid>
      <Grid.Container>
        {!commenting && (
          <Grid xs={12}>
            <Button color="primary" onClick={() => setCommenting(true)}>
              Comment
            </Button>
          </Grid>
        )}
        {commenting && (
          <Grid.Container xs={12} gap={2}>
            <Grid xs={12}>
              <Textarea
                placeholder="Write something ..."
                rows={4}
                css={{ w: "100%" }}
                bordered
                onChange={handleChangeComment}
              />
            </Grid>
            <Grid.Container xs={12} gap={1}>
              <Grid>
                <Button color="secondary" onPress={() => setCommenting(false)}>
                  Cancel
                </Button>
              </Grid>
              <Grid>
                <Button onPress={handleSaveComment}>Send</Button>
              </Grid>
            </Grid.Container>
          </Grid.Container>
        )}
      </Grid.Container>
      <Grid xs={12}>
        <Comments comments={comments} />
      </Grid>
    </Grid.Container>
  );
}
