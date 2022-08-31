import Boards from "../../components/boards/list";
import Tags from "../../components/tags/list";
import SinglePost from "../../components/post/single";
import Layout from "../../components/layout";
export default function Component() {
  return (
    <Layout left={<Tags />} right={<Boards />}>
      <SinglePost />
    </Layout>
  );
}
