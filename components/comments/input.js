import { Textarea, Grid, Button } from "@nextui-org/react";

export const Input = ({ value, save, cancel, onChange }) => {
  return (
    <Grid.Container gap={2}>
      <Grid xs={12}>
        <Textarea
          placeholder="Write something ..."
          rows={2}
          css={{ w: "100%" }}
          bordered
          onChange={onChange}
          value={value}
        />
      </Grid>
      <Grid.Container gap={1} alignContent="center">
        <Grid>
          <Button size="xs" color="secondary" onClick={cancel}>
            Cancel
          </Button>
        </Grid>
        <Grid>
          <Button size="xs" color={"gradient"} onClick={save}>
            Send
          </Button>
        </Grid>
      </Grid.Container>
    </Grid.Container>
  );
};
export default Input;
