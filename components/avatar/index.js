import React from "react";
import {
  Modal,
  Input,
  Avatar,
  Row,
  Grid,
  Checkbox,
  Button,
  Text,
} from "@nextui-org/react";

export default function App() {
  const [visible, setVisible] = React.useState(false);
  const handler = () => setVisible(true);
  const closeHandler = () => {
    setVisible(false);
    console.log("closed");
  };
  return (
    <div>
      <Button
        auto
        color="gray"
        // shadow
        onClick={handler}
        style={{ cursor: "pointer" }}
        squared
        icon={
          <Avatar
            onClick={handler}
            squared
            src="https://i.pravatar.cc/150?u=a042581f4e29026024d"
            width="34px"
            height="34px"
            style={{ cursor: "pointer" }}
          />
        }
      />
      <Modal
        closeButton
        // blur
        aria-labelledby="modal-title"
        open={visible}
        onClose={closeHandler}
      >
        <Modal.Header>
          <Text h3>
            <Avatar
              src="https://i.pravatar.cc/150?u=a04258114e29026702d"
              css={{ size: "$20" }}
            />
            FirstName
            <Text>@useName</Text>
          </Text>
        </Modal.Header>
        <Modal.Body>
          <Grid.Container>
            <Grid xs={12} align="center" justify="center"></Grid>
            <Grid xs={12} align="center" justify="center">
              <Button.Group color="success">
                <Button>Follow</Button>
                <Button>Message</Button>
                <Button>Share</Button>
              </Button.Group>
            </Grid>
          </Grid.Container>
        </Modal.Body>
      </Modal>
    </div>
  );
}
