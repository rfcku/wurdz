import { useState } from "react";
import { Modal, Avatar, Grid, Button, Text } from "@nextui-org/react";
import { FaRegHeart, FaShareSquare, FaHeart } from "react-icons/fa";
import { BiMessageDetail } from "react-icons/bi";
export default function App({ author }) {
  const [visible, setVisible] = useState(false);
  const [heart, setHeart] = useState(false);
  const handler = () => setVisible(true);
  const closeHandler = () => {
    setVisible(false);
    console.log("closed");
  };
  if (!author) return <>No Author</>;
  const { _id, username, imageUrl } = author;
  return (
    <div>
      <Avatar
        onClick={handler}
        src={imageUrl}
        width="34px"
        bordered
        height="34px"
        color="gradient"
        style={{ cursor: "pointer" }}
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
            {/* <Avatar src={imageUrl} css={{ size: "$20" }} /> */}
            <Avatar
              onClick={handler}
              src={imageUrl}
              width="34px"
              bordered
              height="34px"
              color="gradient"
              css={{ cursor: "pointer", size: "$30" }}
            />
            <Text weight={"bold"}>@{username}</Text>
            <Text small>
              <code>{_id}</code>
            </Text>
          </Text>
        </Modal.Header>
        <Modal.Body>
          <Grid.Container>
            <Grid xs={12} align="center" justify="center">
              <Button.Group color="gradient" ghost>
                <Button onClick={() => setHeart(!heart)}>
                  {heart ? <FaRegHeart /> : <FaHeart />}
                </Button>
                <Button>
                  <BiMessageDetail />
                </Button>
                <Button>
                  <FaShareSquare />
                </Button>
              </Button.Group>
            </Grid>
          </Grid.Container>
        </Modal.Body>
      </Modal>
    </div>
  );
}
