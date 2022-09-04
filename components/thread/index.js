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
import { useComments } from "../../hooks/useComments";
import { Comments } from "../comments";
import { CommentInput } from "../comments/input";
import { DebugTag } from "../debug/tag";
import { Toolbar } from "../toolbar";
export default function Thread({ _id, comments, votes }) {
  const { setVisible, visible } = useComments({
    tid: _id,
    cid: null,
  });

  if (!comments) return <>No Comments</>;

  return (
    <Grid.Container>
      <Grid xs={12}>
        <DebugTag title="thread" value={_id} />
      </Grid>
      <Grid.Container>
        {!visible && (
          <Grid xs={12}>
            <Button color="primary" onClick={() => setVisible(true)}>
              Comment
            </Button>
          </Grid>
        )}
        {visible && <CommentInput tid={_id} cid={null} />}
      </Grid.Container>
      <Grid xs={12}>
        <Comments tid={_id} comments={comments} />
      </Grid>
    </Grid.Container>
  );
}
