import Alert from "@mui/material/Alert";
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
