import "./Footer.css";

const Footer = () => {
  return (
    <footer>
      <div className="footer-contacto">
        <a
          href="https://www.instagram.com/tu_cuenta"
          target="_blank"
          rel="noopener noreferrer"
        >
          <i className="fab fa-instagram fa-2x" style={{ color: "#E4405F" }}></i>
        </a>
        <p>📞 +54 9 2920 XXXXXXX</p>
      </div>
      <p>&copy; 2025 El Sol Distribuidora. Todos los derechos reservados.</p>
    </footer>
  );
};

export default Footer;
