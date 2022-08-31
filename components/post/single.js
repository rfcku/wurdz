import { Container } from "@nextui-org/react";
import { useRouter } from "next/router";
import { fetcher } from "../../utils";
import useSWR from "swr";
import Post from ".";

export default function Content() {
  const router = useRouter();
  const { id } = router.query;
  const { data, error } = useSWR(`/p/${id}`, fetcher);
  if (!data) return <div>No Data</div>;
  return (
    <Container gap={1} style={{ padding: 0 }} align="center">
      <Post {...data} isPressable={false} />
    </Container>
  );
}
