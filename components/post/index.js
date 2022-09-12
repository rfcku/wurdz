import { useState } from "react";
import { Card } from "@nextui-org/react";
import { useRouter } from "next/router";

import { Divider } from "@mui/material";
import Thread from "../../components/thread";
import { Toolbar } from "../toolbar";
import { TextTags } from "../tags/textTags";
import { Header } from "./header";
import { useComments } from "../../hooks/useComments";
import { Input } from "../comments/input";
export default function Posts(post) {
  const { _id, body, votes, comments, thread, isPressable, isHoverable } = post;

  const router = useRouter();
  const { query } = router;
  const {
    visible: input,
    toggleInput,
    save,
    value,
    onChange,
  } = useComments({
    tid: thread && thread._id,
    defaults: {
      visible: query && query.c,
    },
  });

  return (
    <Card
      css={{ p: "$6" }}
      isPressable={isPressable !== undefined ? isPressable : true}
      isHoverable={isHoverable !== undefined ? isHoverable : false}
      onPress={(e) => {
        return router.push(`/p/${_id}?c=true`);
      }}
    >
      <Card.Header>
        <Header {...post} />
      </Card.Header>
      <Card.Body style={{ paddingTop: 0 }}>
        <TextTags text={body} />
        {input && (
          <Input
            value={value}
            save={save}
            cancel={toggleInput}
            onChange={onChange}
          />
        )}
        <div style={{ width: "100%", paddingTop: 10 }}>
          <Divider style={{ background: "rgba(255,255,255,0.04)" }} />
        </div>
        <Toolbar
          votes={votes}
          size={12}
          comments={comments}
          isComment={false}
          actions={{
            comments: {
              onClick: toggleInput,
            },
          }}
        />
        {thread && <Thread {...thread} />}
      </Card.Body>
    </Card>
  );
}
