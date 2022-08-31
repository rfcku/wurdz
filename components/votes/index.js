import { Grid, Text } from "@nextui-org/react";
import { FaArrowAltCircleUp, FaArrowAltCircleDown } from "react-icons/fa";

export default function VoteCard({ votes, size }) {
  const { count } = votes;
  return (
    <Grid.Container ga={2}>
      <Grid xs={12} gap={3}>
        <FaArrowAltCircleUp size={size || 26} />
        <Text size={size || 24}>{count}</Text>
        <FaArrowAltCircleDown size={size || 26} />
      </Grid>
    </Grid.Container>
  );
}
