import { Formik, Field, Form, ErrorMessage } from "formik";
import { Error } from "../components/Error.jsx";
import * as Yup from "yup";
import { useRef } from "react";
import { countries as countriesList } from "countries-list";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const countryCode = "+54";
const countryName = "Argentina";

const countries = Object.keys(countriesList).map((code) => {
    const country = countriesList[code];
    return {
        codeLabel: `${country.name} (+${country.phone})`,
        codeValue: `+${country.phone}`,
        nameLabel: `${country.name}`,
        nameValue: country.name,
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

console.log(defaultCodigo);
console.log(defaultPais);

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
            <div className="container">
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
                    <div className=" bg-danger-subtle p-3 rounded-5 ">
                        <Formik
                            initialValues={{
                                nombre_completo: "JONATHAN GABRIEL CORREA",
                                DNI: "37216265",
                                fecha_nacimiento: "29/05/2000",
                                pais: defaultPais,
                                provincia: "Buenos Aires",
                                localidad: "San Isidro",
                                calle: "Siempre viva",
                                numero: "123",
                                dept: "33",
                                piso: "A",
                                codigo_postal: "1759",
                                codigo_tel: defaultCodigo,
                                telefono: "115996543",
                                email: "JONATHANGABRIELCORRE@HOST.COM",
                            }}
                            validationSchema={validationSchema}
                            onSubmit={handleSubmit}
                            validateOnSubmit={true}
                            validateOnChange={false}
                            validateOnBlur={false}
                        >
                            <Form
                                className=" container d-flex flex-column text-black"
                                ref={formRef}
                            >
                                {/* nombre completo */}

                                <div className="row justify-content-around ">
                                    <div className=" form-floating  col-sm-12 col-md-3 p-1 ">
                                        <Field
                                            type="text"
                                            className="form-control"
                                            name="nombre_completo"
                                            placeholder="Nombre Completo"
                                        />
                                        <label htmlFor="nombre_completo">
                                            Nombre Completo
                                        </label>
                                        <ErrorMessage
                                            name="nombre_completo"
                                            component={(props) => (
                                                <Error
                                                    message={props.children}
                                                />
                                            )}
                                        />
                                    </div>
                                    {/* DNI */}
                                    <div className=" form-floating col-sm-12 col-md-2 p-1">
                                        <Field
                                            type="text"
                                            className="form-control"
                                            name="DNI"
                                            placeholder="DNI"
                                        />
                                        <label htmlFor="DNI">
                                            DNI / PASSAPORTE
                                        </label>
                                        <ErrorMessage
                                            name="DNI"
                                            component={(props) => (
                                                <Error
                                                    message={props.children}
                                                />
                                            )}
                                        />
                                    </div>
                                    {/* Fecha de Nacimiento */}
                                    <div className="form-floating col-sm-12 col-md-2 p-1">
                                        <Field
                                            type="text"
                                            className="form-control"
                                            name="fecha_nacimiento"
                                            placeholder="Fecha de Nacimiento"
                                        />
                                        <label htmlFor="fecha_nacimiento">
                                            Fecha de Nacimiento
                                        </label>
                                        <ErrorMessage
                                            name="fecha_nacimiento"
                                            component={(props) => (
                                                <Error
                                                    message={props.children}
                                                />
                                            )}
                                        />
                                    </div>
                                    {/* Pais */}
                                    <div className="form-floating col-sm-12 col-md-2 p-1">
                                        <Field
                                            as="select"
                                            className="form-control"
                                            name="pais"
                                        >
                                            {countries.map((pais, index) => (
                                                <option
                                                    key={index}
                                                    value={pais.value}
                                                >
                                                    {pais.nameLabel}
                                                </option>
                                            ))}
                                        </Field>
                                        <label htmlFor="pais">País</label>
                                        <ErrorMessage
                                            name="pais"
                                            component={(props) => (
                                                <Error
                                                    message={props.children}
                                                />
                                            )}
                                        />
                                    </div>
                                    {/* Provincia */}
                                    <div className="form-floating col-sm-12 col-md-2 p-1">
                                        <Field
                                            type="select"
                                            className="form-control"
                                            name="provincia"
                                            placeholder="Provincia"
                                        />
                                        <label htmlFor="provincia">
                                            Provincia
                                        </label>
                                        <ErrorMessage
                                            name="provincia"
                                            component={(props) => (
                                                <Error
                                                    message={props.children}
                                                />
                                            )}
                                        />
                                    </div>
                                </div>
                                <div className="row justify-content-around">
                                    {/* Localidad */}
                                    <div className="form-floating col-sm-12 col-md-2 p-1">
                                        <Field
                                            type="select"
                                            className="form-control"
                                            name="localidad"
                                            placeholder="Localidad"
                                        />
                                        <label htmlFor="localidad">
                                            Localidad
                                        </label>
                                        <ErrorMessage
                                            name="localidad"
                                            component={(props) => (
                                                <Error
                                                    message={props.children}
                                                />
                                            )}
                                        />
                                    </div>

                                    {/* Calle */}
                                    <div className="form-floating col-sm-12 col-md-2 p-1">
                                        <Field
                                            type="text"
                                            className="form-control"
                                            name="calle"
                                            placeholder="Calle"
                                        />
                                        <label htmlFor="calle">Calle</label>
                                        <ErrorMessage
                                            name="calle"
                                            component={(props) => (
                                                <Error
                                                    message={props.children}
                                                />
                                            )}
                                        />
                                    </div>

                                    {/* Numero */}
                                    <div className="form-floating col-sm-12 col-md-2 p-1">
                                        <Field
                                            type="text"
                                            className="form-control"
                                            name="numero"
                                            placeholder="Número"
                                        />
                                        <label htmlFor="numero">Número</label>
                                        <ErrorMessage
                                            name="numero"
                                            component={(props) => (
                                                <Error
                                                    message={props.children}
                                                />
                                            )}
                                        />
                                    </div>

                                    {/* Departamento */}
                                    <div className="form-floating col-sm-12 col-md-2 p-1">
                                        <Field
                                            type="text"
                                            className="form-control"
                                            name="dept"
                                            placeholder="Departamento"
                                        />
                                        <label htmlFor="dept">
                                            Departamento
                                        </label>
                                        <ErrorMessage
                                            name="dept"
                                            component={(props) => (
                                                <Error
                                                    message={props.children}
                                                />
                                            )}
                                        />
                                    </div>

                                    {/* Piso */}
                                    <div className="form-floating mb-3">
                                        <Field
                                            type="text"
                                            className="form-control"
                                            name="piso"
                                            placeholder="Piso"
                                        />
                                        <label htmlFor="piso">Piso</label>
                                        <ErrorMessage
                                            name="piso"
                                            component={(props) => (
                                                <Error
                                                    message={props.children}
                                                />
                                            )}
                                        />
                                    </div>

                                    {/* Código Postal */}
                                    <div className="form-floating mb-3">
                                        <Field
                                            type="text"
                                            className="form-control"
                                            name="codigo_postal"
                                            placeholder="Código Postal"
                                        />
                                        <label htmlFor="codigo_postal">
                                            Código Postal
                                        </label>
                                        <ErrorMessage
                                            name="codigo_postal"
                                            component={(props) => (
                                                <Error
                                                    message={props.children}
                                                />
                                            )}
                                        />
                                    </div>
                                    {/* Código Telefono */}
                                    <div className="form-floating mb-3">
                                        <Field
                                            as="select"
                                            className="form-control"
                                            name="codigo_tel"
                                        >
                                            {countries.map((code, index) => (
                                                <option
                                                    key={index}
                                                    value={code.codeValue}
                                                >
                                                    {code.codeLabel}
                                                </option>
                                            ))}
                                        </Field>
                                        <label htmlFor="codigo_tel">
                                            Codigo Pais
                                        </label>
                                        <ErrorMessage
                                            name="codigo_tel"
                                            component={(props) => (
                                                <Error
                                                    message={props.children}
                                                />
                                            )}
                                        />
                                    </div>
                                    {/* Teléfono */}
                                    <div className="form-floating mb-3">
                                        <Field
                                            type="text"
                                            className="form-control"
                                            name="telefono"
                                            placeholder="Teléfono"
                                        />
                                        <label htmlFor="telefono">
                                            Teléfono
                                        </label>
                                        <ErrorMessage
                                            name="telefono"
                                            component={(props) => (
                                                <Error
                                                    message={props.children}
                                                />
                                            )}
                                        />
                                    </div>

                                    {/* Email */}
                                    <div className="form-floating mb-3">
                                        <Field
                                            type="email"
                                            className="form-control"
                                            name="email"
                                            placeholder="Email"
                                        />
                                        <label htmlFor="email">
                                            Correo Electrónico
                                        </label>
                                        <ErrorMessage
                                            name="email"
                                            component={(props) => (
                                                <Error
                                                    message={props.children}
                                                />
                                            )}
                                        />
                                    </div>
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
                </div>
            </div>
        </>
    );
};

export default Registro;
