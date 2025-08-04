import { useCarrito } from "../Context/CarritoContext";
import "./Productos.css";
import { useState } from "react";


const Producto = ({ producto }) => {
  const { agregarAlCarrito } = useCarrito();
  const [marcaSeleccionada, setMarcaSeleccionada] = useState("");

  const handleAgregar = () => {
    if (!marcaSeleccionada) {
      alert("Por favor, selecciona una marca antes de agregar al carrito.");
      return;
    }
    agregarAlCarrito(producto.id, producto.title, marcaSeleccionada);
  };

  return (
    <div className="producto">
      <img src={producto.imagen} alt={producto.title} />
      <h3>{producto.title}</h3>
      <p className="precio">$ {producto.precio}</p>
      <p className="sku">SKU: {producto.sku}</p>
      <p className="description"> {producto.description}</p>
      <select
        className="marca-select"
        value={marcaSeleccionada}
        onChange={e => setMarcaSeleccionada(e.target.value)}
      >
        <option value="" disabled>
          Seleccionar marca
        </option>
        {producto.marcas.map((marca, i) => (
          <option key={i} value={marca}>
            {marca}
          </option>
        ))}
      </select>
      <button className="btn-agregar" onClick={handleAgregar}>
        Añadir al carrito
      </button>
    </div>
  );
};
export default Producto;

