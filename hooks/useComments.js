import { useState } from "react";
import api from "../utils";
import { useAlert } from "react-alert";
import { useSession, signOut, signIn } from "next-auth/react";
export const useComments = ({ tid, cid }) => {
  const { data: session } = useSession();
  const alert = useAlert();

  const [visible, setVisible] = useState(true);

  const [text, setText] = useState("");

  const clear = () => setText("");
  const cancel = () => {
    clear();
    setVisible(false);
  };
  const onChange = ({ target }) => setText(target.value);

  const save = () => {
    // if (!session) return signIn();
    console.log("Handling Save Comment", text);
    return api(`/c`, {
      method: "POST",
      data: JSON.stringify({ tid, text, cid: cid || "" }),
      responseType: "json",
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((res) => {
        console.log("Comment posted!", res);
        alert.show("Comment Posted!");
        clear();
      })
      .catch((err) => {
        console.log("Save comment Error", err);
        alert.error("Something went wrong, try again.");
        clear();
      });
  };

  return {
    save,
    cancel,
    onChange,
    text,
    visible,
    setVisible,
  };
};
