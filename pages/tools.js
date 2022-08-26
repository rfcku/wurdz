import { Grid, Card, Text, Container, Row, Col } from "@nextui-org/react";

const Profile = ({ user }) => {
  // Show the user. No loading state is required
  const tools = [
    {
      name: "Base64 Encode",
      description: "Encode a string to base64",
      url: "https://www.base64encode.org/",
      icon: "https://www.base64encode.org/images/base64-encode-icon.png",
      function: (str) => btoa(str),
    },
    {
      name: "Base64 Decode",
      description: "Decode a base64 string",
      url: "https://www.base64decode.org/",
      icon: "https://www.base64decode.org/images/base64-decode-icon.png",
      function: (str) => atob(str),
    },
    {
      name: "random password",
      description: "Generate a random password",
      url: "https://www.random.org/passwords/?num=1&len=8&format=html&rnd=new",
      icon: "https://www.random.org/images/random-org-logo.png",
    },
  ];
  return (
    <Grid.Container>
      <h1>tools</h1>
      <pre>{JSON.stringify(user, null, 2)}</pre>
      <Grid.Container gap={3}>
        {tools.map((tool, i) => (
          <Grid key={`tool-${tool.name}-${i * 0.1}`}>
            <Card style={{ padding: 25 }}>
              <Text h2>{tool.name}</Text>
            </Card>
          </Grid>
        ))}
      </Grid.Container>
    </Grid.Container>
  );
};

export default Profile;
