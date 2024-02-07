import React, { useState } from "react";
import { useAuth } from "../context/AuthContext";
import { Link, useNavigate } from "react-router-dom";
import logo from "../assets/logo-aepa.png";

export default function Header() {
  const { User, logout } = useAuth();
  const navigate = useNavigate();
  const [showMenu, setShowMenu] = useState(false);

  const handleLogout = async () => {
    await logout();
    // Redirigir a la página de inicio de sesión después del cierre de sesión
    navigate("/login");
  };

  const toggleMenu = () => {
    setShowMenu(!showMenu);
  };

  return (
    <nav
      className="navbar"
      style={{
        borderRadius: "0.5rem",
        backgroundColor: "rgb(73 80 87);",
      }}
    >
      <div className="container-fluid">
        <Link to="/">
          <img
            src={logo}
            alt=""
            style={{ height: "4rem", borderRadius: "3rem" }}
          />
        </Link>
        <div className="d-flex align-items-center">
          {User ? (
            <div className="avatar-container" onClick={toggleMenu}>
              <img
                src={User.avatar}
                alt="Avatar"
                className="avatar"
                style={{ height: "4rem", borderRadius: "3rem" }}
              />
              {showMenu && (
                <div
                  className="dropdown-menu"
                  style={{ display: "block", textAlign: "end", right: "0" }}
                >
                  <ul className="">
                    <li
                      className=""
                      style={{ listStyle: "none", paddingTop: "1rem" }}
                    >
                      <Link to="/profile">Profile</Link>
                    </li>
                    <li style={{ listStyle: "none", paddingTop: "1rem" }}>
                      <Link to="/dashboard">Dashboard</Link>
                    </li>
                    <li style={{ listStyle: "none", paddingTop: "1rem" }}>
                      <hr className="dropdown-divider" />
                    </li>
                    <li
                      onClick={handleLogout}
                      style={{ listStyle: "none", paddingTop: "1rem" }}
                    >
                      <a href="">Logout</a>
                    </li>
                  </ul>
                </div>
              )}
            </div>
          ) : (
            <button className="mt-3">
              <Link to="/login">Login</Link>
            </button>
          )}
        </div>
      </div>
    </nav>
  );
}
