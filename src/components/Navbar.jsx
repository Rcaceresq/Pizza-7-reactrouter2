import React from "react";
import { NavLink, Link } from "react-router-dom";
import { useCart } from "../context/CountContext.jsx";
import { useUser } from "../context/UserContext.jsx";

const formatCLP = (v) =>
  Number(v || 0).toLocaleString("es-CL", { style: "currency", currency: "CLP" });

export default function Navbar() {
  const active = ({ isActive }) => (isActive ? "nav-link active" : "nav-link");
  const { total } = useCart();
  const { token, logout } = useUser();

  return (
    <nav className="navbar navbar-expand-lg bg-dark navbar-dark px-3">
      <div className="container-fluid">
        <Link className="navbar-brand fw-bold" to="/">
          🍕 Pizzería Mamma Mía
        </Link>

        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarsExample07"
          aria-controls="navbarsExample07"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="navbarsExample07">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item"><NavLink className={active} to="/">Home</NavLink></li>
            <li className="nav-item"><NavLink className={active} to="/cart">Cart</NavLink></li>
            {token ? (
              <>
                <li className="nav-item"><NavLink className={active} to="/profile">Profile</NavLink></li>
                <li className="nav-item">
                  <button className="btn btn-link nav-link" onClick={logout}>Logout</button>
                </li>
              </>
            ) : (
              <>
                <li className="nav-item"><NavLink className={active} to="/login">Login</NavLink></li>
                <li className="nav-item"><NavLink className={active} to="/register">Register</NavLink></li>
              </>
            )}
          </ul>

          <Link className="btn btn-info text-dark fw-semibold" to="/cart">
            🛒 Total: {formatCLP(total)}
          </Link>
        </div>
      </div>
    </nav>
  );
}