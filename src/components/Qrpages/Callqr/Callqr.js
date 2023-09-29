import React, { useState } from "react";
import { Button, Form, Icon } from "semantic-ui-react";
import { useFormik } from "formik";
import { useDispatch } from "react-redux";
import { updateQR } from "../../../features/qrs/qrSlice";
import { countryOptions } from "../../../utils/country";
import { initialValues, validationSchema } from "./Callqr.form";

export function Callqr() {
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
        let numberqr = `tel:+${formValue.value}${formValue.number}`;
        setTimeout(() => {
          disaptch(updateQR(numberqr));
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
        <h4>Genera QRs para guardar contantos o llamar</h4>
        <Form.Group widths="equal">
          <Form.Dropdown
            label="Código de País"
            placeholder="Seleccionar País"
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
            icon="phone"
            iconPosition="left"
            label="Número telefónico"
            name="number"
            placeholder="Numero telefónico"
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
      </div>
      <Button color="violet" type="submit">
      <Icon name='qrcode' />Generar QR
      </Button>
    </Form>
  );
}
