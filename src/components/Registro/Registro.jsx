
import React, { useState } from "react";
import { Link } from "react-router-dom";                 // Importa Link
import { auth, db } from "../../firebase";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { doc, setDoc } from "firebase/firestore";
import "./Registro.css";

const Register = () => {
  const [form, setForm] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: ""
  });
  const [error, setError] = useState("");

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");

    try {
      // 🔐 Crear usuario en Auth
      const { user } = await createUserWithEmailAndPassword(
        auth,
        form.email,
        form.password
      );

      // Guardar datos extra en Firestore
      await setDoc(doc(db, "users", user.uid), {
        firstName: form.firstName,
        lastName: form.lastName,
        email: form.email
      });

      alert("¡Registro exitoso!");
      // opcional: redirigir al login
      // navigate("/login");
    } catch (err) {
      console.error("Firebase error:", err.code, err.message);

      if (err.code === "auth/email-already-in-use") {
        setError("Ese email ya está registrado. ¿Quieres iniciar sesión?");
      } else {
        setError(`Error: ${err.code} — ${err.message}`);
      }
    }   //  cierra el catch

    // no hace falta más código después del catch
  };

  return (
    <div className="register-page">
      <h2>Registro de Usuario</h2>
      <form className="register-form" onSubmit={handleSubmit}>
        <input
          type="text"
          name="firstName"
          placeholder="Nombre"
          value={form.firstName}
          onChange={handleChange}
          required
        />
        <input
          type="text"
          name="lastName"
          placeholder="Apellido"
          value={form.lastName}
          onChange={handleChange}
          required
        />
        <input
          type="email"
          name="email"
          placeholder="Email"
          value={form.email}
          onChange={handleChange}
          required
        />
        <input
          type="password"
          name="password"
          placeholder="Contraseña"
          value={form.password}
          onChange={handleChange}
          required
        />

        {error && (
          <div className="error">
            {error}
            {error.includes("registrado") && (
              <p>
                <Link to="/login">Ir a Login</Link>
              </p>
            )}
          </div>
        )}

        <button type="submit">Registrarme</button>
      </form>
    </div>
  );
};

export default Register;
