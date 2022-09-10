import { useState } from "react";
import api, { api_multipart } from "../utils";
import {
  Container,
  Text,
  Row,
  Grid,
  Textarea,
  Input,
  Checkbox,
} from "@nextui-org/react";
import { useAlert } from "react-alert";

import { useFormik } from "formik";
import * as yup from "yup";

export const usePost = ({ onSubmit }) => {
  const alert = useAlert();

  const validationSchema = yup.object({
    title: yup.string("Give it a title"),
    body: yup.string("Write something"),
  });

  const save = (values) => {
    console.log("Handling Save Post", values);
    return api(`/p`, {
      method: "POST",
      data: JSON.stringify({ ...values }),
      responseType: "json",
    })
      .then((res) => {
        alert.show("Post Posted!");
      })
      .catch((err) => {
        alert.error("Something went wrong, try again.");
      });
  };

  const formik = useFormik({
    initialValues: {
      body: "",
    },
    validationSchema,
    onSubmit: (values) => {
      save(values).then((data) => {
        console.log("Post creation credentials response", data);
        if (onSubmit && typeof onSubmit === "function") onSubmit(data);
      });
    },
  });

  const form = (
    <form style={{ width: "100%" }} onSubmit={formik.handleSubmit}>
      <Grid xs={12}>
        <Grid xs={12}>
          <Textarea
            style={{ width: "100%" }}
            id="body"
            fullWidth
            placeholder="Enter your amazing ideas."
            minRows={4}
            maxRows={4}
            shadow
            value={formik.values.body}
            onChange={formik.handleChange}
          />
        </Grid>
      </Grid>
    </form>
  );

  return {
    formik,
    submit: formik.handleSubmit,
    reset: formik.handleReset,
    form,
  };
};
