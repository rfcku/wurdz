import { Grid, Container } from "@nextui-org/react";
import Navbar from "../navbar";
export default function Layout({ children, left, right }) {
  return (
    <>
      <Navbar />
      <Grid.Container alignContent="center" justify="center">
        {/* <Grid xs={2}>{left}</Grid> */}
        <Grid direction="column" xs={12}>
          {children}
        </Grid>
        {/* <Grid xs={2}>{right}</Grid> */}
      </Grid.Container>
    </>
  );
}
