import React from "react";
import {
  Grid,
  Modal,
  Button,
  Text,
  Input,
  Row,
  Checkbox,
} from "@nextui-org/react";
import { BsFillSunFill, BsMoonFill, BsGithub } from "react-icons/bs";
import Autocomplete from "../autocomplete";

export default function App() {
  const [visible, setVisible] = React.useState(false);
  const handler = () => setVisible(true);

  const closeHandler = () => {
    setVisible(false);
    console.log("closed");
  };

  return (
    <div>
      <Input
        onFocus={handler}
        clearable
        contentLeft={
          <BsMoonFill fill="var(--nextui-colors-accents6)" size={16} />
        }
        contentLeftStyling={false}
        css={{
          w: "100%",
          "@xsMax": {
            mw: "300px",
          },
          "& .nextui-input-content--left": {
            h: "100%",
            ml: "$4",
            dflex: "center",
          },
        }}
        placeholder="Search..."
      />
      <Modal
        autoMargin
        closeButton={false}
        aria-labelledby="modal-title"
        open={visible}
        onClose={closeHandler}
      >
        <Modal.Body autoMargin justify="center">
          <Grid.Container style={{ padding: 50 }}>
            <Grid>
              <Text h2>Search</Text>
            </Grid>
            <Grid>
              <Autocomplete />
            </Grid>
          </Grid.Container>
        </Modal.Body>
      </Modal>
    </div>
  );
}
