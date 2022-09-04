import api from "../utils";

export const useVotes = () => {
  const vote = (_id, d) => {
    return api.put("/v", { id: _id, d }).then((resp) => {
      console.log("THIS RESP DATA", resp.data);
    });
  };
  return {
    vote,
  };
};
