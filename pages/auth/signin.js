import { useEffect } from "react";
import { getProviders, useSession } from "next-auth/react";
import { Grid, Container, Text, Button, Spacer } from "@nextui-org/react";
import { useRouter } from "next/router";
import { useLogin } from "../../hooks/useLogin";

export default function SignIn() {
  const router = useRouter();
  const { data: session } = useSession();
  const { query } = router;
  if (session) router.push("/");
  const { form, formik } = useLogin({
    onSubmit: () => router.push("/"),
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
