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
import { DebugTag } from "../debug/tag";
import { useComments } from "../../hooks/useComments";
export const CommentInput = ({ tid, cid }) => {
  const { save, text, onChange, setVisible } = useComments({
    tid,
    cid,
  });

  return (
    <Grid.Container xs={12} gap={2}>
      <Grid xs={12}>
        <Textarea
          placeholder="Write something ..."
          rows={4}
          css={{ w: "100%" }}
          bordered
          onChange={onChange}
          value={text}
        />
      </Grid>
      <Grid>
        <DebugTag title="tid" value={tid} />
        <DebugTag title="cid" value={cid} />
      </Grid>
      <Grid.Container xs={12} gap={1} alignContent="center">
        <Grid>
          <Button size="sm" color="secondary" onClick={() => setVisible(false)}>
            Cancel
          </Button>
        </Grid>
        <Grid>
          <Button size="sm" color={"gradient"} onClick={save}>
            Send
          </Button>
        </Grid>
      </Grid.Container>
    </Grid.Container>
  );
};
