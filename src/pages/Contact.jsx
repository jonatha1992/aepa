import { Formik, Field, Form, ErrorMessage } from "formik";
import { Alert } from "../components/Alert";
import { FaWhatsapp, FaFacebook, FaInstagram } from "react-icons/fa"; // Importng all icons for simplicity
import { FiMail } from "react-icons/fi"; // Importing all icons for simplicity

import logo from "../assets/logo-aepa.png";

const countries = [
  { label: "USA (+1)", value: "+1" },
  { label: "UK (+44)", value: "+44" },
  { label: "AR (+54)", value: "+54" },
  // Add more countries as needed
];

const Contact = () => {
  const validateForm = (values) => {
    const errors = {};

    if (!values.displayName) {
      errors.displayName = "El nombre es obligatorio";
    } else if (!values.telephone) {
      errors.telephone = "El numero es obligatorio";
    } else if (!values.email) {
      errors.email = "El correo es obligatorio";
    } else if (!values.mensaje) {
      errors.mensaje = "El mensaje es obligatorio";
    }

    return errors;
  };

  const handleSubmit = (values, { setSubmitting, resetForm }) => {
    // Tu lógica de envío del formulario aquí
    console.log("Formulario enviado:", values);

    // Puedes resetear el formulario después de un envío exitoso
    resetForm();
    setSubmitting(false);
  };

  return (
    <>
      <div
        className="container"
        style={{
          marginTop: "1rem",
          border: "2px solid black",
          borderRadius: "1rem",
        }}
      >
        <div className="row justify-content-center">
          <div className="sign-in-container col-lg-4 ">
            <div className="sign-in-container m-4 col-8 "></div>
            <Formik
              initialValues={{
                displayName: "",
                telephone: "",
                email: "",
                mensaje: "",
                country: countries[0].value,
              }}
              validate={validateForm}
              onSubmit={handleSubmit}
            >
              <Form className="mx-auto col-lg-12 text-secondary ">
                <h1 className="text-center  mb-4 text-primary">Contacto</h1>
                <div className="form-floating mb-3">
                  <Field
                    type="text"
                    className="form-control"
                    placeholder="Enter your name"
                    name="displayName"
                  />
                  <label>Nombre Completo</label>
                  <ErrorMessage
                    name="displayName"
                    component={(props) => <Alert message={props.children} />}
                  />
                </div>
                <div className="  d-flex justify-content-between mb-3 ">
                  <div className="form-floating col-4  ">
                    <Field as="select" name="country" className="form-select ">
                      {countries.map((country) => (
                        <option key={country.value} value={country.value}>
                          {country.label}
                        </option>
                      ))}
                    </Field>
                    <label htmlFor="country">Codigo</label>
                    <ErrorMessage
                      name="country"
                      component="div"
                      className="error"
                    />
                  </div>
                  <div className="form-floating col-7">
                    <Field
                      type="tel"
                      className="form-control"
                      placeholder="Ingresa tu teléfono"
                      name="telephone"
                    />
                    <label htmlFor="telephone">Número sin prefijo</label>
                    <ErrorMessage
                      name="telephone"
                      component={(props) => <Alert message={props.children} />}
                    />
                  </div>
                </div>
                <div className="form-floating mb-3">
                  <Field
                    type="text"
                    className="form-control"
                    name="email"
                    placeholder="Ingrese your email"
                  />
                  <label>Email</label>
                  <ErrorMessage
                    name="email"
                    component={(props) => <Alert message={props.children} />}
                  />
                </div>
                <div className="form-floating mb-3">
                  <Field
                    as="textarea" // Usar "textarea" en lugar de "text-area"
                    name="mensaje"
                    className="form-control"
                    placeholder="Ingrese el mensaje"
                  />
                  <label>Mensaje</label>
                  <ErrorMessage
                    name="mensaje"
                    component={(props) => <Alert message={props.children} />}
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
          <div className="container row col-lg-6  text-center text-black d-flex">
            <div className="col-lg-6">
              <h3>¿Necesitas Ayuda?</h3>
              <ul>
                <li>
                  <FaWhatsapp />
                  <a
                    href="https://wa.me/5491140232792"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    (+54) 9 11 4023-2792
                  </a>
                </li>
                <li>
                  <FiMail />
                  <a href="mailto:secretaria@aepa.com.ar">
                    secretaria@aepa.com.ar
                  </a>
                </li>
              </ul>
            </div>
            <div className="col-lg-6">
              <h3>Seguinos en las redes</h3>
              <ul>
                <li>
                  <FaFacebook />
                  <a
                    href="https://www.facebook.com/profile.php?id=61551020911888"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Facebook
                  </a>
                </li>
                <li>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="16"
                    fill="currentColor"
                    class="bi bi-tiktok"
                    viewBox="0 0 16 16"
                  >
                    <path d="M9 0h1.98c.144.715.54 1.617 1.235 2.512C12.895 3.389 13.797 4 15 4v2c-1.753 0-3.07-.814-4-1.829V11a5 5 0 1 1-5-5v2a3 3 0 1 0 3 3z" />
                  </svg>{" "}
                  <a href="https://www.tiktok.com/@aepa2023">Ticktok</a>
                </li>
                <li>
                  <FaInstagram />
                  <a href="https://www.instagram.com/aepa318/">Instagram</a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
export default Contact;
