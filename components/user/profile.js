import { Grid, Text, Avatar } from "@nextui-org/react";

import api from "../../utils";
import useSWR from "swr";

export default function Profile({ id }) {
  const populates = ["author", "votes", "board", "thread", "comments"];
  const { data, error } = useSWR(
    `/u/${id}?populate=${populates.join(",")}`,
    api.get
  );
  if (!data) return null;
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
