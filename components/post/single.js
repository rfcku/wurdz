import { Container } from "@nextui-org/react";
import { useRouter } from "next/router";
import axios from "../../utils";
import useSWR from "swr";
import Post from ".";

export default function Content() {
  const router = useRouter();
  const { id } = router.query;
  const populates = ["author", "votes", "board", "thread", "comments"];
  const { data, error } = useSWR(
    `/p/${id}?populate=${populates.join(",")}`,
    axios
  );
  console.log("THIS DATA", data);
  if (!data) return <div>No Data</div>;
  return (
    <Container gap={1} style={{ padding: 0 }} align="center">
      <Post {...data} isPressable={false} />
    </Container>
  );
}
