import { useState } from "react";
import api from "../utils";
import { useAlert } from "react-alert";
export const useThread = ({ _id }) => {
  console.log("Using Thread", _id);

  const alert = useAlert();

  const [commenting, setCommenting] = useState(true);
  const [text, setComment] = useState("");

  const handleSaveComment = () => {
    console.log("Handling Save Comment", text);
    return api(`/c/${_id}`, {
      method: "POST",
      data: JSON.stringify({ _id, text }),
    })
      .then((res) => {
        alert.show("Comment Posted!");
        setComment("");
      })
      .catch(() => {
        alert.error("Something went wrong, try again.");
        setComment("");
      });
  };

  const handleChangeComment = (val) => setComment(val);

  return {
    submit: handleSaveComment,
    handleChangeComment,
    comment: text,
    commenting,
    setCommenting,
    setComment,
  };
};
