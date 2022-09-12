import { Grid, Text } from "@nextui-org/react";
import { fromNow } from "../../utils/date";
import { BsDot } from "react-icons/bs";
export const Header = (comment) => {
  const { author, createdAt } = comment;
  return (
    <Grid.Container alignContent="center">
      <Text size={12} css={{ color: "$accents6" }}>
        u/{author.username}
      </Text>
      <Text size={12}>
        <BsDot />
      </Text>
      <Text size={10} css={{ color: "$accents6" }}>
        {fromNow(createdAt)}
      </Text>
    </Grid.Container>
  );
};
