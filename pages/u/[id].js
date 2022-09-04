import Boards from "../../components/boards/list";
import Tags from "../../components/tags/list";
import Profile from "../../components/user/profile";
import Layout from "../../components/layout";

import { Container } from "@nextui-org/react";
import { useRouter } from "next/router";
import axios from "../../utils";
import useSWR from "swr";

export default function Component() {
  const router = useRouter();
  const { id } = router.query;
  const populates = ["author", "votes", "board", "thread", "comments"];
  const { data, error } = useSWR(
    `/u/${id}?populate=${populates.join(",")}`,
    axios
  );
  console.log("THIS DATA", data);

  return (
    <Layout left={<Tags />} right={<Boards />}>
      <Profile id={id} />
    </Layout>
  );
}
