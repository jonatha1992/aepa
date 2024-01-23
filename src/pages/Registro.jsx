/* eslint-disable react/prop-types */

import { Formik, Field, Form, ErrorMessage } from "formik";
import { Error } from "../components/Error.jsx";
import { validarNumeroTelefono } from "../security/Validacion.js";
import "../css/contact.css"; // Asegúrate de tener un archivo CSS para estilos adicionales
import * as Yup from "yup";
import emailjs from "@emailjs/browser";
import { useRef } from "react";
import { countries as countriesList } from "countries-list";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

// Obtener la lista de países con sus prefijos telefónicos
const countries = Object.keys(countriesList).map((code) => ({
  label: `${countriesList[code].name} (+${countriesList[code].phone})`,
  value: `+${countriesList[code].phone}`,
}));

const validationSchema = Yup.object().shape({
  nombre: Yup.string().required("El nombre es obligatorio"),
  telefono: Yup.string()
    .required("El número es obligatorio")
    .test("valido", "Número de teléfono no válido", (value) =>
      validarNumeroTelefono(value)
    ),
  email: Yup.string()
    .email("El correo no es válido")
    .required("El correo es obligatorio"),
  mensaje: Yup.string().required("El mensaje es obligatorio"),
});

const Registro = () => {
  const formRef = useRef();

  const handleSubmit = async (
    values,
    { setSubmitting, resetForm, setErrors }
  ) => {
    setErrors({});
    const phoneNumber = `${values.country}${values.telefono}`;
    try {
      let result = await emailjs.sendForm(
        "service_alv459n",
        "template_3a2716m",
        formRef.current,
        "qHtG6A2I87n7CARUF",
        {
          telefono: phoneNumber,
        }
      );
      console.log(result.text);
      toast.success("¡El formulario se envió con éxito!");
    } catch (error) {
      console.log(error.text);
      toast.error("¡Hubo un error al enviar el formulario!");
    }

    setSubmitting(true);
    resetForm();
  };

  return (
    <>
      <div className="container-footer">
        <div className="row row-footer ">
          <ToastContainer
            autoClose={2000}
            className="toast-container"
            style={{ position: "relative", top: "0", zIndex: "9999" }}
          />
          <div className="col-md-12  d-flex justify-content-center">
            <Formik
              initialValues={{
                nombre: "",
                telefono: "",
                email: "",
                mensaje: "",
                country: countries[0].value,
              }}
              validationSchema={validationSchema}
              onSubmit={handleSubmit}
              validateOnSubmit={true}
              validateOnChange={false}
              validateOnBlur={false}
            >
              <Form className=" col-lg-9 col-sm-12  fs-6  text-black" ref={formRef}>
                <h1 className="text-center h1 mb-2 ">Inscripción</h1>
                <div className="form-floating mb-3  ">
                  <Field
                    type="text"
                    className="form-control"
                    placeholder="Enter your name"
                    name="nombre_completo"
                  />
                  <label>Apellido y Nombre</label>
                  <ErrorMessage
                    name="nombre_completo"
                    component={(props) => <Error message={props.children} />}
                  />
                </div>
                <div className="form-floating mb-3  ">
                  <Field
                    type="text"
                    className="form-control"
                    placeholder="Enter your name"
                    name="DNI"
                  />
                  <label>DNI / Passaporte</label>
                  <ErrorMessage
                    name="DNI"
                    component={(props) => <Error message={props.children} />}
                  />
                </div>
                <div className="form-floating mb-3  ">
                  <Field
                    type="date"
                    className="form-control"
                    placeholder="***"
                    name="fecha_nacimiento"
                  />
                  <label>Fecha de nacimiento</label>
                  <ErrorMessage
                    name="fecha_nacimiento"
                    component={(props) => <Error message={props.children} />}
                  />
                </div>
                <button
                  className="btn btn-primary btn-block w-100 mb-1"
                  type="submit"
                >
                  Enviar
                </button>
              </Form>
            </Formik>
          </div>
        </div>
      </div>
    </>
  );
};
export default Registro;
