import { BrowserRouter, Routes, Route } from "react-router-dom"
import Layout from "../components/Layout/Layout"
import Home from "../views/Home"
import Dashboard from "../views/Dashboard"
import Register from "../views/Register"
import Login from "../views/Login"
import Carrito from "../views/Carrito"
import Contacto from "../views/Contacto"

//Crear un coponente que valide que lista quiere ver el usuario
const Router = () => {
    return (
        <BrowserRouter> {/*para definir un conjunto de rutas a las que el usuario puede ingresar*/}
            <Routes>
                <Route path="/" element={<Home />}/>
                <Route path="/admin" element={<Dashboard />}/>
                <Route path="/registro" element={<Register />}/>
                <Route path="/login" element={<Login />}/>
                <Route path="/carrito" element={<Carrito />}/>
                <Route path="/contacto" element={<Contacto />}/>
            </Routes>
        </BrowserRouter>
    )
}

export { Router }