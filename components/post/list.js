import { List, ListItem } from "@mui/material";
import { Container } from "@nextui-org/react";
import useSWR from "swr";
import api from "../../utils";
import Post from "../post";

export default function Module({ data }) {
  console.log("data", data);
  if (!data) return null;
  return (
    <Container gap={1} style={{ padding: 50 }}>
      <List>
        {data &&
          data.rows &&
          data.rows.map((post, i) => {
            return (
              <ListItem xs={12} key={i}>
                <Post {...post} />
              </ListItem>
            );
          })}
      </List>
    </Container>
  );
}
