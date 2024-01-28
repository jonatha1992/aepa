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

import { countries } from "../security/Tools";

console.log(countries);

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

const Registro = () => {
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

    // Puedes crear componentes similares para otros tipos de campos si es necesario.

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
                    nombre_completo: "Jonathan Gabriel Correa",
                    DNI: "371261545",
                    fecha_nacimiento: "29/12/1992",
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
                    <Form>
                        {activeStep === 0 && (
                            <DatosPersonales
                                FormikTextField={FormikTextField}
                                FormikDatePicker={FormikDatePicker}
                            />
                        )}
                        {activeStep === 1 && (
                            <DatosContacto FormikTextField={FormikTextField} />
                        )}

                        {activeStep === 2 && (
                            <DatosContacto FormikTextField={FormikTextField} />
                        )}
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
export default Registro;

const DatosPersonales = ({ FormikTextField, FormikDatePicker }) => {
    return (
        <Box>
            <FormikTextField name="nombre_completo" label="Nombre Completo" />
            <FormikTextField name="DNI" label="DNI" />
            <FormikDatePicker
                name="fecha_nacimiento"
                label="Fecha de Nacimiento"
                type="date"
            />
            {/* Agrega aquí más campos de datos personales si es necesario */}
        </Box>
    );
};

const DatosContacto = ({ FormikTextField, FormikSelectField, countries }) => {
    return (
        <Box>
            <FormikSelectField name="pais" label="Pais" options={countries} />
            <FormikTextField name="email" label="Correo Electrónico" />
            <FormikTextField name="telefono" label="Teléfono" />
        </Box>
    );
};
