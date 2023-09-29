import * as Yup from "yup";

export function initialValues() {
  return {
    value: "",
    name: "",
    password: "",
  };
}

export function validationSchema() {
  return Yup.object({
    value: Yup.string().required("Debe seleccionar el tipo de seguridad"),
    name: Yup.string().required("Debe agregar nombre de red WiFi"),
    password: Yup.string().required("Debe agregar la contraseña"),
  });
}
