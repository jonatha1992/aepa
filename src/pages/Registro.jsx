import { Formik, Form } from "formik";
import {
    InputField,
    SelectField,
    DatePickerField,
    CheckboxField,
} from "../components/Controles.jsx";
import * as Yup from "yup";
import { useRef } from "react";
import { countries as countriesList } from "countries-list";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "../css/registro.css";

const countryCode = "+54";
const countryName = "Argentina";

const countries = Object.keys(countriesList).map((code) => {
    const country = countriesList[code];
    return {
        label: `${country.name}`,
        value: country.name,
    };
});

const countiesCode = Object.keys(countriesList).map((code) => {
    const countieCode = countriesList[code];
    return {
        label: `${countieCode.name} (+${countieCode.phone})`,
        value: `+${countieCode.phone}`,
    };
});

const defaultCountry =
    countries.find(
        (country) =>
            country.codeValue === countryCode ||
            country.nameValue === countryName
    ) || countries[0];

const defaultCodigo = defaultCountry.codeValue;
const defaultPais = defaultCountry.nameValue;

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
    const formRef = useRef();

    const handleSubmit = async (
        values,
        { setSubmitting, resetForm, setErrors }
    ) => {
        setErrors({});
        try {
            console.log(values);
            toast.success("¡El formulario se envió con éxito!");
        } catch (error) {
            console.log(error.text);
            toast.error("¡Hubo un error al enviar el formulario!");
        }

        setSubmitting(true);
        resetForm();
    };

    return (
        <>
            <div className="container ">
                <div className="row ">
                    <ToastContainer
                        autoClose={2000}
                        className="toast-container"
                        style={{
                            position: "relative",
                            top: "0",
                            zIndex: "9999",
                        }}
                    />

                    <h1 className="text-center h1 mb-2 text-black">
                        Inscripción
                    </h1>
                    <div className=" p-3 rounded-5 form-registro ">
                        <Formik
                            initialValues={{
                                nombre_completo: "",
                                DNI: "",
                                fecha_nacimiento: "",
                                pais: defaultPais,
                                provincia: "",
                                localidad: "",
                                calle: "",
                                numero: "",
                                dept: "",
                                piso: "",
                                codigo_postal: "",
                                codigo_tel: defaultCodigo,
                                telefono: "",
                                email: "",
                            }}
                            validationSchema={validationSchema}
                            onSubmit={handleSubmit}
                            validateOnSubmit={true}
                            validateOnChange={false}
                            validateOnBlur={false}
                        >
                            <Form
                                className=" container  text-black   "
                                ref={formRef}
                            >
                                <div className="d-flex ">
                                    <section className=" col-md-6">
                                        <h1 className="start h2 mb-2 text-white">
                                            Datos Personales
                                        </h1>
                                        <div className="row justify-content-between">
                                            {/* nombre completo */}
                                            <InputField
                                                className="form-floating  mb-1 p-1  col-md-3"
                                                type="text"
                                                name="nombre_completo"
                                                placeholder="Nombre Completo"
                                                label="Nombre Completo"
                                            />

                                            {/* DNI */}
                                            <InputField
                                                className="form-floating  mb-1 p-1 col-md-2 col-6"
                                                type="text"
                                                name="DNI"
                                                placeholder="DNI"
                                                label="DNI"
                                            />
                                            {/* Fecha de Nacimiento */}
                                            <DatePickerField
                                                className="form-floating mb-1 p-1  col-md-2 col-6"
                                                type="date"
                                                name="fecha_nacimiento"
                                                placeholder="fecha nacimiento"
                                                label="Fecha Nacimiento"
                                            />

                                            {/* Pais */}
                                            <SelectField
                                                className="form-floating  mb-1 p-1  col-md-2 col-6 "
                                                name="pais"
                                                placeholder="pais"
                                                label="Pais"
                                                options={countries}
                                            />
                                        </div>
                                        <div className="row justify-content-between ">
                                            {/* Provincia */}
                                            <InputField
                                                className="form-floating  mb-1 p-1  col-md-3 col-6"
                                                type="text"
                                                name="provincia"
                                                placeholder="provincia"
                                                label="Provincia"
                                            />
                                            {/* Localidad */}
                                            <InputField
                                                className="form-floating  mb-1 p-1 col-md-2 col-6"
                                                type="text"
                                                name="localidad"
                                                placeholder="localidad"
                                                label="Localidad"
                                            />
                                            {/* Calle */}
                                            <InputField
                                                className="form-floating  mb-1 p-1 col-md-3 col-6"
                                                type="text"
                                                name="calle"
                                                placeholder="calle"
                                                label="Calle"
                                            />

                                            {/* Numero */}
                                            <InputField
                                                className="form-floating  mb-1 p-1 col-md-1 col-3"
                                                name="numero"
                                                placeholder="numero"
                                                label="Numero"
                                            />
                                            {/* Departamento */}
                                            <InputField
                                                className="form-floating  mb-1 p-1 col-md-1 col-2"
                                                type="text"
                                                name="dept"
                                                placeholder="departamento"
                                                label="Dept."
                                            />
                                            {/* Piso */}
                                            <InputField
                                                className="form-floating  mb-1 p-1 col-md-1 col-2"
                                                type="text"
                                                name="piso"
                                                placeholder="piso"
                                                label="Piso"
                                            />
                                            {/* Código Postal */}
                                            <InputField
                                                className="form-floating mb-1 p-1 col-md-1 col-3"
                                                type="text"
                                                name="codigo_postal"
                                                placeholder="Código Postal"
                                                label="CP"
                                            />
                                        </div>
                                        <div className="row justify-content-between">
                                            {/* Código Telefono */}
                                            <SelectField
                                                className="form-floating mb-1 p-1 col-md-3 col-5"
                                                name="codigo_tel"
                                                label="Cód. Teléfono"
                                                options={countiesCode} // Asegúrate de tener esta lista disponible
                                            />

                                            {/* Teléfono */}
                                            <InputField
                                                className="form-floating mb-1 p-1 col-md-3 col-7"
                                                type="text"
                                                name="telefono"
                                                placeholder="Teléfono"
                                                label="Teléfono"
                                            />

                                            {/* Email */}
                                            <InputField
                                                className="form-floating mb-1 p-1 col-md-6 col-12"
                                                type="email"
                                                name="email"
                                                placeholder="Correo Electrónico"
                                                label="Correo Electrónico"
                                            />
                                        </div>
                                    </section>
                                    <section className=" col-md-4">
                                        <h1 className=" h2 mb-2 text-white ">
                                            Nivel de Formacion
                                        </h1>
                                        <div className="d-flex flex-column">
                                            <CheckboxField
                                                className="form-check"
                                                name="Estudiante"
                                                label="Estudiante de Enfermeria tercer año en curso"
                                            />
                                            <CheckboxField
                                                className="form-check"
                                                name="Enfermero"
                                                label="Enfermero/a"
                                            />
                                            <CheckboxField
                                                className="form-check"
                                                name="Licenciado"
                                                label="Licenciado en enfermerÍa"
                                            />
                                            <CheckboxField
                                                className=" form-check"
                                                name="Magister"
                                                label="Magister en enfermerÍa"
                                            />
                                            <CheckboxField
                                                className=" form-check   "
                                                name="Doctorado"
                                                label="Doctorado en enfermerÍa"
                                            />
                                        </div>
                                    </section>
                                    <section className="col-md-4">
                                        <h1 className="h2 mb-2  text-white">
                                            Nivel de Formacion
                                        </h1>

                                        <InputField
                                            className="form-floating mb-1 p-1 col-12"
                                            name="Institucion"
                                            placeholder="Institucion"
                                            label="Institución"
                                        />
                                        <InputField
                                            className="form-floating mb-1 p-1 col-12"
                                            name="Puesto"
                                            placeholder="Puesto"
                                            label="Puesto que ocupa en la Instutución"
                                        />
                                    </section>
                                </div>

                                <div className="row justify-content-center">
                                    <button
                                        className="btn btn-primary  mb-1 col-12 col-md-3"
                                        type="submit"
                                    >
                                        Registrarse
                                    </button>
                                </div>
                            </Form>
                        </Formik>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Registro;
