import {
  Grid,
  Text,
  Button,
  Input,
  Textarea,
  Card,
  Avatar,
} from "@nextui-org/react";

import {
  BsChatText,
  BsFillImageFill,
  BsFillEmojiLaughingFill,
} from "react-icons/bs";
import { RiFileGifFill } from "react-icons/ri";
import { CgPoll } from "react-icons/cg";
import { TbCalendarTime } from "react-icons/tb";
import { BiCurrentLocation } from "react-icons/bi";

export const PostInput = () => {
  return (
    <Card css={{ p: 6 }}>
      <Card.Body>
        <Grid.Container direction="column">
          <Grid.Container direction="row">
            <Grid xs={1}>
              <Avatar
                squared
                src="https://i.pravatar.cc/150?u=a042581f4e29026024d"
              />
            </Grid>
            <Grid xs={10} css={{ paddingBottom: 20 }}>
              <Textarea
                labelLeft={<BsChatText />}
                labelRight={<BsChatText />}
                placeholder="Enter your amazing ideas."
                fullWidth
                // rows={3}
                minRows={4}
                maxRows={4}
                shadow
                // contentRight={}
              />
            </Grid>
          </Grid.Container>
          <Grid.Container>
            <Grid xs={6}>
              <Button.Group size="sm" light>
                <Button>
                  <BsFillImageFill />
                </Button>
                <Button>
                  <RiFileGifFill />
                </Button>
                <Button>
                  <CgPoll />
                </Button>
                <Button>
                  <BsFillEmojiLaughingFill />
                </Button>
                <Button>
                  <TbCalendarTime />
                </Button>
                <Button disabled>
                  <BiCurrentLocation />
                </Button>
              </Button.Group>
            </Grid>
            <Grid xs={6} align="flex-end" justify="flex-end">
              <Button>
                <Text weight={"bold"}>Send</Text>
              </Button>
            </Grid>
          </Grid.Container>
        </Grid.Container>
      </Card.Body>
    </Card>
  );
};
