// Importa las dependencias necesarias
import { useState } from "react";
import { useAuth } from "../context/AuthContext";
import { useNavigate } from "react-router-dom";

const Login = () => {
    const [User, setUser] = useState({
        email: "",
        password: "",
    });
    const [Error, setError] = useState(null);

    const { login } = useAuth();
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
        setError("");
        try {
            const currentUser = await login(User.email, User.password);
            if(currentUser) {
                navigate("/");
            }
        } catch (error) {
            setError(error);
            console(Error);
        }
    };

    return (
        <>
            <div className="sign-in-container">
                <form className="mx-auto col-lg-10" onSubmit={handleSubmit}>
                    <h1 className="text-center mb-4">Log Into your Account</h1>
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
                        Login
                    </button>
                </form>
            </div>
        </>
    );
};

export default Login;
