import { Grid, Text } from "@nextui-org/react";
import { Button } from "@mui/material";
import { FaRegCommentDots, FaReplyAll } from "react-icons/fa";
import { VoteButtons } from "./votes/buttons";

const ToolBarButton = ({ onClick, text, size, icon }) => {
  return (
    <Button onClick={() => onClick()} size="small" startIcon={icon}>
      <Text size={size || 12} css={{ color: "$accents6" }}>
        {text}
      </Text>
    </Button>
  );
};

export const Toolbar = (toolbar) => {
  const { size, votes, actions, comments, isComment } = toolbar;
  return (
    <Grid.Container xs={12} gap={1}>
      <Grid>
        <VoteButtons size={size} votes={votes} />
      </Grid>
      <Grid>
        {!isComment && (
          <ToolBarButton
            text={`${comments || 0} Comments`}
            icon={<FaRegCommentDots />}
            onClick={actions.comments.onClick}
          />
        )}
        {isComment && (
          <ToolBarButton
            text={`Reply`}
            icon={<FaReplyAll />}
            onClick={actions.comments.onClick}
          />
        )}
      </Grid>
    </Grid.Container>
  );
};
export default Toolbar;
