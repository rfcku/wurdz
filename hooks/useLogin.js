import { useFormik } from "formik";
import { signIn } from "next-auth/react";
import { Container, Text, Row, Input, Checkbox } from "@nextui-org/react";
import { FaUserAstronaut } from "react-icons/fa";
import { RiLockPasswordFill } from "react-icons/ri";
import * as yup from "yup";

const validationSchema = yup.object({
  username: yup.string("Enter your username").required("username is required"),
  password: yup
    .string("Enter your password")
    .min(4, "Password should be of minimum 8 characters length")
    .required("Password is required"),
});

export const useLogin = ({ onSubmit }) => {
  const formik = useFormik({
    initialValues: {
      username: "rfcku",
      password: "tester",
    },
    validationSchema: validationSchema,
    onSubmit: (values) => {
      signIn("credentials", { ...values }).then((resp) => {
        console.log("NextAuth credentials response", resp);
        localStorage.setItem("@@wurdz-token", JSON.stringify(resp.token));
        if (onSubmit && typeof onSubmit === "function") onSubmit(resp);
      });
    },
  });

  const form = (
    <form onSubmit={formik.handleSubmit}>
      <Container>
        <Input
          clearable
          bordered
          fullWidth
          id="username"
          name="username"
          label="username"
          value={formik.values.username}
          onChange={formik.handleChange}
          // error={formik.touched.username && Boolean(formik.errors.username)}
          // helperText={formik.touched.username && formik.errors.username}
          contentLeft={<FaUserAstronaut fill="currentColor" />}
        />
        <Input
          clearable
          bordered
          fullWidth
          id="password"
          name="password"
          label="Password"
          type="password"
          value={formik.values.password}
          onChange={formik.handleChange}
          // error={formik.touched.password && Boolean(formik.errors.password)}
          // helperText={formik.touched.password && formik.errors.password}
          contentLeft={<RiLockPasswordFill />}
        />
        <Row justify="space-between">
          <Checkbox>
            <Text size={14}>Remember me</Text>
          </Checkbox>
          <Text size={14}>Forgot password?</Text>
        </Row>
      </Container>
    </form>
  );

  return {
    formik,
    submit: formik.handleSubmit,
    reset: formik.handleReset,
    form,
  };
};
