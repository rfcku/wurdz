import { getProviders } from "next-auth/react";
import { Grid, Container, Text, Button, Spacer } from "@nextui-org/react";
import { useRouter } from "next/router";
import { useLogin } from "../../hooks/useLogin";

export default function SignIn() {
  const router = useRouter();

  const { query } = router;
  if (query) {
    if (query.error) {
      console.log("Query Error -> ", query.error);
    }
  }
  const { form, formik } = useLogin({
    onSubmit: (resp) => {
      console.log("Submittion succesfull", resp);
      alert(JSON.stringify(resp, null, 2));
    },
  });
  return (
    <Container>
      <Grid.Container
        justify="center"
        alignItems="center"
        direction="column"
        gap={2}
      >
        <Grid>
          <Text color="gradient" h1>
            Sign in
          </Text>
        </Grid>
        <Grid xs={3}>{form}</Grid>
        <Grid>
          <Spacer />
          <Button onClick={formik.handleSubmit}>Login</Button>
        </Grid>
      </Grid.Container>
    </Container>
  );
}

export async function getServerSideProps(context) {
  const providers = await getProviders();
  return {
    props: { providers },
  };
}
