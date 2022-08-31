import { Switch, Input, Text, Navbar } from "@nextui-org/react";
import Link from "next/link";
import LoginBtn from "./loginBtn";
import { useTheme as useNextTheme } from "next-themes";
import { useTheme } from "@nextui-org/react";
import { BsFillSunFill, BsMoonFill, BsGithub } from "react-icons/bs";

export default function Component() {
  const { setTheme } = useNextTheme();
  const { isDark, type } = useTheme();

  return (
    <Navbar isBordered variant="sticky">
      <Navbar.Brand css={{ mr: "$4", cursor: "pointer" }}>
        <Link href="/">
          <Text h1 css="gradient">
            wurdz<small>.xyz</small>
          </Text>
        </Link>
      </Navbar.Brand>
      <Navbar.Content
        css={{
          "@xsMax": {
            w: "100%",
            jc: "space-between",
          },
        }}
      >
        <Navbar.Item>
          <BsGithub />
        </Navbar.Item>
        <Navbar.Item>
          <Switch
            checked={isDark}
            icon={type === "dark" ? <BsMoonFill /> : <BsFillSunFill />}
            onChange={(e) => setTheme(e.target.checked ? "dark" : "light")}
          />
        </Navbar.Item>
        <Navbar.Item
          css={{
            "@xsMax": {
              w: "100%",
              jc: "center",
            },
          }}
        >
          <Input
            clearable
            contentLeft={
              <BsMoonFill fill="var(--nextui-colors-accents6)" size={16} />
            }
            contentLeftStyling={false}
            css={{
              w: "100%",
              "@xsMax": {
                mw: "300px",
              },
              "& .nextui-input-content--left": {
                h: "100%",
                ml: "$4",
                dflex: "center",
              },
            }}
            placeholder="Search..."
          />
        </Navbar.Item>
        <Navbar.Item>
          <LoginBtn />
        </Navbar.Item>
      </Navbar.Content>
    </Navbar>
  );
}
