import { useEffect, useState } from "react";
import { useSession, signOut } from "next-auth/react";
import { Text, User, Dropdown, Modal, Button } from "@nextui-org/react";
import { FaUserAstronaut } from "react-icons/fa";
import { useLogin } from "../hooks/useLogin";
import gravatar from "gravatar";

export default function Component() {
  const { data: session } = useSession();
  const { form, formik } = useLogin({
    onSubmit: (resp) => {
      console.log("Submition succesfull", resp);
    },
  });
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    if (session) {
      localStorage.setItem("@@wurdz-token", session.user.token);
    }
  }, [session]);

  const handler = () => setVisible(true);

  const closeHandler = () => {
    setVisible(false);
  };

  const secureUrl = gravatar.url(
    (session && session.user && session.user.email) || "email@email.com",
    { s: "100", r: "x", d: "retro" },
    true
  );
  if (session) {
    return (
      <Dropdown placement="bottom-right" type="menu" trigger="press">
        <Dropdown.Trigger>
          <User
            bordered
            as="button"
            size="lg"
            color="primary"
            name={session.user.name}
            src={secureUrl}
          />
        </Dropdown.Trigger>
        <Dropdown.Menu
          selectionMode
          color="primary"
          aria-label="User Actions"
          autoFocus
          items={[]}
          onAction={(key) => {
            if (key === "logout") {
              console.log("Log out");
              signOut();
            }
          }}
        >
          <Dropdown.Item key="profile" css={{ height: "$25", padding: "$5" }}>
            <Text color="inherit" css={{ d: "flex" }}>
              <User
                bordered
                as="button"
                size="sm"
                color="primary"
                name={session.user.name}
                description={session.user.email}
                src={secureUrl}
              />
            </Text>
          </Dropdown.Item>
          <Dropdown.Item key="logout" withDivider>
            Sign Out
          </Dropdown.Item>
        </Dropdown.Menu>
      </Dropdown>
    );
  }

  return (
    <>
      <Modal
        closeButton
        aria-labelledby="modal-title"
        open={visible}
        onClose={closeHandler}
      >
        <Modal.Header>
          <Text id="modal-title" size={18}>
            Welcome to
            <Text b size={18}>
              NextUI
            </Text>
          </Text>
        </Modal.Header>
        <Modal.Body>{form}</Modal.Body>
        <Modal.Footer>
          <Button auto flat color="error" onClick={closeHandler}>
            Close
          </Button>
          <Button auto type="submit" onClick={formik.submitForm}>
            Sign in
          </Button>
        </Modal.Footer>
      </Modal>
      <Button onClick={handler}>
        <FaUserAstronaut />
        Sign in
      </Button>
    </>
  );
}
