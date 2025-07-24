import { useState } from "react";
import { Link } from "react-router-dom";
import "./Header.css";

const Header = () => {
  const [menuActivo, setMenuActivo] = useState(false); //Crear estado para saber si el menu esta activo o no 

  const toggleMenu = () => {
    setMenuActivo(prev => !prev);
  }; //cambia el valor del estado al hacer clic

  return (
    <header>
      <div className="logo">
        <img src="/img/logo.jpeg" alt="Distribuidora El Sol" className="header-logo" />
      </div>

      <button className="menu-toggle" onClick={toggleMenu}>
        ☰
      </button>

      <nav>
        <ul className={`nav-links ${menuActivo ? "active" : ""}`}> {/*aplica la clase active solo si el menú está activo*/}
          <li><Link to="/">Inicio</Link></li>
          <li><Link to="/productos">Productos</Link></li>
          <li><Link to="/carrito"><i className="fas fa-shopping-cart"></i></Link></li>
          <li><Link to="/contacto"><i className="fas fa-envelope"></i></Link></li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;