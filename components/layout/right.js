import { ListItem, List, ListItemText } from "@mui/material";
import {
  Grid,
  Container,
  Text,
  Row,
  Col,
  Link,
  Avatar,
  Input,
  Dropdown,
  Card,
  User,
  Spacer,
} from "@nextui-org/react";
import { default as LoginBtn } from "../login-btn";

import { CgCommunity } from "react-icons/cg";
export default function Sidebar({ boards }) {
  return (
    <Container fluid gap={0}>
      <Grid.Container>
        <Grid>
          <Spacer />
          <LoginBtn />
        </Grid>
        <Grid>
          <Grid>
            <Spacer />
            <Spacer />
            <Text h3>
              <CgCommunity /> boards
            </Text>
          </Grid>
          <Grid.Container fullwidth>
            {boards.map((board, i) => {
              return (
                <Grid
                  xs={12}
                  key={`${i}-rightbar`}
                  style={{
                    paddingLeft: 0,
                    paddingRight: 0,
                    paddingTop: 5,
                    paddingBottom: 5,
                  }}
                >
                  <Card css={{ padding: 10 }} isHoverable isPressable>
                    <User
                      // bordered
                      as="button"
                      size="sm"
                      color="primary"
                      name={<Text weight="bold">{`b/${board.title}`}</Text>}
                      description={board.description}
                      src="https://i.pravatar.cc/150?u=a042581f4e29026024d"
                    />
                  </Card>
                </Grid>
              );
            })}
          </Grid.Container>
        </Grid>
      </Grid.Container>
    </Container>
  );
}