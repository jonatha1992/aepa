 import { Formik, Field, Form, ErrorMessage  } from "formik";
import { Error } from "../components/Error.jsx";
import { Alert } from "../components/Alert.jsx";
import { Redes } from "../components/Redes.jsx";
import "../css/contact.css"; // Asegúrate de tener un archivo CSS para estilos adicionales
import * as Yup from 'yup';

const countries = [
  { label: "AR (+54)", value: "+54" },
  { label: "USA (+1)", value: "+1" },
  { label: "UK (+44)", value: "+44" },
];

const validationSchema = Yup.object().shape({
  displayName: Yup.string().required("El nombre es obligatorio"),
  telephone: Yup.string().required("El número es obligatorio"),
  email: Yup.string().email("El correo no es válido").required("El correo es obligatorio"),
  mensaje: Yup.string().required("El mensaje es obligatorio"),
});

const Contact = () => {
  const handleSubmit = (values, { setSubmitting, resetForm, setErrors }) => {
    console.log("Formulario enviado:", values);
    setErrors({});
    setSubmitting(true);
    resetForm();
  };


  return (
    <>
      <div
        className="container"
      >
        <div className="row justify-content-center ">
          <div className="sign-in-container col-lg-6 ">
            <div className="sign-in-container m-4 col-8 "></div>
            <Formik
              initialValues={{
                displayName: "",
                telephone: "",
                email: "",
                mensaje: "",
                country: countries[0].value,
              }}
              validationSchema={validationSchema}
              onSubmit={handleSubmit}
              validateOnSubmit={true}
              // validateOnBlur={true}
            >
              <Form className="mx-auto col-lg-9 col-sm-12 text-black fs-6 ">
                <h1 className="text-center h1 mb-2 text-black">Contacto</h1>
                <div className="form-floating mb-3  ">
                  <Field
                    type="text"
                    className="form-control"
                    placeholder="Enter your name"
                    name="displayName"
                  />
                  <label>Nombre Completo</label>
                  <ErrorMessage
                    name="displayName"
                    component={(props) => <Error message={props.children} />}
                  />
                </div>
                <div className="  d-flex justify-content-between mb-3 " >
                  <div className="form-floating col-4" >
                    <Field as="select" name="country" className="form-select ">
                      {countries.map((country) => (
                        <option key={country.value} value={country.value}>
                          {country.label}
                        </option>
                      ))}
                    </Field>
                    <label htmlFor="country">Codigo</label>
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
                      component={(props) => <Error message={props.children} />}
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
                    component={(props) => <Error message={props.children} />}
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
          <Redes />
        </div>
      </div>
    </>
  );
};
export default Contact;
