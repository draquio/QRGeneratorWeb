import React, { useState } from "react";
import { Button, Form, Icon } from "semantic-ui-react";
import { useFormik } from "formik";
import { useDispatch } from "react-redux";
import { updateQR } from "../../../features/qrs/qrSlice";
import { initialValues, validationSchema } from "./Urlqr.form";

export function Urlqr() {
  const [isLoading, setIsLoading] = useState(false);
  const disaptch = useDispatch();
  const formik = useFormik({
    initialValues: initialValues(),
    validationSchema: validationSchema(),
    validateOnChange: false,
    onSubmit: async (formValue) => {
      setIsLoading(true);
      try {
        setTimeout(() => {
          disaptch(updateQR(formValue.url));
          setIsLoading(false);
        }, 1000);
      } catch (error) {
        console.error(error);
      }
    },
  });
  return (
    <Form loading={isLoading} onSubmit={formik.handleSubmit}>
      <div className="form_container">
        <h4>Genera QRs de URLs</h4>
        <Form.Group widths="equal">
          <Form.Input
            icon="linkify"
            iconPosition="left"
            label="URL"
            name="url"
            placeholder="https://"
            type="url"
            fluid
            onChange={formik.handleChange}
            value={formik.values.url}
            onBlur={formik.handleBlur}
            error={
              formik.errors.url && formik.touched.url ? formik.errors.url : null
            }
          />
        </Form.Group>
      </div>
      <Button color='violet' type="submit">
      <Icon name='qrcode' />Generar QR
      </Button>
    </Form>
  );
}
