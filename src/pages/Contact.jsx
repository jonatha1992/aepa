// Importa las dependencias necesarias
import { useState } from "react";
// import { useAuth } from "../context/AuthContext";
// import { useNavigate } from "react-router-dom";
import { Alert } from "../components/Alert";
// import { agregarUser } from "../controllers/controllerUser";
import logo from "../assets/logo-aepa.png";

const Contact = () => {
    const [newUser, setnewUser] = useState({
        displayName: "",
        telephone: "",
        email: "",
        message: "",
    });
    const [Error, setError] = useState(null);
    // const { signup } = useAuth();
    // const navigate = useNavigate();

    const handleChange = (e) => {
        const { name, value } = e.target;
        setnewUser({
            ...newUser,
            [name]: value,
        });
    };

    // Manejador de envío del formulario
    const handleSubmit = async (e) => {
        e.preventDefault();
        setError("");
        if (
            newUser.displayName.trim() === "" ||
            newUser.telephone.trim() === "" ||
            newUser.email.trim() === "" ||
            newUser.mensaje.trim() === ""
        ) {
            setError("Todos los campos son obligatorios");
            return;
        }

        try {
            // Add your form submission logic here
            console.log("MANDAR MENSAJE USER A WHATSAP");
        } catch (error) {
            // Handle authentication errors
            if (
                error.code === "auth/internal-error" ||
                error.code === "auth/invalid-email"
            ) {
                setError("Correo Invalido");
            } else if (error.code === "auth/email-already-in-use") {
                setError("Ya existe el email registrado");
            } else if (error.code === "auth/weak-password") {
                setError("La contraseña debe tener al menos 6 caracteres");
            }
        }
    };

    return (
        <>
            <div
                className="container"
                style={{
                    marginTop: "1rem",
                    border: "2px solid #ffffff",
                    borderRadius: "1rem",
                }}
            >
                {/* {Error && <Alert message={Error} />} */}
                <div className="row justify-content-between">
                    <div className="sign-in-container col-lg-4 ">
                        <div className="sign-in-container m-4 col-8"></div>
                        <form
                            className="mx-auto col-lg-12"
                            onSubmit={handleSubmit}
                        >
                            <h1
                                className="text-center mb-4"
                                style={{ color: "white" }}
                            >
                                Contacto
                            </h1>
                            <div className="form-floating mb-3">
                                <input
                                    type="text"
                                    className="form-control"
                                    placeholder="Enter your name"
                                    name="displayName"
                                    value={newUser.displayName}
                                    onChange={handleChange}
                                />
                                <label>Nombre Completo</label>
                            </div>
                            <div className="form-floating mb-3">
                                <input
                                    type="number"
                                    className="form-control"
                                    placeholder="Enter your telephone"
                                    name="telephone"
                                    value={newUser.telephone}
                                    onChange={handleChange}
                                />
                                <label>Celular</label>
                            </div>
                            <div className="form-floating mb-3">
                                <input
                                    type="email"
                                    className="form-control"
                                    placeholder="Enter your email"
                                    name="email"
                                    value={newUser.email}
                                    onChange={handleChange}
                                />
                                <label>Email</label>
                            </div>

                            <div className="form-floating mb-4">
                                <input
                                    type="text"
                                    className="form-control"
                                    name="mensaje"
                                    value={newUser.mensaje}
                                    onChange={handleChange}
                                />
                                <label>Mensaje</label>
                            </div>
                            <button className="btn btn-primary btn-lg col-5 ">
                                Enviar
                            </button>
                        </form>
                    </div>
                    <div className="container col-lg-2 ">
                        <img className="img-fluid" src={logo} alt="" />
                    </div>
                    <div className="container col-lg-6 ">
                        <div>
                            <h3 className="text-center text-bg-light">Redes</h3>
                            <ul className="list-unstyled text-bg-light">
                                <li>AEPA FACEBOOK</li>
                                <li>AEPA INSTAGRAM</li>
                                <li>AEPA AEPA2023</li>
                            </ul>
                        </div>
                        <div>
                            <h3 className="text-center text-bg-light">
                                Asesorimiento
                            </h3>
                            <ul className="list-unstyled text-bg-light">
                                <li>
                                    <i src={logo}></i>Secretaria@hotmail.com
                                </li>
                                <li>011-4023-2792</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Contact;
