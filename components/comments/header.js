import { Grid, Text } from "@nextui-org/react";
import { fromNow } from "../../utils/date";

export const Header = (comment) => {
  const { author, createdAt } = comment;
  return (
    <Grid.Container>
      <div
        style={{
          width: "160px",
          display: "flex",
          flexDirection: "row",
          alignContent: "center",
          alignItems: "center",
        }}
      >
        <Text size={12} css={{ color: "$accents6" }}>
          u/{author.username}
        </Text>
        <Text size={10} css={{ color: "$accents6" }}>
          {fromNow(createdAt)}
        </Text>
      </div>
    </Grid.Container>
  );
};
