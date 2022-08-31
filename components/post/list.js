import { Container } from "@nextui-org/react";
import { List, ListItem } from "@mui/material";
import Post from "../post";
import useSWR from "swr";
import { fetcher } from "../../utils";

export default function Module() {
  const { data, error } = useSWR("/p", fetcher);
  if (!data) return <div>No Data</div>;
  const { rows, total, page, pageSize, totalPages } = data;
  return (
    <Container align="center">
      {error && <div>Error</div>}
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
