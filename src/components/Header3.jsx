import React, { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";

export default function Header3() {
    const [isMobileMenuOpen, setMobileMenuOpen] = useState(false);
    const [shouldShowMenu, setShouldShowMenu] = useState(true);
    const navigate = useNavigate();
    const toggleMobileMenu = () => {
        setMobileMenuOpen(!isMobileMenuOpen);
    };

    const closeMobileMenu = () => {
        setMobileMenuOpen(false);
    };

    useEffect(() => {
        // Verificar la URL actual y ocultar el menú si es diferente a "/"
        setShouldShowMenu(window.location.pathname == "/");
    }, [window.location.pathname]);

    return (
        <header>
            <div>
                <Link to="/" className="icon">
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="30"
                        height="30"
                        fill="currentColor"
                        className="bi bi-feather"
                        viewBox="0 0 16 16"
                    >
                        <path d="M15.807.531c-.174-.177-.41-.289-.64-.363a3.8 3.8 0 0 0-.833-.15c-.62-.049-1.394 0-2.252.175C10.365.545 8.264 1.415 6.315 3.1S3.147 6.824 2.557 8.523c-.294.847-.44 1.634-.429 2.268.005.316.05.62.154.88q.025.061.056.122A68 68 0 0 0 .08 15.198a.53.53 0 0 0 .157.72.504.504 0 0 0 .705-.16 68 68 0 0 1 2.158-3.26c.285.141.616.195.958.182.513-.02 1.098-.188 1.723-.49 1.25-.605 2.744-1.787 4.303-3.642l1.518-1.55a.53.53 0 0 0 0-.739l-.729-.744 1.311.209a.5.5 0 0 0 .443-.15l.663-.684c.663-.68 1.292-1.325 1.763-1.892.314-.378.585-.752.754-1.107.163-.345.278-.773.112-1.188a.5.5 0 0 0-.112-.172M3.733 11.62C5.385 9.374 7.24 7.215 9.309 5.394l1.21 1.234-1.171 1.196-.027.03c-1.5 1.789-2.891 2.867-3.977 3.393-.544.263-.99.378-1.324.39a1.3 1.3 0 0 1-.287-.018Zm6.769-7.22c1.31-1.028 2.7-1.914 4.172-2.6a7 7 0 0 1-.4.523c-.442.533-1.028 1.134-1.681 1.804l-.51.524zm3.346-3.357C9.594 3.147 6.045 6.8 3.149 10.678c.007-.464.121-1.086.37-1.806.533-1.535 1.65-3.415 3.455-4.976 1.807-1.561 3.746-2.36 5.31-2.68a8 8 0 0 1 1.564-.173" />
                    </svg>
                    <h3>asociacion de enfermeria pediatrica argentina</h3>
                </Link>
            </div>
            <div className="header-action">
                {shouldShowMenu && (
                    <>
                        <div className="menu-icon" onClick={toggleMobileMenu}>
                            ☰
                        </div>
                        <nav className="navbarstyle">
                            <ul className={isMobileMenuOpen ? "menu-open" : ""}>
                                <li onClick={closeMobileMenu}>
                                    <a href="#seccion1">Inicio</a>
                                </li>
                                <li onClick={closeMobileMenu}>
                                    <a href="#seccion2">Cursos</a>
                                </li>
                                <li onClick={closeMobileMenu}>
                                    <a href="#seccion3">Nosotros</a>
                                </li>
                                <li onClick={closeMobileMenu}>
                                    <a href="#seccion4">Anuncios y eventos</a>
                                </li>
                            </ul>
                        </nav>
                    </>
                )}
                <div className="login-icon">
                    <AccountCircleIcon sx={{ fontSize: "3rem" }} onClick={() => navigate("/login")} />
                </div>
            </div>
        </header>
    );
}
