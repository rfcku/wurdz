import { Switch, Input, Text, Navbar } from "@nextui-org/react";
import Link from "next/link";
import LoginBtn from "./loginBtn";
import { useTheme as useNextTheme } from "next-themes";
import { useTheme } from "@nextui-org/react";
import { BsFillSunFill, BsMoonFill, BsGithub } from "react-icons/bs";
import Search from "./search";
import Create from "./post/create";
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
          <Create />
        </Navbar.Item>
        <Navbar.Item>
          <Link href="https://github.com/rfcku/wurdz.git" target="_blank">
            <BsGithub />
          </Link>
        </Navbar.Item>
        <Navbar.Item>
          <Switch
            checked={isDark}
            icon={type === "dark" ? <BsMoonFill /> : <BsFillSunFill />}
            onChange={(e) => setTheme(e.target.checked ? "dark" : "light")}
          />
        </Navbar.Item>
        {/* <Navbar.Item
          css={{
            "@xsMax": {
              w: "100%",
              jc: "center",
            },
          }}
        >
          <Search />
        </Navbar.Item> */}
        <Navbar.Item>
          <LoginBtn />
        </Navbar.Item>
      </Navbar.Content>
    </Navbar>
  );
}
