import {
  Card,
  Container,
  Col,
  Textarea,
  Grid,
  Text,
  Row,
  Button,
  Avatar,
} from "@nextui-org/react";
import Linkify from "linkify-react";

import "linkify-plugin-hashtag";
import "linkify-plugin-mention";
const linkProps = {
  onClick: (event) => {
    if (!confirm("Are you sure you want to leave this page?")) {
      event.preventDefault();
    }
  },
};

const options = {
  defaultProtocol: "https",
  formatHref: {
    hashtag: (href) => "https://twitter.com/hashtag/" + href.substr(1),
    mention: (href) => "https://example.com/profiles" + href,
  },
};

export const TextTags = ({ text }) => {
  return (
    <Linkify tagName="p" options={{ options, attributes: linkProps }}>
      <Text>{text}</Text>
    </Linkify>
  );
};
export default TextTags;
