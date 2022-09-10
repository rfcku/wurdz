import { Grid, Text, Button } from "@nextui-org/react";
import { IconButton } from "@mui/material";
import { BsFillImageFill, BsFillEmojiLaughingFill } from "react-icons/bs";
import { RiFileGifFill } from "react-icons/ri";
import { CgPoll } from "react-icons/cg";
import { TbCalendarTime } from "react-icons/tb";
import { BiCurrentLocation } from "react-icons/bi";

export const AttachmentBar = () => {
  return (
    <Grid xs={6}>
      <Button.Group size="sm" light>
        <IconButton
          color="primary"
          aria-label="upload picture"
          component="label"
        >
          <input
            id="file"
            hidden
            name="file"
            accept="image/*"
            type="file"
            onChange={(event) => {
              formik.setFieldValue("file", event.currentTarget.files[0]);
            }}
          />
          <Text>
            <BsFillImageFill />
          </Text>
        </IconButton>
        <IconButton>
          <Text>
            <RiFileGifFill />
          </Text>
        </IconButton>
        <IconButton>
          <Text>
            <CgPoll />
          </Text>
        </IconButton>
        <IconButton>
          <Text>
            <BsFillEmojiLaughingFill />
          </Text>
        </IconButton>
        <IconButton>
          <Text>
            <TbCalendarTime />
          </Text>
        </IconButton>
        <IconButton disabled>
          <Text>
            <BiCurrentLocation />
          </Text>
        </IconButton>
      </Button.Group>
    </Grid>
  );
};
