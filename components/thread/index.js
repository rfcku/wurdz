import { Grid } from "@nextui-org/react";
import { Comments } from "../comments";

export default function Thread({ _id, comments, votes }) {
  if (!comments) return <>No thread</>;

  return (
    <Grid.Container>
      <Comments tid={_id} comments={comments} />
    </Grid.Container>
  );
}
