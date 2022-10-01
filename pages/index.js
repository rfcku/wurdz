import List from "../components/post/list";
import Layout from "../components/layout";
import api from "../utils";

export default function Home({ posts }) {
  return (
    <Layout>
      <List data={posts} />
    </Layout>
  );
}

export async function getServerSideProps(context) {
  const populate = ["comments", "board", "author", "votes"];
  const posts = await api(`/all?populate=${populate.join(",")}`);
  return {
    props: {
      posts,
    },
  };
}
