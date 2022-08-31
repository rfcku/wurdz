import Boards from "../components/boards/list";
import Tags from "../components/tags/list";
import AllPosts from "../components/post/list";
import Layout from "../components/layout";
export default function Home() {
  return (
    <Layout left={<Boards />} right={<Tags />}>
      <AllPosts />
    </Layout>
  );
}
