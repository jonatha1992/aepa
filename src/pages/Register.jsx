// Importa las dependencias necesarias
import { useState } from "react";
import { useAuth } from "../context/AuthContext";
import { useNavigate } from "react-router-dom";
import { Alert } from "../components/Alert";
import { agregarUser } from "../controllers/controllerUser";

const Register = () => {
    const [newUser, setnewUser] = useState({
        email: "",
        password: "",
        displayName: "",
    })
    const [Error, setError] = useState(null);
    const { signup } = useAuth();

    const navigate = useNavigate();

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
        try {
            const result = await signup(
                newUser.email,
                newUser.password,
                newUser.displayName
            );
            newUser.uid = result.user.uid;
            await agregarUser(newUser);
            navigate("/login");
        } catch (error) {
            if (
                newUser.email === "" ||
                newUser.password === "" ||
                newUser.displayName === ""
            ) {
                setError("Todos los campos son obligatorios");
            }
            if (
                error.code === "auth/internal-error" ||
                error.code === "auth/invalid-email"
            ) {
                setError("Correo Invalido");
            }
            if (error.code === "auth/email-already-in-use") {
                setError("ya existe el email registrado");
            }
            if (error.code === "auth/weak-password") {
                setError("La contraseña debe tener al menos 6 caracteres");
            }
        }
    };

    return (
        <>
            {Error && <Alert message={Error} />}
            <div className="sign-in-container m-4">
                <form className="mx-auto col-lg-12" onSubmit={handleSubmit}>
                    <h1 className="text-center mb-4">Signup your Account</h1>
                    <div className="form-floating mb-3">
                        <input
                            type="text"
                            className="form-control"
                            placeholder="Enter your name"
                            name="displayName"
                            value={newUser.displayName}
                            onChange={handleChange}
                        />
                        <label>Name complete</label>
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
                        <label>Email address</label>
                    </div>
                    <div className="form-floating mb-4">
                        <input
                            type="password"
                            className="form-control"
                            placeholder="********"
                            name="password"
                            value={newUser.password}
                            onChange={handleChange}
                        />
                        <label>Password</label>
                    </div>
                    <button className="btn btn-primary btn-lg col-5">
                        Register
                    </button>
                </form>
            </div>
        </>
    );
};

export default Register;
