import React from "react";
import { Modal, Button, Text, Input, Row, Checkbox } from "@nextui-org/react";
// import { Mail } from "./Mail";
// import { Password } from "./Password";
import { AiFillBug } from "react-icons/ai";
export default function Debugger({ body, title }) {
  const [visible, setVisible] = React.useState(false);
  const handler = () => setVisible(true);

  const closeHandler = () => {
    setVisible(false);
    console.log("closed");
  };

  return (
    <div style={{ position: "absolute", top: 10, right: 10 }}>
      <Button auto icon={<AiFillBug />} light onClick={handler} />
      <Modal
        closeButton
        aria-labelledby="modal-title"
        open={visible}
        onClose={closeHandler}
      >
        <Modal.Header>
          <Text b size={18}>
            {title || "debug this"}
          </Text>
        </Modal.Header>
        <Modal.Body>
          <Text>
            <code>{JSON.stringify(body)}</code>
          </Text>
        </Modal.Body>
      </Modal>
    </div>
  );
}
