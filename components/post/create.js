import { useState } from "react";
import { useSession, signOut } from "next-auth/react";
import {
  Text,
  User,
  Dropdown,
  Modal,
  useModal,
  Button,
} from "@nextui-org/react";
import { FaUserAstronaut } from "react-icons/fa";
import IconButton from "@mui/material/IconButton";
import { usePost } from "../../hooks/usePost";
import { IoIosCreate } from "react-icons/io";
import { PostInput } from "./input";
export default function Component() {
  const { setVisible, bindings } = useModal();
  const { data: session } = useSession();

  const { form, formik } = usePost({
    onSubmit: (resp) => {
      console.log("Submition succesfull", resp);
    },
  });

  const handler = () => setVisible(true);

  const closeHandler = () => {
    setVisible(false);
  };

  return (
    <>
      <Modal
        closeButton
        aria-labelledby="modal-title"
        onClose={closeHandler}
        scroll
        width="600px"
        {...bindings}
        noPadding
      >
        {/* <Modal.Header>
          <Text id="modal-title" size={18}>
            Welcome to
            <Text b size={18}>
              NextUI
            </Text>
          </Text>
        </Modal.Header> */}
        <Modal.Body>
          {/* {form} */}
          <div>
            <PostInput />
          </div>
        </Modal.Body>
      </Modal>
      <IconButton onClick={handler}>
        <Text>
          <IoIosCreate />
        </Text>
      </IconButton>
    </>
  );
}
