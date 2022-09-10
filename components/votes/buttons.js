import { Grid, Text } from "@nextui-org/react";
import { IconButton } from "@mui/material";
import { useVotes } from "../../hooks/useVotes";
import { TiArrowDownOutline, TiArrowUpOutline } from "react-icons/ti";

export const VoteButtons = ({ size, votes }) => {
  if (!votes) return null;
  const { vote } = useVotes();
  const { _id, count } = votes;
  return (
    <Grid.Container direction="row">
      <IconButton size="small" color="success">
        <TiArrowUpOutline onClick={() => vote(_id, true)} />
      </IconButton>
      <div
        style={{
          display: "flex",
          flexGrow: 1,
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Text size={size || 10} css={{ color: "$accents8" }}>
          <b>&nbsp;{(count && count) || "Vote"}&nbsp;</b>
        </Text>
      </div>
      <IconButton size="small" color="primary">
        <TiArrowDownOutline onClick={() => vote(_id, false)} />
      </IconButton>
    </Grid.Container>
  );
};
