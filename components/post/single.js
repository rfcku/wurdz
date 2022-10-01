import { Container } from "@nextui-org/react";
import Post from ".";

export default function Content({ data }) {
  if (!data) return <div>No Data</div>;
  return (
    <Container gap={1} style={{ padding: 50 }} align="center">
      <Post {...data} isPressable={false} />
    </Container>
  );
}
