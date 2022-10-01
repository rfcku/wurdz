import api from "../utils";
import { useSession } from "next-auth/react";
import { useRouter } from "next/router";
import { Grid, Textarea } from "@nextui-org/react";
import { useAlert } from "react-alert";
import { useFormik } from "formik";
import * as yup from "yup";

export const usePost = ({ onSubmit }) => {
  const alert = useAlert();
  const router = useRouter();

  const validationSchema = yup.object({
    title: yup.string("Give it a title"),
    body: yup.string("Write something"),
  });

  const save = (values) => {
    return api(`/p/create`, {
      method: "POST",
      data: JSON.stringify({ ...values }),
      responseType: "json",
    })
      .then(({ data, error }) => {
        if (error) {
          alert.show(`Error: ${error.message}`, {
            type: "error",
          });
        } else {
          alert.show("Posted!");
          reload();
        }
      })
      .catch((err) => {
        console.log("Error");
        alert.error("Something went wrong, try again.");
      });
  };

  const reload = () => {
    router.replace(router.asPath);
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
            shadow={false}
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
