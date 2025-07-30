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
      <p><FaShoppingCart style={{ fontSize: "1.5em", marginRight: "0.5em" }} /></p>
      <h2> Carrito de Compras</h2>

      {carrito.length === 0 ? (
        <p>El carrito está vacío.</p>
      ) : (
        <>
          <div className="carrito-container">
            {carrito.map((producto, index) => (
              <div className="carrito-item" key={index}>
                <p>
                  {producto.nombre} x {producto.cantidad} - {producto.marca}
                </p>
                <div className="carrito-botones">
                  <button onClick={() => disminuirCantidad(producto.id)}>➖</button>
                  <button onClick={() => aumentarCantidad(producto.id)}>➕</button>
                  <button onClick={() => eliminarDelCarrito(producto.id)}>❌</button>
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
