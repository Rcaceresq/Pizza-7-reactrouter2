import React from "react";
import { Routes, Route, Navigate, Outlet } from "react-router-dom";

import Navbar from "./components/Navbar.jsx";
import Header from "./components/Header.jsx";
import Footer from "./components/Footer.jsx";

import Home from "./pages/Home.jsx";
import Register from "./pages/Register.jsx";
import Login from "./pages/Login.jsx";
import Cart from "./pages/Cart.jsx";
import Pizza from "./pages/Pizza.jsx";
import Profile from "./pages/Profile.jsx";
import NotFound from "./pages/NotFound.jsx";

import { useUser } from "./context/UserContext.jsx";

// Layout para envolver páginas con Navbar/Footer
function Layout() {
  return (
    <div className="d-flex flex-column min-vh-100">
      <Navbar />
      {/* Header solo en Home, lo manejamos dentro de cada página si se requiere */}
      <div className="container my-4 flex-grow-1">
        <Outlet />
      </div>
      <Footer />
    </div>
  );
}

// Ruta protegida: requiere token === true
function RequireAuth() {
  const { token } = useUser();
  return token ? <Outlet /> : <Navigate to="/login" replace />;
}

// Si ya está logueado, no debe entrar a login/register
function RedirectIfAuth() {
  const { token } = useUser();
  return token ? <Navigate to="/" replace /> : <Outlet />;
}

export default function App() {
  return (
    <Routes>
      <Route element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="pizza/:id" element={<Pizza />} />
        <Route path="cart" element={<Cart />} />

        <Route element={<RedirectIfAuth />}>
          <Route path="login" element={<Login />} />
          <Route path="register" element={<Register />} />
        </Route>

        <Route element={<RequireAuth />}>
          <Route path="profile" element={<Profile />} />
        </Route>

        <Route path="404" element={<NotFound />} />
        <Route path="*" element={<Navigate to="/404" replace />} />
      </Route>
    </Routes>
  );
}