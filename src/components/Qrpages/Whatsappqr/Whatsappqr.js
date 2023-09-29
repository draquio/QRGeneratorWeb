import React, { useState } from "react";
import { Button, Icon, Form, TextArea } from "semantic-ui-react";
import { initialValues, validationSchema } from "./Whatsapp.form";
import { useFormik } from "formik";
import { useDispatch } from "react-redux";
import { updateQR } from "../../../features/qrs/qrSlice";
import { countryOptions } from "../../../utils/country";

export function Whatsappqr() {
  const [isLoading, setIsLoading] = useState(false);
  const disaptch = useDispatch();
  const countries = countryOptions.map((c) => ({
    ...c,
    text: c.text + " +" + c.value,
  }));
  const formik = useFormik({
    initialValues: initialValues(),
    validationSchema: validationSchema(),
    validateOnChange: false,
    onSubmit: async (formValue) => {
      setIsLoading(true);
      try {
        let whatsappqr = `https://wa.me/${formValue.value}${formValue.number}?text=${formValue.content}`;
        setTimeout(() => {
          disaptch(updateQR(whatsappqr));
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
        <h4>Genera QRs para chats de whatsapp</h4>
        <Form.Group widths="equal">
          <Form.Dropdown
            placeholder="Seleccionar código"
            label="Código de país"
            search
            name="value"
            selection
            options={countries}
            onChange={(e, { name, value }) => formik.setFieldValue(name, value)}
            value={formik.values.value}
            error={
              formik.errors.value && formik.touched.value
                ? formik.errors.value
                : null
            }
          />
          <Form.Input
            label="Número de Whatsapp"
            icon="whatsapp"
            iconPosition="left"
            name="number"
            placeholder="Numero whatsapp"
            type="telf"
            onChange={formik.handleChange}
            value={formik.values.number}
            onBlur={formik.handleBlur}
            error={
              formik.errors.number && formik.touched.number
                ? formik.errors.number
                : null
            }
          />
        </Form.Group>
        <Form.Group widths="equal">
          <Form.Field
            label="Contenido del mensaje"
            name="content"
            control={TextArea}
            placeholder="Contenido del mensaje de Whataspp"
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
