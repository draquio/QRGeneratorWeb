import * as Yup from "yup";

export function initialValues() {
  return {
    value: "",
    number: "",
    content: "",
  };
}
const mobileverification = /^((\\+[1-9]{1,4}[ \\-]*)|(\\([0-9]{2,3}\\)[ \\-]*)|([0-9]{2,4})[ \\-]*)*?[0-9]{3,4}?[ \\-]*[0-9]{3,4}?$/

export function validationSchema() {
  return Yup.object({
    value: Yup.string().required("Debe seleccionar un código de país"),
    number: Yup.string().required("Debe agregar un número").matches(mobileverification, "Debe agregar un número válido"),
    content: Yup.string().required("Debe agregar un mensaje de whatsapp")
  });
}
