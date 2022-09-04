import Button from "@mui/material/Button";
import { Grid, Text, Card } from "@nextui-org/react";
import { useVotes } from "../../hooks/useVotes";
import {
  FaArrowAltCircleUp,
  FaArrowAltCircleDown,
  FaRegComment,
} from "react-icons/fa";
import { BsFillAwardFill, BsHeart } from "react-icons/bs";
import IconButton from "@mui/material/IconButton";
import { DebugTag } from "../debug/tag";
export default function Votes({ _id, count, voted, total }) {
  console.log("Votes", _id, count, voted, total);
  const { vote } = useVotes();
  const size = "26";
  return (
    <Grid.Container>
      <Grid xs={12}>
        <DebugTag title="votes" value={_id} />
      </Grid>
      <Grid.Container
        xs={4}
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
                style={{ color: voted && "red" }}
              />
            </Text>
          </IconButton>
        </Grid>
        <Grid>
          <Text
            h3
            // size={size * 0.5 || 20}
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
    </Grid.Container>
  );
}
