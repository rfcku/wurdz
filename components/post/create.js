import { signIn, useSession } from "next-auth/react";
import { Text, Modal, Card, useModal } from "@nextui-org/react";
import IconButton from "@mui/material/IconButton";
import { IoIosCreate } from "react-icons/io";
import { PostInput } from "./input";
import { useRouter } from "next/router";
export default function Component() {
  const { data: session } = useSession();
  const router = useRouter();
  const { setVisible, bindings } = useModal();

  const open = () => setVisible(true);
  const close = () => setVisible(false);
  const handler = () => {
    if (!session) return signIn("credentials");
    open();
  };

  return (
    <>
      <Modal
        closeButton
        aria-labelledby="modal-title"
        onClose={close}
        scroll
        width="600px"
        {...bindings}
        noPadding
      >
        <Modal.Body>
          <Card css={{ pl: 15, pr: 15 }}>
            <Card.Body>
              <PostInput close={close} open={open} />
            </Card.Body>
          </Card>
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
