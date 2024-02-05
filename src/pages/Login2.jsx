import React, { useState } from "react";
import { useAuth } from "../context/AuthContext";
import { Link, useNavigate } from "react-router-dom";
import { Formik, Form } from "formik";
import { Button, TextField, Box } from "@mui/material";
import * as Yup from "yup";
import videoSource from "../assets/video-aepa.mp4";
import "../css/login.css";
import { FormikTextField } from "../components/Controles";

const validationSchema = Yup.object().shape({
    email: Yup.string().email("Correo electrónico no válido").required("El correo electrónico es obligatorio"),
    password: Yup.string()
        .required("La contraseña es obligatoria")
        .min(6, "La contraseña debe tener al menos 6 caracteres"),
});

const Login2 = () => {
    const { login, resetPassword } = useAuth();
    const [Error, setError] = useState(null);
    const navigate = useNavigate();
    return (
        <>
            <div className="container-login background-2">
                {Error && <Alert message={Error} />}
                <div className="video-container">
                    <video className="video-responsive" src={videoSource} autoPlay loop muted></video>
                </div>
                <div className="form-container">
                    <Formik
                        initialValues={{
                            email: "",
                            password: "",
                        }}
                        onBlur={false}
                        validationSchema={validationSchema}
                        onSubmit={async (values, { setSubmitting }) => {
                            setSubmitting(true);
                            setError("");
                            try {
                                const userCredential = await login(values.email, values.password);
                                if (userCredential.user.emailVerified) {
                                    navigate("/");
                                } else {
                                    setError(
                                        "El correo electrónico no está verificado. Por favor, verifíquelo antes de iniciar sesión."
                                    );
                                }
                            } catch (error) {
                                setError(error.message);
                            }
                            setSubmitting(false);
                        }}
                    >
                        {({ errors, touched }) => (
                            <Form>
                                <Box className="mt-3">
                                    <FormikTextField
                                        fullWidth
                                        name="email"
                                        label="Email"
                                        type="email"
                                        error={touched.email && Boolean(errors.email)}
                                        helperText={touched.email && errors.email}
                                    />
                                    <FormikTextField
                                        fullWidth
                                        name="password"
                                        label="Password"
                                        type="password"
                                        margin="normal"
                                        error={touched.password && Boolean(errors.password)}
                                        helperText={touched.password && errors.password}
                                    />
                                    <Button type="submit" variant="contained" color="primary" fullWidth>
                                        Login
                                    </Button>
                                </Box>
                            </Form>
                        )}
                    </Formik>
                    <Link
                        to="/reset-password"
                        className="d-inline-block align-baseline fw-bold fs-6 text-primary hover-primary"
                    >
                        Forgot Password?
                    </Link>
                    <p className="mt-4 mb-0 fs-7 px-3 d-flex justify-content-between">
                        Don't have an account?
                        <Link to="/register" className="text-primary hover-primary ">
                            Register
                        </Link>
                    </p>
                </div>
            </div>
        </>
    );
};

export default Login2;
