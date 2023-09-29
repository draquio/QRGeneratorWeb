import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { updateQR } from "../../../features/qrs/qrSlice";
import { useFormik } from "formik";
import { Button, TextArea, Form, Icon } from "semantic-ui-react";
import { initialValues, validationSchema } from "./Emailqr.form";

export function Emailqr() {
  const disaptch = useDispatch();
  const [isLoading, setIsLoading] = useState(false);
  const formik = useFormik({
    initialValues: initialValues(),
    validationSchema: validationSchema(),
    validateOnChange: false,
    onSubmit: async (formValue) => {
      setIsLoading(true);
      try {
        const emailqr = `mailto:${formValue.email}?subject=${formValue.subject}&body=${formValue.content}`;
        setTimeout(() => {
          disaptch(updateQR(emailqr));
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
        <h4>Genera QRs para enviar correos electrónicos</h4>
        <Form.Group widths="equal">
          <Form.Input
            icon="mail"
            iconPosition="left"
            label="Correo electrónico"
            name="email"
            placeholder="tucorreo@mail.com"
            type="email"
            onChange={formik.handleChange}
            value={formik.values.email}
            onBlur={formik.handleBlur}
            error={
              formik.errors.email && formik.touched.email
                ? formik.errors.email
                : null
            }
          />
          <Form.Input
            icon="file"
            iconPosition="left"
            label="Asunto del correo"
            name="subject"
            placeholder="Asunto del correo"
            type="text"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.subject}
            error={
              formik.errors.subject && formik.touched.subject
                ? formik.errors.subject
                : null
            }
          />
        </Form.Group>
        <Form.Group widths="equal">
          <Form.Field
            label="Contenido del correo"
            control={TextArea}
            name="content"
            placeholder="Contenido del correo"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.content}
            error={
              formik.errors.content && formik.touched.content
                ? formik.errors.content
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
