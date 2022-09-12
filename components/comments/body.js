import { Card, Grid } from "@nextui-org/react";
import { Input } from "../comments/input";
import { TextTags } from "../tags/textTags";
import { Toolbar } from "../toolbar";
import { Comments } from "./index";
import { useComments } from "../../hooks/useComments";

export const Body = (comment) => {
  const { tid, cid, _id, text, votes, replies } = comment;

  const {
    toggleInput,
    visible: input,
    value,
    onChange,
    save,
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
      {input && (
        <Input
          tid={tid}
          cid={_id}
          value={value}
          cancel={toggleInput}
          save={save}
          onChange={onChange}
        />
      )}
      {replies && <Comments tid={tid} comments={replies} />}
    </Grid.Container>
  );
};
