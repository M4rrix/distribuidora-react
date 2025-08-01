import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "../components/Layout/Layout";
import Home from "../views/Home"
import Dashboard from "../views/Dashboard";
import Register from "../views/Register";
import Login from "../views/Login";
import Carrito from "../views/Carrito";
import Contacto from "../views/Contacto";
import ProtectedRoute from "./ProtectedRoute";


const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        {/* Rutas públicas con Header/Footer */}
        <Route element={<Layout />}>
          <Route path="/" element={<Home />} />
          <Route path="/registro" element={<Register />} />
          <Route path="/login" element={<Login />} />
    
          <Route path="/contacto" element={<Contacto />} />
           {/*Serian las rutas protegidas */}
              <Route 
                path="/carrito" 
                element={ 
                  <ProtectedRoute> {/* ProtectedRoute bloquea /carrito (y las que añadas) si no hay sesión. */}
                    <Carrito />
                  </ProtectedRoute>
              } 
              />
        </Route>

        {/* Rutas independientes sin layout */}
        <Route path="/admin" element={<Dashboard />} />
       
       </Routes>
    </BrowserRouter>
  );
};

export { Router };
