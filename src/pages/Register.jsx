// Importa las dependencias necesarias
import { useState } from "react";
import { useAuth } from "../context/AuthContext";
import { useNavigate } from "react-router-dom";

const Register = () => {
    const [User, setUser] = useState({
        email: "",
        password: "",
    });
    const [Error, setError] = useState(null);

    const { signup } = useAuth();
    const navigate = useNavigate();

    const handleChange = (e) => {
        const { name, value } = e.target;
        setUser({
            ...User,
            [name]: value,
        });
    };

    // Manejador de envío del formulario
    const handleSubmit = async (e) => {
        e.preventDefault();
        setError('')
        try {
            await signup(User.email, User.password);
            navigate("/");
        } catch (error) {
            if(error.code === 'auth/internal-error'){
                setError("Correo Invalido");
            }
            if(error.code === 'auth/email-already-in-use'){
                setError("ya existe el email registrado")
            }  
            console.log(Error);
        }
    };

    return (
        <>
            <div className="sign-in-container">
                <form className="mx-auto col-lg-10" onSubmit={handleSubmit}>
                    <h1 className="text-center mb-4">Signup your Account</h1>
                    <div className="form-floating mb-3">
                        <input
                            type="email"
                            className="form-control"
                            placeholder="Enter your email"
                            name="email"
                            value={User.email}
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
                            value={User.password}
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
