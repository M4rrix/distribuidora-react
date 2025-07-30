const categorias = ["Todos", "Papel Higiénico", "Plásticos", "Desinfectantes"];
import "./Categorias.css"

const Categorias = ({ categoriaSeleccionada, setCategoriaSeleccionada }) => {
  return (
    <div className="categorias-container">
      {categorias.map((cat) => (
        <button
          key={cat}
          className={categoriaSeleccionada === cat ? "activo" : ""}
          onClick={() => setCategoriaSeleccionada(cat)}
        >
          {cat}
        </button>
      ))}
    </div>
  );
};

export default Categorias;