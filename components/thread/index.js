import { Grid } from "@nextui-org/react";
import { Comments } from "../comments";

export default function Thread({ _id, comments }) {
  if (!comments) return null;
  return (
    <Grid.Container>
      <Comments tid={_id} comments={comments} />
    </Grid.Container>
  );
}
