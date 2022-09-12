import { Grid } from "@nextui-org/react";
import { Header } from "./header";
import { Body } from "./body";

export const Comment = (props) => {
  const { comment, tid } = props;
  const cmnt = {
    ...comment,
    tid,
  };
  return (
    <Grid.Container
      style={{
        paddingLeft: 25,
        borderLeft: "1px solid rgba(255,255,255,0.06)",
      }}
    >
      <Header {...cmnt} />
      <Body {...cmnt} />
    </Grid.Container>
  );
};
