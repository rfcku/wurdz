import Boards from "../../components/boards/list";
import Tags from "../../components/tags/list";
import SingleBoard from "../../components/boards/single";
import Layout from "../../components/layout";
export default function Component() {
  return (
    <Layout left={<Tags />} right={<Boards />}>
      <SingleBoard />
    </Layout>
  );
}
