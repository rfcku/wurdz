import { useFormik } from "formik";
import { signIn } from "next-auth/react";
import { Container, Text, Row, Input, Checkbox } from "@nextui-org/react";
import { FaUserAstronaut } from "react-icons/fa";
import { RiLockPasswordFill } from "react-icons/ri";
import * as yup from "yup";

export const useForm = ({ yup, onSubmit }) => {
  const validation = yup.object({
    username: yup
      .string("Enter your username")
      .required("username is required"),
    password: yup
      .string("Enter your password")
      .min(4, "Password should be of minimum 8 characters length")
      .required("Password is required"),
  });

  const formik = useFormik({
    initialValues: {
      username: "rfcku",
      password: "tester",
    },
    validationSchema: validation,
    onSubmit: (values) => {
      onSubmit("credentials", { ...values }).then((resp) => {
        if (onSubmit && typeof onSubmit === "function") return onSubmit(resp);
        return resp;
      });
    },
  });

  return {
    validation,
    formik,
  };
};

export default useForm;
