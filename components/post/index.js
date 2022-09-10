import { useState } from "react";
import { Card } from "@nextui-org/react";
import { useRouter } from "next/router";

import { Divider } from "@mui/material";
import Thread from "../../components/thread";
import { Toolbar } from "../toolbar";
import { TextTags } from "../tags/textTags";
import { Header } from "./header";
import { useComments } from "../../hooks/useComments";

export default function Posts(post) {
  const { _id, body, votes, comments, thread, isPressable, isHoverable } = post;

  const { visible: input, toggleInput } = useComments({ tid: thread });
  const router = useRouter();

  return (
    <Card
      css={{ p: "$6" }}
      isPressable={isPressable !== undefined ? isPressable : true}
      isHoverable={isHoverable !== undefined ? isHoverable : false}
      onPress={(e) => {
        return router.push(`/p/${_id}`);
      }}
    >
      <Card.Header>
        <Header {...post} />
      </Card.Header>
      <Card.Body style={{ paddingTop: 0 }}>
        <TextTags text={body} />
        <div style={{ width: "100%", paddingTop: 10 }}>
          <Divider style={{ background: "rgba(255,255,255,0.04)" }} />
        </div>
        <Toolbar
          votes={votes}
          size={12}
          comments={comments}
          isComment={false}
          title={"main toolbar"}
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
