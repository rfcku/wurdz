import { Container } from "@nextui-org/react";
import { List, ListItem } from "@mui/material";
import Post from "../post";
import useSWR from "swr";
import axios from "../../utils";

export default function Module() {
  const populate = ["comments", "board", "author", "votes"];
  const { data, error } = useSWR(`/p?populate=${populate.join(",")}`, axios);
  if (!data) return <div>No Data</div>;
  const { rows, total, page, pageSize, totalPages } = data;
  return (
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
  );
}
