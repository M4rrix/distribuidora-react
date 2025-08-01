// src/views/Login/Login.jsx
import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { auth } from "../firebase";
import { signInWithEmailAndPassword } from "firebase/auth";
import "../styles/Login.css";

const Login = () => {
  const [form, setForm] = useState({ email: "", password: "" });
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleChange = (e) =>
    setForm({ ...form, [e.target.name]: e.target.value });

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");
    try {
      // 1️⃣ Intentar iniciar sesión
      await signInWithEmailAndPassword(auth, form.email, form.password);
      // 2️⃣ Redirigir al home (o dashboard)
      navigate("/");
    } catch (err) {
      console.error("Login error:", err.code, err.message);
      // Manejamos los errores más comunes:
      if (err.code === "auth/wrong-password") {
        setError("Contraseña incorrecta.");
      } else if (err.code === "auth/user-not-found") {
        setError("No existe usuario con ese email. Regístrate primero.");
      } else {
        setError(err.message);
      }
    }
  };

  return (
    <div className="login-page">
      <h2>Iniciar Sesión</h2>
      <form className="login-form" onSubmit={handleSubmit}>
        <input
          name="email"
          type="email"
          placeholder="Email"
          value={form.email}
          onChange={handleChange}
          required
        />
        <input
          name="password"
          type="password"
          placeholder="Contraseña"
          value={form.password}
          onChange={handleChange}
          required
        />
        {error && <p className="error">{error}</p>}
        <button type="submit">Entrar</button>
        <p className="alt-action">
          ¿No tienes cuenta? <Link to="/registro">Regístrate</Link>
        </p>
      </form>
    </div>
  );
};

export default Login;
