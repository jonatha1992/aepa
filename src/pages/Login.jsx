import React, { useState } from "react";
import { useAuth } from "../context/AuthContext";
import { Link, useNavigate } from "react-router-dom";
import { Formik, Form } from "formik";
import { Button, TextField, Box } from "@mui/material";
import * as Yup from "yup";
import videoSource from "../assets/video-aepa.mp4";
import "../css/login.css";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { FormikTextField } from "../components/Controles";

// Ajustamos el esquema de validación para que sea dinámico
// Definición de esquemas de validación separados
const loginValidationSchema = Yup.object().shape({
    email: Yup.string().email("Correo electrónico no válido").required("El correo electrónico es obligatorio"),
    password: Yup.string()
        .required("La contraseña es obligatoria")
        .min(6, "La contraseña debe tener al menos 6 caracteres"),
});

const recoverValidationSchema = Yup.object().shape({
    email: Yup.string().email("Correo electrónico no válido").required("El correo electrónico es obligatorio"),
});

const Login = () => {
    const { login, resetPassword } = useAuth();
    const [recuperar, setRecuperar] = useState(false);

    const navigate = useNavigate();

    const handleSubmit = async (values, { setSubmitting, resetForm }) => {
        setSubmitting(true);
        if (recuperar) {
            // Manejar recuperación de contraseña
            try {
                await resetPassword(values.email);
                toast.success("Se ha enviado un correo para restablecer tu contraseña.", {
                    onClose: () => setRecuperar(false),
                });
            } catch (error) {
                toast.error(error.message);
            }
        } else {
            // Manejar inicio de sesión
            try {
                const userCredential = await login(values.email, values.password);
                if (userCredential.user.emailVerified) {
                    navigate("/");
                } else {
                    toast.error(
                        "El correo electrónico no está verificado. Por favor, verifíquelo antes de iniciar sesión."
                    );
                }
            } catch (error) {
                toast.error(error.message);
            }
        }
        setSubmitting(false);
        if (recuperar) resetForm(); // Limpia el formulario solo en modo recuperación
    };

    return (
        <>
            <ToastContainer />
            <div className="container-login background-2">
                <div className="video-container">
                    <video className="video-responsive" src={videoSource} autoPlay loop muted></video>
                </div>
                <div className="form-container">
                    <Formik
                        initialValues={{
                            email: "",
                            password: "",
                        }}
                        validateOnBlur={false}
                        validateOnChange={false}
                        validationSchema={recuperar ? recoverValidationSchema : loginValidationSchema}
                        onSubmit={handleSubmit}
                    >
                        {({ errors, touched, isSubmitting, resetForm }) => (
                            <Form>
                                <Box className="mt-3">
                                    <FormikTextField
                                        fullWidth
                                        name="email"
                                        label="Email"
                                        type="email"
                                        error={touched.email && Boolean(errors.email)}
                                        helperText={touched.email && errors.email}
                                        // Formik's <Field> component should be used here if FormikTextField is adapted to handle props correctly
                                    />
                                    {!recuperar && (
                                        <FormikTextField
                                            fullWidth
                                            name="password"
                                            label="Password"
                                            type="password"
                                            margin="normal"
                                            error={touched.password && Boolean(errors.password)}
                                            helperText={touched.password && errors.password}
                                            // Same as above, use <Field> if your custom FormikTextField can handle it
                                        />
                                    )}
                                    <Button
                                        className="d-inline-block align-baseline  fs-6 fw-bold  hover-primary mt-2"
                                        type="submit"
                                        variant="contained"
                                        color="primary"
                                        fullWidth
                                        disabled={isSubmitting}
                                    >
                                        {recuperar ? "Enviar recuperación" : "Login"}
                                    </Button>
                                </Box>
                                <Button
                                    onClick={() => {
                                        resetForm();
                                        setRecuperar(!recuperar);
                                    }}
                                    className=" d-inline-block align-baseline fw-bold fs-6 text-primary hover-primary mt-2"
                                >
                                    {recuperar ? "Volver al login" : "Recuperar password"}
                                </Button>
                            </Form>
                        )}
                    </Formik>
                    {!recuperar && (
                        <p className="mt-4 mb-0 fs-7 px-3 d-flex justify-content-between">
                            ¿No tienes cuenta?
                            <Link to="/registro" className="text-primary hover-primary ">
                                Registrate
                            </Link>
                        </p>
                    )}
                </div>
            </div>
        </>
    );
};

export default Login;
