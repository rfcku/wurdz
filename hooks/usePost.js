import { useState } from "react";
import api from "../utils";
import {
  Container,
  Text,
  Row,
  Input,
  Textarea,
  Checkbox,
} from "@nextui-org/react";

import { useFormik } from "formik";
import * as yup from "yup";

export const usePost = () => {
  const validationSchema = yup.object({
    username: yup.string("Give it a title").required("The title is required"),
    password: yup.string("Write something").required("body is required"),
  });

  const save = () => {
    return api.post("/p/").then((resp) => {
      console.log("THIS RESP DATA", resp.data);
      if (resp.data) {
        return resp.data;
      }
    });
  };

  const formik = useFormik({
    initialValues: {
      title: "Some Title",
      body: "Some text",
      image: "http://pladehold.it/250",
    },
    validationSchema,
    onSubmit: (values) => {
      save({ ...values }).then((data) => {
        console.log("Post creation credentials response", data);
      });
    },
  });

  const form = (
    <form onSubmit={formik.handleSubmit}>
      <Container>
        <Textarea
          // labelLeft={<BsChatText />}
          // labelRight={<BsChatText />}
          placeholder="Enter your amazing ideas."
          fullWidth
          // rows={3}
          minRows={4}
          maxRows={4}
          shadow
          // contentRight={}
        />
        <Input
          clearable
          bordered
          fullWidth
          id="title"
          name="title"
          label="title"
          value={formik.values.title}
          onChange={formik.handleChange}
          // error={formik.touched.username && Boolean(formik.errors.username)}
          // helperText={formik.touched.username && formik.errors.username}
          // contentLeft={<FaUserAstronaut fill="currentColor" />}
        />
        <Input
          clearable
          bordered
          fullWidth
          id="body"
          name="body"
          label="body"
          type=" body"
          value={formik.values.password}
          onChange={formik.handleChange}
          // error={formik.touched.password && Boolean(formik.errors.password)}
          // helperText={formik.touched.password && formik.errors.password}
          // contentLeft={<RiLockPasswordFill />}
        />
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
