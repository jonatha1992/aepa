import "../css/menu.css";
import { Link, useNavigate } from "react-router-dom";
import { useAuth } from "../context/AuthContext";

export default function Menu() {
    const { User, logout, Loading } = useAuth();
    const navigate = useNavigate();
    const handleLogout = async () => {
        await logout();
        navigate("/login");
        if (!Loading) {
            return <h1>Loading</h1>;
        }
    };

    const handleLogin = () => {
      window.location.href = '/login';
    };

    return (
        <div className="container justify-content-center">
            {User ? (
                <>
                    <h2 className="text-center mb-4">Welcome {User.email}</h2>
                    <div className="grid-container">
                        <div
                            className="grid-item"
                            style={{ backgroundColor: "green" }}
                        >
                            <Link to={"/cursos"}>Cursos</Link>
                        </div>
                        <div
                            className="grid-item"
                            style={{ backgroundColor: "yellow" }}
                        >
                            <Link to={"/eventos"}>Eventos</Link>
                        </div>
                        <div
                            className="grid-item"
                            style={{ backgroundColor: "red" }}
                        >
                            <Link to={"/contenido"}>Contenido</Link>
                        </div>
                    </div>
                    <button onClick={handleLogout} className="mt-3">
                        Logout
                    </button>
                </>
            ) : (
              <>
                <div className="text-center">
                    <h1>User does not exist</h1>
                </div>
                <button onClick={handleLogin} className="mt-3">
                    Login
                </button>
            </>
            )}
        </div>
    );
}
