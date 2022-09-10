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
    <Grid.Container>
      <Header {...cmnt} />
      <Body {...cmnt} />
    </Grid.Container>
  );
};
