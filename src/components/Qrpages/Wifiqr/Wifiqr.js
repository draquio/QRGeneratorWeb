import React, { useState } from "react";
import { wifioptions } from "../../../utils/wifi";
import { initialValues, validationSchema } from "./Wifiqr.form";
import { Button, Icon, Form } from "semantic-ui-react";
import { useFormik } from "formik";
import { useDispatch } from "react-redux";
import { updateQR } from "../../../features/qrs/qrSlice";

export function Wifiqr() {
  const [isLoading, setIsLoading] = useState(false);
  const disaptch = useDispatch();
  const formik = useFormik({
    initialValues: initialValues(),
    validationSchema: validationSchema(),
    validateOnChange: false,
    onSubmit: async (formValue) => {
      setIsLoading(true);
      try {
        let wifiqr = `WIFI:T:${formValue.value};S:${formValue.name};P:${formValue.password};;`;
        setTimeout(() => {
          disaptch(updateQR(wifiqr));
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
        <h4>Genera QRs para guardar y compartir redes WiFi</h4>
        <Form.Group widths={"equal"}>
          <Form.Input
            icon="wifi"
            iconPosition="left"
            label="Nombre de la red"
            name="name"
            placeholder="Nombre de la red"
            type="text"
            onChange={formik.handleChange}
            value={formik.values.name}
            onBlur={formik.handleBlur}
            error={
              formik.errors.name && formik.touched.name
                ? formik.errors.name
                : null
            }
          />
          <Form.Input
            icon="key"
            iconPosition="left"
            label="Contraseña"
            name="password"
            placeholder="Contraseña"
            type="text"
            onChange={formik.handleChange}
            value={formik.values.password}
            onBlur={formik.handleBlur}
            error={
              formik.errors.password && formik.touched.password
                ? formik.errors.password
                : null
            }
          />
        </Form.Group>
        <Form.Group widths="equal">
          <Form.Dropdown
            label="Tipo de encriptación"
            placeholder="Seleccionar encriptación"
            name="value"
            selection
            options={wifioptions}
            onChange={(e, { name, value }) => formik.setFieldValue(name, value)}
            value={formik.values.value}
            error={
              formik.errors.value && formik.touched.value
                ? formik.errors.value
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
