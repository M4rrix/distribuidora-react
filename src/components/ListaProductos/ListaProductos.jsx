import Producto from "../Productos/Productos";
import "./ListaProductos.css";

const ListaProductos = ({ productos }) => {
  const productosOrdenados = [...productos].sort((a, b) =>
    a.title.localeCompare(b.title)
  );

  return (
    <div className="productos-container">
      {productosOrdenados.map((producto) => (
        <Producto key={producto.id} producto={producto} />
      ))}
    </div>
  );
};

export default ListaProductos;
