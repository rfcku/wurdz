import Boards from "../../components/boards/list";
import Tags from "../../components/tags/list";
import SinglePost from "../../components/post/single";
import Layout from "../../components/layout";
import api from "../../utils";

export default function Component({ post }) {
  return (
    <Layout left={<Tags />} right={<Boards />}>
      <SinglePost data={post} />
    </Layout>
  );
}

export async function getServerSideProps(context) {
  const { query } = context;
  const populate = ["comments", "board", "author", "votes", "thread"];
  const post = await api(`/p/${query.id}?populate=${populate.join(",")}`);
  return {
    props: {
      post: post || null,
    },
  };
}
