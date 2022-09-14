import AllPosts from "../components/post/list";
import Layout from "../components/layout";
import api, { fetcher } from "../utils";

export default function Home() {
  return (
    <Layout>
      <AllPosts />
    </Layout>
  );
}
