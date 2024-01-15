import { Formik, Field, Form, ErrorMessage } from "formik";
import { Alert } from "../components/Alert";

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
                                <h1
                                    className="text-center  mb-4 text-primary"
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
                                <div className="  d-flex justify-content-between mb-3 ">
                                    <div className="form-floating col-4  ">
                                        <Field
                                            as="select"
                                            name="country"
                                            className="form-select "
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
                                    <i className="bi bi-whatsapp"></i>
                                    <a
                                        href="https://wa.me/54911910666"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                    >
                                        (+54) 9-11910666
                                    </a>

                                </li>
                            </ul>
                        </div>
                        <div className="col-lg-6">
                            <h3>Seguinos en las redes</h3>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};
export default Contact;
