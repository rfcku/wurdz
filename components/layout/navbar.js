import {
  Grid,
  Container,
  Text,
  Row,
  Col,
  Link,
  Input,
  Card,
  Spacer,
  Switch,
} from "@nextui-org/react";
import { useSession } from "next-auth/react";

import { default as LoginBtn } from "../login-btn";
import AutoComplete from "../autocomplete";

import { useTheme as useNextTheme } from "next-themes";
import { useTheme } from "@nextui-org/react";
import { BsFillSunFill, BsMoonFill, BsSearch, BsGithub } from "react-icons/bs";

export default function Navbar() {
  const { data: session } = useSession();

  const { setTheme } = useNextTheme();
  const { isDark, type } = useTheme();

  return (
    <Container>
      <Grid.Container gap={2}>
        <Grid
          xs={6}
          justify="flex-start"
          alignItems="center"
          alignContent="center"
        >
          <Text h1>wurdz</Text>
          <Spacer />
          <AutoComplete />
        </Grid>
        <Grid xs={6} direction="row-reverse">
          <Grid>
            <LoginBtn />
          </Grid>
          <Grid
            alignContent="center"
            alignItems="center"
            justify="flex-end"
            direction="row"
          >
            <Switch
              checked={isDark}
              icon={type === "dark" ? <BsMoonFill /> : <BsFillSunFill />}
              onChange={(e) => setTheme(e.target.checked ? "dark" : "light")}
            />
          </Grid>
        </Grid>
      </Grid.Container>
    </Container>
  );
}
