import { useSession, signIn, signOut } from "next-auth/react";
import {
  Grid,
  Container,
  Text,
  Row,
  Col,
  User,
  Link,
  Input,
  Card,
  Dropdown,
  Button,
  Spacer,
} from "@nextui-org/react";
import { FaUserAstronaut } from "react-icons/fa";
import { AiOutlineLogout } from "react-icons/ai";
export default function Component() {
  const { data: session } = useSession();

  if (session) {
    return (
      <Dropdown placement="bottom-right" type="menu" trigger="press">
        <Dropdown.Trigger>
          <User
            bordered
            as="button"
            size="lg"
            color="primary"
            name="Tony Reichert"
            description={session.user.email}
            src="https://i.pravatar.cc/150?u=a042581f4e29026024d"
          />
        </Dropdown.Trigger>
        <Dropdown.Menu
          selectionMode
          color="primary"
          aria-label="User Actions"
          autoFocus
          items={[]}
        >
          <Dropdown.Item key="profile" css={{ height: "$25", padding: "$5" }}>
            <Text color="inherit" css={{ d: "flex" }}>
              <User
                bordered
                as="button"
                size="sm"
                color="primary"
                name="Tony Reichert"
                description={session.user.email}
                src="https://i.pravatar.cc/150?u=a042581f4e29026024d"
              />
            </Text>
          </Dropdown.Item>
          <Dropdown.Item
            key="settings"
            withDivider
            onClick={() => signOut()}
            command="⌘L"
          >
            Sign Out
          </Dropdown.Item>
        </Dropdown.Menu>
      </Dropdown>
    );
  }
  return (
    <Button onClick={() => signIn()}>
      <FaUserAstronaut />
      Sign in
    </Button>
  );
}
