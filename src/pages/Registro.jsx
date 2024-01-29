import React, { useState } from "react";
import { Formik, Form } from "formik";
import * as Yup from "yup";
import { Button, Stepper, Step, StepLabel, Box } from "@mui/material";
import {
    FormikTextField,
    FormikSelectField,
    FormikDatePicker,
} from "../components/Controles";

import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "../css/registro.css";

const steps = [
    "Datos Personales",
    "Datos de Contacto",
    "Nivel de Formación",
    "Institución",
];

import { countries, countiesCode } from "../security/Tools";
const defaultCode = { label: "Argentina (+54)", value: "+54" };
const defaultCountry = { label: "Argentina", value: "AR" };

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
    depto: Yup.string(),
    piso: Yup.string(),
    localidad: Yup.string().required("La localidad es obligatoria"),
    codigo_postal: Yup.string().required("El código postal es obligatorio"),
    telefono: Yup.string().required("El número de celular es obligatorio"),
    email: Yup.string()
        .email("Correo electrónico no válido")
        .required("El correo electrónico es obligatorio"),
});

const Registro = () => {
    const [activeStep, setActiveStep] = useState(0);
    const isLastStep = activeStep === steps.length - 1;

    const handleNext = () => {
        setActiveStep((prevActiveStep) => prevActiveStep + 1);
        console.log(activeStep);
    };

    const handleBack = () => {
        setActiveStep((prevActiveStep) => prevActiveStep - 1);
    };

    const handleSubmit = (values, actions) => {
        if (isLastStep) {
            console.log(values);
            toast.success("Formulario enviado con éxito!");
            actions.resetForm();
        } else {
            handleNext();
            actions.setTouched({});
            actions.setSubmitting(false);
        }
    };

    // Puedes crear componentes similares para otros tipos de campos si es necesario.

    return (
        <div className="container">
            <ToastContainer autoClose={2000} />
            <h1 className="text-center">Inscripcion de Socios</h1>
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
                    DNI: "",
                    fecha_nacimiento: "",
                    pais: "",
                    provincia: "",
                    calle: "",
                    numero: "",
                    dept: "",
                    piso: "",
                    localidad: "",
                    codigo_postal: "",
                    telefono: "",
                    email: "",
                }}
                validationSchema={validationSchema}
                onSubmit={handleSubmit}
            >
                {({ isSubmitting }) => (
                    <Form className="container d-flex flex-column align-items-center ">
                        {activeStep === 0 && <DatosPersonales />}
                        {activeStep === 1 && <DatosContacto />}

                        {activeStep === 2 && <h1>Nivel de Formación</h1>}
                        <Box className="mt-3">
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
                                onClick={handleNext}
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
export default Registro;

const DatosPersonales = () => {
    return (
        <Box className="mt-4 col-12 col-md-4 d-flex flex-wrap ">
            <FormikTextField
                className="m-2  col-12"
                name="nombre_completo"
                label="Nombre Completo"
            />
            <FormikTextField className="m-2  col-12" name="DNI" label="DNI" />
            <FormikDatePicker
                className="m-2  col-12"
                name="fecha_nacimiento"
                label="Fecha de Nacimiento"
                type="date"
            />
            <FormikSelectField
                className="m-2  col-12"
                name="pais"
                label="Pais"
                type="select"
                options={countries}
            />
            <FormikSelectField
                className="m-2  col-12"
                name="provincia"
                label="Provincia/Estado"
                type="select"
                options={countries}
            />
        </Box>
    );
};

const DatosContacto = () => {
    return (
        <Box className="mt-5 col-6">
            <FormikTextField name="localidad" label="Localidad" />
            <FormikTextField name="calle" label="Calle" />
            <FormikTextField name="numero" label="Número" />
            <FormikTextField name="depto" label="Depto*" />
            <FormikTextField name="piso" label="Piso*" />
            <FormikTextField name="codigo_postal" label="CP" />
            <FormikTextField name="telefono" label="Télefono" />
            <FormikTextField name="email" label="Email" />
        </Box>
    );
};
