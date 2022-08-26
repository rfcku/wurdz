export { default as Right } from "./right";
export { default as Left } from "./left";
export { default as Center } from "./center";
export { default as Navbar } from "./navbar";

const Layout = ({ center }) => {
  return (
    <Container>
      <Left>THIS</Left>
      <Center>THIS</Center>
      <Right>THIS</Right>
    </Container>
  );
};
