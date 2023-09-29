import * as Yup from "yup";

export function initialValues() {
  return {
    email: "",
    subject: "",
    content: "",
  };
}

export function validationSchema() {
  return Yup.object({
    email: Yup.string().email("Debe agregar un correo válido").required("Debe agregar un correo electrónico"),
    subject: Yup.string().required("Debe agregar un asunto al correo"),
    content: Yup.string().required("Debe agregar un cuerpo al correo"),
  });
}
