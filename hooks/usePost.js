import { useState } from "react";

export default function useStuff(stuff, params) {
  const [posts, setPosts] = useState([]);

  const load = () => dispatch(getStuff(stuff, params));

  return {
    vote: (id, vid, d) => dispatch(vote(id, vid, d)),
    items,
    isLoading,
    pagination,
    load,
  };
}
