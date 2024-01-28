import React, { useState } from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import {
    TextField,
    Button,
    Stepper,
    Step,
    StepLabel,
    Box,
} from "@mui/material";
import {
    countries,
    countiesCode,
    defaultPais,
    defaultCodigo,
} from "../security/Tools.js";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "../css/registro.css";

const steps = [
    "Datos Personales",
    "Datos de Contacto",
    "Nivel de Formación",
    "Institución",
];

const validationSchema = Yup.object().shape({
    nombre_completo: Yup.string().required("El nombre es obligatorio"),
    DNI: Yup.string().required("El número es obligatorio"),
    fecha_nacimiento: Yup.string().required(
        "La fecha de nacimiento es obligatoria"
    ),
    pais: Yup.string().required("El país es obligatorio"),
    provincia: Yup.string().required("La provincia o estado es obligatorio"),
    calle: Yup.string().required("La calle es obligatoria"),
    numero: Yup.string().required("El número es obligatorio"),
    dept: Yup.string(),
    piso: Yup.string(),
    localidad: Yup.string().required("La localidad es obligatoria"),
    codigo_postal: Yup.string().required("El código postal es obligatorio"),
    telefono: Yup.string().required("El número de celular es obligatorio"),
    email: Yup.string()
        .email("Correo electrónico no válido")
        .required("El correo electrónico es obligatorio"),
});

const Registro2 = () => {
    const [activeStep, setActiveStep] = useState(0);
    const isLastStep = activeStep === steps.length - 1;

    const handleNext = () => {
        setActiveStep((prevActiveStep) => prevActiveStep + 1);
    };

    const handleBack = () => {
        setActiveStep((prevActiveStep) => prevActiveStep - 1);
    };

    const handleSubmit = (values, actions) => {
        if (isLastStep) {
            // Procesa la información del formulario
            console.log(values);
            toast.success("Formulario enviado con éxito!");
            actions.resetForm();
        } else {
            handleNext();
            actions.setTouched({});
            actions.setSubmitting(false);
        }
    };
    return (
        <div className="container">
            <ToastContainer autoClose={2000} />
            <h1 className="text-center">Inscripciasda</h1>
            <Stepper activeStep={activeStep} alternativeLabel>
                {steps.map((label) => (
                    <Step key={label}>
                        <StepLabel>{label}</StepLabel>
                    </Step>
                ))}
            </Stepper>

            <Formik
                initialValues={{
                    nombre_completo: "",
                    s,
                    // Define más valores iniciales aquí
                }}
                validationSchema={validationSchema}
                onSubmit={handleSubmit}
            >
                {({ isSubmitting }) => (
                    <Form>
                        {activeStep === 0 && (
                            <Box>
                                <FormikTextField
                                    name="nombre_completo"
                                    label="Nombre Completo"
                                />
                                {/* Más campos para 'Datos Personales' */}
                            </Box>
                        )}
                        {/* Repite para otros pasos */}

                        <Box>
                            <Button
                                disabled={activeStep === 0}
                                onClick={handleBack}
                            >
                                Atrás
                            </Button>
                            <Button
                                type="submit"
                                disabled={isSubmitting}
                                variant="contained"
                                color="primary"
                            >
                                {isLastStep ? "Enviar" : "Siguiente"}
                            </Button>
                        </Box>
                    </Form>
                )}
            </Formik>
        </div>
    );
};

export default Registro2;
