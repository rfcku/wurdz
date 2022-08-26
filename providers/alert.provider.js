import Alert from "@mui/material/Alert";
import { Card, Grid, Text, Row, User, Button, Image } from "@nextui-org/react";

const AlertTemplate = ({ style, options, message, close }) => (
  <Alert
    variant="outlined"
    severity={options.type}
    style={style}
    onClose={close}
  >
    {message}
  </Alert>
);
export default AlertTemplate;
