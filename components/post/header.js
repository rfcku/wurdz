import Link from "next/link";
import { Grid, Text } from "@nextui-org/react";
import Avatar from "../avatar";
import { fromNow } from "../../utils/date";

export const Header = (post) => {
  const { _id, title, author, createdAt, board } = post;

  return (
    <>
      <Avatar />
      <Grid.Container css={{ pl: "$6" }}>
        <Grid css={{ textAlign: "left" }}>
          {board && board.name && (
            <Text style={{ cursor: "pointer" }}>
              <small>b/{board && board.name}</small>
            </Text>
          )}
          {author && (
            <Text>
              <small>@{author.username}</small>
            </Text>
          )}
          {board && (
            <Link href={`/p/${_id}?c`}>
              <Text
                h4
                css={{ lineHeight: "$xs" }}
                style={{ cursor: "pointer" }}
              >
                {title}
              </Text>
            </Link>
          )}
          <Text css={{ color: "$accents8", fontSize: "$xs" }}>
            {fromNow(createdAt)}
          </Text>
        </Grid>
      </Grid.Container>
    </>
  );
};
export default Header;
