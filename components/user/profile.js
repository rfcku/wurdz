import { Grid, Text, Avatar } from "@nextui-org/react";

import axios from "../../utils";
import useSWR from "swr";

export default function Profile({ id }) {
  const populates = ["author", "votes", "board", "thread", "comments"];
  const { data, error } = useSWR(
    `/u/${id}?populate=${populates.join(",")}`,
    axios
  );

  const { createdAt, email, imageUrl, username } = data;
  console.log("User Data", data);
  return (
    <Grid.Container>
      <Avatar size="xl" />
      <Grid>
        <Text>@{username}</Text>
      </Grid>
    </Grid.Container>
  );
}
