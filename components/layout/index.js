import { Grid, Container } from "@nextui-org/react";
import Navbar from "../navbar";
export default function Layout({ children, left, right }) {
  return (
    <Container>
      <Navbar />
      <Grid.Container gap={2} alignContent="center" justify="center">
        {/* <Grid xs={2}>{left}</Grid> */}
        <Grid direction="column" xs={6}>
          {children}
        </Grid>
        {/* <Grid xs={2}>{right}</Grid> */}
      </Grid.Container>
    </Container>
  );
}
