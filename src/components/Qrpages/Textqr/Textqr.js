import React, { useState } from "react";
import { Button, Form, Icon } from "semantic-ui-react";
import { useFormik } from "formik";
import { useDispatch } from "react-redux";
import { updateQR } from "../../../features/qrs/qrSlice";
import { initialValues, validationSchema } from "./Textqr.form";

export function Textqr() {
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
          disaptch(updateQR(formValue.text));
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
        <h4>Genera QRs a partir de textos</h4>
        <Form.Group widths="equal">
          <Form.Input
            label="Texto"
            icon="align justify"
            iconPosition="left"
            name="text"
            placeholder="Agregar un texto"
            type="text"
            fluid
            onChange={formik.handleChange}
            value={formik.values.text}
            onBlur={formik.handleBlur}
            error={
              formik.errors.text && formik.touched.text
                ? formik.errors.text
                : null
            }
          />
        </Form.Group>
      </div>
      <Button color="violet" type="submit">
      <Icon name='qrcode' />Generar QR
      </Button>
    </Form>
  );
}
