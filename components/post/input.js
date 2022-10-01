import { Grid, Text, Button, Avatar } from "@nextui-org/react";
import { useSession } from "next-auth/react";
import { usePost } from "../../hooks/usePost";
import gravatar from "gravatar";

export const PostInput = ({ close, open }) => {
  const { data: session } = useSession();

  const { form, submit } = usePost({
    onSubmit: (resp) => {
      console.log("Submition succesfull", resp);
      close();
    },
  });
  const secureUrl = gravatar.url(
    (session && session.user && session.user.email) || "email@email.com",
    { s: "100", r: "x", d: "retro" },
    true
  );
  return (
    <Grid.Container direction="column">
      <Grid.Container direction="row">
        <Grid xs={1}>
          <Avatar bordered color="gradient" src={secureUrl} />
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
