import { Textarea, Grid, Button } from "@nextui-org/react";
import { useComments } from "../../hooks/useComments";
export const Input = ({ tid, cid, setVisible }) => {
  const { save, text, onChange } = useComments({
    tid,
    cid,
  });

  return (
    <Grid.Container gap={2}>
      <Grid xs={12}>
        <Textarea
          placeholder="Write something ..."
          rows={2}
          css={{ w: "100%" }}
          bordered
          onChange={onChange}
          value={text}
        />
      </Grid>
      <Grid.Container gap={1} alignContent="center">
        <Grid>
          <Button size="xs" color="secondary" onClick={() => setVisible(false)}>
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
