import * as Yup from "yup";

export function initialValues() {
  return {
    text: "",
  };
}

export function validationSchema() {
  return Yup.object({
    text: Yup.string().required("Debe agregar un texto"),
  });
}
