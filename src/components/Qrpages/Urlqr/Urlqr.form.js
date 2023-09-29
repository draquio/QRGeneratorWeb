import * as Yup from "yup";

export function initialValues() {
  return {
    url: "",
  };
}

export function validationSchema() {
  return Yup.object({
    url: Yup.string().url("Debe agregar una URL válida").required("Debe agregar una URL"),
  });
}
