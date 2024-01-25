import { Formik, Field, Form, ErrorMessage } from "formik";
import { Error } from "../components/Error.jsx";
import { InputField, SelectField } from "../components/Controles.jsx";
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
      country.codeValue === countryCode || country.nameValue === countryName
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
          <h1 className="text-center h1 mb-2 text-black">Inscripción</h1>
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

                <InputField
                  className="form-floating  mb-1"
                  type="text"
                  name="nombre_completo"
                  placeholder="Nombre Completo"
                  label="Nombre Completo"
                />
                {/* DNI */}
                <InputField
                  className="form-floating  mb-1"
                  type="text"
                  name="DNI"
                  placeholder="DNI"
                  label="DNI"
                />
                {/* Fecha de Nacimiento */}
                <InputField
                  className="form-floating mb-1 "
                  type="text"
                  name="fecha_nacimiento"
                  placeholder="fecha_nacimiento"
                  label="Fecha Nacimiento"
                />
                {/* Pais */}
                <SelectField
                  className="form-floating mb-1 "
                  name="pais"
                  placeholder="pais"
                  label="Pais"
                  options={countries}
                />
                {/* Provincia */}
                <InputField
                  className="form-floating mb-1 "
                  type="text"
                  name="provincia"
                  placeholder="provincia"
                  label="Provincia"
                />
                {/* Localidad */}
                <InputField
                  className="form-floating mb-1 "
                  type="text"
                  name="localidad"
                  placeholder="localidad"
                  label="Localidad"
                />
                {/* Calle */}
                <InputField
                  className="form-floating mb-1 "
                  type="text"
                  name="calle"
                  placeholder="calle"
                  label="Calle"
                />

                {/* Numero */}
                <InputField
                  className="form-floating mb-1 "
                  name="numero"
                  placeholder="numero"
                  label="Calle"
                />
                {/* Departamento */}
                <InputField
                  className="form-floating mb-1 "
                  type="text"
                  name="dept"
                  placeholder="departamento"
                  label="dept"
                />
                {/* Piso */}
                <InputField
                  className="form-floating mb-1 "
                  type="text"
                  name="piso"
                  placeholder="piso"
                  label="Piso"
                />
                {/* Código Postal */}
                <InputField
                  className="form-floating mb-1"
                  type="text"
                  name="codigo_postal"
                  placeholder="Código Postal"
                  label="Código Postal"
                />

                {/* Código Telefono */}
                <SelectField
                  className="form-floating mb-1"
                  name="codigo_tel"
                  label="Código Teléfono"
                  options={countiesCode} // Asegúrate de tener esta lista disponible
                />

                {/* Teléfono */}
                <InputField
                  className="form-floating mb-1"
                  type="text"
                  name="telefono"
                  placeholder="Teléfono"
                  label="Teléfono"
                />

                {/* Email */}
                <InputField
                  className="form-floating mb-1"
                  type="email"
                  name="email"
                  placeholder="Correo Electrónico"
                  label="Correo Electrónico"
                />
                <button
                  className="btn btn-primary btn-block w-50 mb-1"
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
