import { Card, Container, Grid, Text, Avatar } from "@nextui-org/react";
import { IconButton, Button } from "@mui/material";
import { useVotes } from "../hooks/useVotes";
import { TiArrowDownOutline, TiArrowUpOutline } from "react-icons/ti";

export const Toolbar = ({ size, votes, reply, setReply }) => {
  const { vote } = useVotes();
  return (
    <Grid.Container xs={12} gap={1}>
      <Grid>
        <Grid.Container direction="row">
          <IconButton size="medium" color="error">
            <TiArrowUpOutline onClick={() => vote(votes._id, true)} />
          </IconButton>
          <div
            style={{
              display: "flex",
              flexGrow: 1,
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <Text size={size || 12} css={{ color: "$accents8" }}>
              <b>&nbsp;{(votes && votes.count) || "Vote"}&nbsp;</b>
            </Text>
          </div>
          <IconButton size="medium" color="primary">
            <TiArrowDownOutline onClick={() => vote(votes._id, false)} />
          </IconButton>
        </Grid.Container>
      </Grid>
      <Grid>
        <Button onClick={() => setReply(!reply)} size="large">
          <Text size={size || 12} css={{ color: "$accents6" }}>
            Reply
          </Text>
        </Button>
      </Grid>
      <Grid>
        <Button onClick={() => setReply(!reply)} size="large">
          <Text size={size || 12} css={{ color: "$accents6" }}>
            Share
          </Text>
        </Button>
      </Grid>
      <Grid>
        <Button onClick={() => setReply(!reply)} size="large">
          <Text size={size || 12} css={{ color: "$accents6" }}>
            Report
          </Text>
        </Button>
      </Grid>
      <Grid>
        <Button onClick={() => setReply(!reply)} size="large">
          <Text size={size || 12} css={{ color: "$accents6" }}>
            Save
          </Text>
        </Button>
      </Grid>
      <Grid>
        <Button onClick={() => setReply(!reply)} size="large">
          <Text size={size} css={{ color: "$accents6" }}>
            Follow
          </Text>
        </Button>
      </Grid>
    </Grid.Container>
  );
};
export default Toolbar;
