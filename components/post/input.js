import { Grid, Text, Button, Avatar } from "@nextui-org/react";
import { usePost } from "../../hooks/usePost";

export const PostInput = ({ close, open }) => {
  const { form, submit } = usePost({
    onSubmit: (resp) => {
      console.log("Submition succesfull", resp);
      close();
    },
  });

  return (
    <Grid.Container direction="column">
      <Grid.Container direction="row">
        <Grid xs={1}>
          <Avatar
            squared
            src="https://i.pravatar.cc/150?u=a042581f4e29026024d"
          />
        </Grid>
        <Grid xs={10} css={{ paddingBottom: 20 }}>
          {form}
        </Grid>
      </Grid.Container>
      <Grid.Container>
        <Grid.Container align="flex-end" justify="flex-end">
          <Button onClick={submit}>
            <Text weight={"bold"}>Send</Text>
          </Button>
        </Grid.Container>
      </Grid.Container>
    </Grid.Container>
  );
};
