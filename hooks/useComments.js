import { useState } from "react";
import api from "../utils";
import { useAlert } from "react-alert";
import { useSession, signIn } from "next-auth/react";
import { useRouter } from "next/router";

export const useComments = ({ tid, cid, defaults, actions }) => {
  const { data: session } = useSession();
  const alert = useAlert();
  const router = useRouter();

  const [visible, setVisible] = useState(
    defaults && defaults.visible ? true : false
  );
  const [value, setValue] = useState("");

  const toggleInput = () => setVisible(!visible);
  const showInput = () => setVisible(true);
  const hideInput = () => setVisible(false);
  const clear = () => setValue("");

  const cancel = () => {
    clear();
    hideInput();
  };
  const onChange = ({ target }) => setValue(target.value);

  const validateInput = () => {
    return !!value;
  };

  const reload = () => router.replace(router.asPath);

  const save = () => {
    if (!session) return signIn();

    if (!validateInput()) return false;
    return api(`/c`, {
      method: "POST",
      data: JSON.stringify({ tid, text: value, cid: cid }),
      responseType: "json",
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((res) => {
        alert.show("Comment Posted!");
        setVisible(false);
        setValue("");
        reload();
        if (
          actions &&
          actions.onSubmit &&
          typeof actions.onSubmit === "function"
        ) {
          actions.onSubmit();
        }
      })
      .catch((err) => {
        alert.error("Something went wrong, try again.");
      });
  };

  return {
    save,
    cancel,
    onChange,
    value,
    visible,
    setVisible,
    toggleInput,
    showInput,
    hideInput,
  };
};
