import { Text } from "@nextui-org/react";
import Linkify from "linkify-react";

import "linkify-plugin-hashtag";
import "linkify-plugin-mention";

const props = {
  attributes: {
    onClick: (event) => {
      if (!confirm("Are you sure you want to leave this page?")) {
        event.preventDefault();
      }
    },
  },
  options: {
    defaultProtocol: "https",
    formatHref: {
      hashtag: (href) => "https://twitter.com/hashtag/" + href.substr(1),
      mention: (href) => "https://example.com/profiles" + href,
    },
  },
};

export const TextTags = ({ text }) => {
  const { options, attributes } = props;
  return (
    <Linkify tagName="span" options={{ options, attributes }}>
      <Text>{text}</Text>
    </Linkify>
  );
};
export default TextTags;
