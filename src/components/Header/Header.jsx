import { useState } from "react";
import { Link } from "react-router-dom";
import "./Header.css";
import { FaShoppingCart, FaEnvelope } from "react-icons/fa";

const Header = () => {
  const [menuActivo, setMenuActivo] = useState(false); //Crear estado para saber si el menu esta activo o no 

  const toggleMenu = () => {
    setMenuActivo(prev => !prev);
  }; //cambia el valor del estado al hacer clic

  return (
    <header>
      <div className="logo">
        <img src="../../../public/logo/logo.jpeg" alt="Distribuidora El Sol" className="header-logo" />
      </div>

      <button className="menu-toggle" onClick={toggleMenu}>
        ☰
      </button>

      <nav>
        <ul className={`nav-links ${menuActivo ? "active" : ""}`}> {/*aplica la clase active solo si el menú está activo*/}
          <li><Link to="/">Inicio</Link></li>
         {/* <li><Link to="/productos">Productos</Link></li>*/}
          <li><Link to="/registro">Registro</Link></li>
          <li><Link to="/login">Login</Link></li>          
          <li><Link to="/carrito"><FaShoppingCart /></Link></li> {/*instale npm react-icons */}
          <li><Link to="/contacto"><FaEnvelope /></Link></li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;