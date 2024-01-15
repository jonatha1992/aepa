import { Formik, Field, Form, ErrorMessage } from "formik";
import { Alert } from "../components/Alert";

import logo from "../assets/logo-aepa.png";

const countries = [
    { label: " (+1)", value: "+1" },
    { label: " (+44)", value: "+44" },
    { label: "Argentina (+54)", value: "+54" },
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
                    border: "2px solid #ffffff",
                    borderRadius: "1rem",
                }}
            >
                <div className="row justify-content-between">
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
                            <Form className="mx-auto col-lg-12 ">
                                <h1
                                    className="text-center mb-4"
                                    style={{ color: "white" }}
                                >
                                    Contacto
                                </h1>
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
                                        component={(props) => (
                                            <Alert message={props.children} />
                                        )}
                                    />
                                </div>
                                <div className=" d-flex justify-content-between mb-3">
                                    <div className="form-floating col-4 ">
                                        <Field
                                            as="select"
                                            name="country"
                                            className="form-select"
                                        >
                                            {countries.map((country) => (
                                                <option
                                                    key={country.value}
                                                    value={country.value}
                                                >
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
                                        <label htmlFor="telephone">
                                            Número sin prefijo
                                        </label>
                                        <ErrorMessage
                                            name="telephone"
                                            component={(props) => (
                                                <Alert
                                                    message={props.children}
                                                />
                                            )}
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
                                        component={(props) => (
                                            <Alert message={props.children} />
                                        )}
                                    />
                                </div>
                                <div className="form-floating mb-3">
                                    <Field
                                        as="textarea"  // Usar "textarea" en lugar de "text-area"
                                        name="mensaje"
                                        className="form-control"
                                        placeholder="Ingrese el mensaje"
                                    />
                                    <label>Mensaje</label>
                                    <ErrorMessage
                                        name="mensaje"
                                        component={(props) => (
                                            <Alert message={props.children} />
                                        )}
                                    />
                                </div>
                                k

                                <button
                                    className="btn btn-primary btn-block w-100 mb-1"
                                    type="submit"
                                >
                                    Enviar
                                </button>
                            </Form>
                        </Formik>
                    </div>
                    <div className="container col-lg-2 ">
                        <img className="img-fluid" src={logo} alt="" />
                    </div>
                    <div className="container col-lg-6 ">
                        {/* Resto del contenido */}
                    </div>
                </div>
            </div>
        </>
    );
};
export default Contact;
