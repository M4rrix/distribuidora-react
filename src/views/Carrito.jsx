// src/views/Carrito/Carrito.jsx
import { useCarrito } from "../components/Context/CarritoContext";
import "../styles/Carrito.css";
import { FaShoppingCart } from "react-icons/fa";

const Carrito = () => {
  const {
    carrito,
    aumentarCantidad,
    disminuirCantidad,
    eliminarDelCarrito,
    enviarWhatsapp,
  } = useCarrito();

  return (
    <section className="carrito">
      <h2>
        <FaShoppingCart style={{ fontSize: "1.5em", marginRight: "0.5em" }} />
        Carrito de Compras
      </h2>

      {carrito.length === 0 ? (
        <p>El carrito está vacío.</p>
      ) : (
        <>
          <div className="carrito-container">
            {carrito.map((producto, index) => (
              <div className="carrito-item" key={`${producto.id}-${producto.marca}-${index}`}>
                <p>
                  {producto.title} x {producto.cantidad} – {producto.marca}
                </p>
                <div className="carrito-botones">
                  {/* PASAMOS SIEMPRE id Y marca */}
                  <button onClick={() => disminuirCantidad(producto.id, producto.marca)}>➖</button>
                  <button onClick={() => aumentarCantidad(producto.id, producto.marca)}>➕</button>
                  <button onClick={() => eliminarDelCarrito(producto.id, producto.marca)}>❌</button>
                </div>
              </div>
            ))}
          </div>

          <button className="btn-whatsapp" onClick={enviarWhatsapp}>
            Consultar por WhatsApp
          </button>
        </>
      )}
    </section>
  );
};

export default Carrito;
