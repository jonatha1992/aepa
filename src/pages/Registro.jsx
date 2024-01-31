import React, { useState, useEffect } from "react";
import { Formik, Form, useFormikContext } from "formik";
import * as Yup from "yup";
import { Button, Stepper, Step, StepLabel, Box } from "@mui/material";
import {
    FormikTextField,
    FormikSelectField,
    FormikDatePicker,
    FormikCheckbox,
    FormikRadioButton,
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

import { countries, countiesCode, getStates } from "../security/Tools";
const defaultCode = { label: "Argentina (+54)", value: "+54" };
const defaultCountry = { label: "Argentina", value: "AR" };
const defaultState = { label: "Buenos Aires", value: "B" };

const validationSchemas = {
    0: Yup.object().shape({
        nombre_completo: Yup.string().required("El nombre es obligatorio"),
        DNI: Yup.string().required("El número es obligatorio"),
        fecha_nacimiento: Yup.string().required(
            "La fecha de nacimiento es obligatoria"
        ),
        pais: Yup.string().required("El país es obligatorio"),
        provincia: Yup.string().required(
            "La provincia o estado es obligatorio"
        ),
    }),
    1: Yup.object().shape({
        localidad: Yup.string().required("La localidad es obligatoria"),
        codigo_postal: Yup.string().required("El código postal es obligatorio"),
        calle: Yup.string().required("La calle es obligatoria"),
        numero: Yup.string().required("El número es obligatorio"),
        depto: Yup.string(),
        piso: Yup.string(),
        telefono: Yup.string().required("El número de celular es obligatorio"),
        email: Yup.string()
            .email("Correo electrónico no válido")
            .required("El correo electrónico es obligatorio"),
    }),
    2: Yup.object().shape({
        nivel: Yup.string().required("El nivel de  formacion es obligatorio"),
    }),
    3: Yup.object().shape({
        institucion: Yup.string().required("La institución es obligatoria"),
        puesto: Yup.string().required("El puesto es obligatorio"),
    }),

    // Agrega esquemas para los pasos restantes...
};

const Registro = () => {
    const [activeStep, setActiveStep] = useState(0);
    const isLastStep = activeStep === steps.length - 1;

    const handleNext = (values, formikBag) => {
        const currentSchema = validationSchemas[activeStep];
        currentSchema.validate(values, { abortEarly: false }).then(
            () => {
                setActiveStep((prev) => prev + 1);
                formikBag.setTouched({});
            },
            (err) => {
                const errors = err.inner.reduce((acc, error) => {
                    acc[error.path] = error.message;
                    return acc;
                }, {});
                // formikBag.setErrors(errors);
                // formikBag.setTouched(errors); // Marca los campos con errores como tocados
            }
        );
    };

    const handleBack = () => {
        setActiveStep((prevActiveStep) => prevActiveStep - 1);
    };

    const handleSubmit = (values, actions) => {
        if (isLastStep) {
            if (values.nivel === "Otro") {
                values.nivel = values.nivel_otro;
            }
            console.log(values);
            toast.success("Formulario enviado con éxito!");
            actions.resetForm();
        } else {
            handleNext(values, actions);
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
                    nombre_completo: "asdsad",
                    DNI: "123123",
                    fecha_nacimiento: "29/12/1992",
                    pais: defaultCountry.value,
                    provincia: defaultState.value,
                    localidad: "asdasd",
                    codigo_postal: "asdad",
                    calle: "asdasd",
                    numero: "sadasd",
                    dept: "",
                    piso: "",
                    telefono: "123123",
                    email: "asdas@asdas.com",
                    nivel: "Estudiante de Enfermeria",
                    nivel_otro: "",
                    institucion: "",
                    puesto: "",
                }}
                // validationSchema={validationSchema}
                validationSchema={validationSchemas[activeStep]}
                onSubmit={handleSubmit}
            >
                {({ isSubmitting }) => (
                    <Form className="container d-flex flex-column align-items-center ">
                        {activeStep === 0 && <DatosPersonales />}
                        {activeStep === 1 && <DatosContacto />}
                        {activeStep === 2 && <DatosNivelDeFormacion />}
                        {activeStep === 3 && <DatosAntecedentes />}
                        <Box className="mt-3">
                            <Button
                                className="m-2"
                                disabled={activeStep === 0}
                                onClick={handleBack}
                                variant="contained"
                                color="primary"
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
    const { values, setFieldValue } = useFormikContext();
    const [provincias, setProvincias] = useState([]);
    useEffect(() => {
        if (values.pais) {
            // Suponiendo que `getStates` devuelve un array de provincias basado en el código del país
            const estados = getStates(values.pais);
            setProvincias(estados);
            // Opcional: Establecer una provincia por defecto (puede ser la primera provincia, por ejemplo)
            setFieldValue("provincia", estados[0]?.value);
        }
    }, [values.pais, setFieldValue]);
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
                options={provincias}
            />
        </Box>
    );
};

const DatosContacto = () => {
    return (
        <Box className="mt-5 col-12 col-md-6  d-flex flex-wrap justify-content-between">
            <FormikTextField
                className="m-2 col-md-5 col-12"
                name="localidad"
                label="Localidad"
            />
            <FormikTextField
                className="m-2 col-md-6 col-12"
                name="calle"
                label="Calle"
            />
            <FormikTextField
                className="m-2 col-md-2 col-4"
                name="numero"
                label="Número"
            />
            <FormikTextField
                className="m-2 col-md-2 col-3"
                name="depto"
                label="Depto*"
            />
            <FormikTextField
                className="m-2 col-md-3 col-12"
                name="codigo_postal"
                label="CP"
            />
            <FormikTextField
                className="m-2 col-md-2 col-3"
                name="piso"
                label="Piso*"
            />
            <FormikTextField
                className="m-2 col-md-5 col-12"
                name="telefono"
                label="Télefono"
            />
            <FormikTextField
                className="m-2 col-md-6 col-12"
                name="email"
                label="Email"
            />
        </Box>
    );
};

const DatosNivelDeFormacion = () => {
    const { values } = useFormikContext();

    // Efecto para actualizar 'nivel' cuando 'nivel_otro' cambie

    return (
        <Box className="mt-5 col-10  col-md-7  d-flex  flex-column ms-md-auto ">
            <FormikRadioButton
                className="m-2"
                name="nivel"
                value="Estudiante de Enfermeria"
                label="Estudiante de Enfermeria"
            />
            <FormikRadioButton
                className="m-2 "
                name="nivel"
                value="Enfermero"
                label="Enfermero/a"
            />
            <FormikRadioButton
                className="m-2 "
                name="nivel"
                value="Licenciado en Enfermeria"
                label="Licenciado en Enfermeria"
            />
            <FormikRadioButton
                className="m-2 "
                name="nivel"
                value="Magister en Enfermeria"
                label="Magister en Enfermeria"
            />
            <FormikRadioButton
                className="m-2 "
                name="nivel"
                value="Doctorado en Enfermeria"
                label="Doctorado en Enfermeria"
            />
            <FormikRadioButton
                className="m-2 "
                value="Otro"
                name="nivel"
                label="Otro"
            />
            {values.nivel === "Otro" && (
                <FormikTextField
                    className="m-2"
                    name="nivel_otro"
                    label="Especifique Otro"
                />
            )}
        </Box>
    );
};

const DatosAntecedentes = () => {
    return (
        <Box className="mt-4 col-12 col-md-4 d-flex flex-wrap ">
            <FormikTextField
                className="m-2  col-12"
                name="institucion"
                label="Institución perteneciente"
            />
            <FormikTextField
                className="m-2  col-12"
                name="puesto"
                label="Puesto que ocupa en la institución"
            />
        </Box>
    );
};
