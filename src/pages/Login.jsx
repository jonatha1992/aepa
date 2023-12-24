// Importa las dependencias necesarias
import { useState } from "react";
import { useAuth } from "../context/AuthContext";
import { Link, useNavigate } from "react-router-dom";
import { Alert } from "../components/Alert";

const Login = () => {
    const [User, setUser] = useState({
        email: "",
        password: "",
    });
    const [Error, setError] = useState(null);

    const { login, loginWithGoogle, resetPassword } = useAuth();
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
            await login(User.email, User.password);
            navigate("/");
        } catch (error) {
            setError(error.message);
            console.log(Error);
        }
    };

    const handleGoogleSignin = async () => {
        try {
            await loginWithGoogle();
            navigate("/");
        } catch (error) {
            setError(error.message);
        }
    };

    const handleResetPassword = async (e) => {
        e.preventDefault();
        if (!User.email) return setError("Write an email to reset password");
        try {
            await resetPassword(User.email);
            setError("We sent you an email. Check your inbox");
        } catch (error) {
            setError(error.message);
        }
    };
    return (
        <>
            <div className="sign-in-container m-4">
                {Error && <Alert message={Error} />}
                <form className="mx-auto col-lg-12" onSubmit={handleSubmit}>
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
                    <div className="d-flex justify-content-between">
                        <button className="btn btn-primary btn-lg w-50">
                            Login
                        </button>
                        <a
                            className="d-inline-block align-baseline fw-bold fs-6 text-primary hover-primary"
                            href="#!"
                            onClick={handleResetPassword}
                        >
                            Forgot Password?
                        </a>
                    </div>
                </form>
                <button
                    onClick={handleGoogleSignin}
                    className="btn btn-outline-secondary d-flex align-items-center justify-content-center w-100 my-3"
                >
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="16"
                        height="16"
                        fill="currentColor"
                        className="bi bi-google m-2"
                        viewBox="0 0 16 16"
                    >
                        <path d="M15.545 6.558a9.42 9.42 0 0 1 .139 1.626c0 2.434-.87 4.492-2.384 5.885h.002C11.978 15.292 10.158 16 8 16A8 8 0 1 1 8 0a7.689 7.689 0 0 1 5.352 2.082l-2.284 2.284A4.347 4.347 0 0 0 8 3.166c-2.087 0-3.86 1.408-4.492 3.304a4.792 4.792 0 0 0 0 3.063h.003c.635 1.893 2.405 3.301 4.492 3.301 1.078 0 2.004-.276 2.722-.764h-.003a3.702 3.702 0 0 0 1.599-2.431H8v-3.08h7.545z" />
                    </svg>
                    Google login
                </button>
                <p className="mt-4 mb-0 fs-7 px-3 d-flex justify-content-between">
                    Don't have an account?
                    <Link
                        to="/register"
                        className="text-primary hover-primary "
                    >
                        Register
                    </Link>
                </p>
            </div>
        </>
    );
};

export default Login;
