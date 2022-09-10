import { Card, Grid } from "@nextui-org/react";
import { Input } from "../comments/input";
import { TextTags } from "../tags/textTags";
import { Toolbar } from "../toolbar";
import { Comments } from "./index";
import { useComments } from "../../hooks/useComments";

export const Body = (comment) => {
  const { tid, cid, _id, text, votes, replies } = comment;

  const {
    showInput,
    toggleInput,
    visible: input,
  } = useComments({
    tid,
    cid,
  });

  return (
    <Grid.Container>
      <Card variant="flat">
        <TextTags text={text} />
      </Card>
      <Toolbar
        votes={votes}
        actions={{
          comments: {
            onClick: toggleInput,
          },
        }}
        size={12}
        title={"comment toolbar"}
        isComment
      />
      {input && <Input tid={tid} cid={_id} setVisible={showInput} />}
      {replies && <Comments tid={tid} comments={replies} />}
    </Grid.Container>
  );
};
