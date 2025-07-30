import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "../components/Layout/Layout";
import Home from "../views/Home"
import Dashboard from "../views/Dashboard";
import Register from "../views/Register";
import Login from "../views/Login";
import Carrito from "../views/Carrito";
import Contacto from "../views/Contacto";


const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        {/* Rutas públicas con Header/Footer */}
        <Route element={<Layout />}>
          <Route path="/" element={<Home />} />
          <Route path="/carrito" element={<Carrito />} />
          <Route path="/registro" element={<Register />} />
          <Route path="/contacto" element={<Contacto />} />
          <Route path="/login" element={<Login />} />
        </Route>

        {/* Rutas independientes sin layout */}
        <Route path="/admin" element={<Dashboard />} />
        
      </Routes>
    </BrowserRouter>
  );
};

export { Router };
