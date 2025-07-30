import { useState } from "react";
import "./Buscador.css"

const Buscador = ({ busqueda, setBusqueda, productos }) => {
  const [sugerencias, setSugerencias] = useState([]);

  const manejarCambio = (e) => {
    const valor = e.target.value.toLowerCase();
    setBusqueda(valor);

    if (!valor) {
      setSugerencias([]);
      return;
    }

    const sugerenciasFiltradas = productos.filter(
      (p) =>
        p.nombre.toLowerCase().includes(valor) ||
        p.categoria.toLowerCase().includes(valor)
    );
    setSugerencias(sugerenciasFiltradas.slice(0, 5));
  };

  const seleccionarSugerencia = (nombre) => {
    setBusqueda(nombre);
    setSugerencias([]);
  };

  return (
    <div className="buscador-container">
    <input
      type="text"
      value={busqueda}
      onChange={manejarCambio}
      placeholder="Buscar productos..."
      className="buscador-input"
    />
    {sugerencias.length > 0 && (
      <div className="sugerencias-container">
        {sugerencias.map((producto) => (
          <div
            key={producto.id}
            className="sugerencia-item"
            onClick={() => seleccionarSugerencia(producto.nombre)}
          >
            {producto.nombre} ({producto.categoria})
          </div>
        ))}
      </div>
    )}
  </div> // este div cierra la clase="buscador-container"
  );
};

export default Buscador;