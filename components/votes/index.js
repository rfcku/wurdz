import { Grid, Text } from "@nextui-org/react";
import { useVotes } from "../../hooks/useVotes";
import { FaArrowAltCircleUp, FaArrowAltCircleDown } from "react-icons/fa";
import IconButton from "@mui/material/IconButton";
export default function Votes({ _id, count, voted, total }) {
  const { vote } = useVotes();
  const size = "26";
  return (
    <Grid.Container
      align="center"
      justify="center"
      alignContent="center"
      justifyContent="center"
    >
      <Grid>
        <IconButton onClick={() => vote(_id, true)}>
          <Text>
            <FaArrowAltCircleUp
              size={size || 20}
              style={{ color: voted && "gray" }}
            />
          </Text>
        </IconButton>
      </Grid>
      <Grid>
        <Text
          h3
          weight="bold"
          align="center"
          justify="center"
          alignContent="center"
          justifyContent="center"
        >
          {count}
        </Text>
      </Grid>
      <Grid>
        <IconButton onClick={() => vote(_id, false)}>
          <Text>
            <FaArrowAltCircleDown size={size || 20} />
          </Text>
        </IconButton>
      </Grid>
    </Grid.Container>
  );
}
