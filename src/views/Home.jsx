
import { useState, useEffect } from "react";
import Categorias from "../components/Categorias/Categorias";
import Buscador from "../components/Buscador/Buscador";
import ListaProductos from "../components/ListaProductos/ListaProductos";
import "../styles/Home.css";

const Home = () => {
  const [productos, setProductos] = useState([]);
  const [categoriaSeleccionada, setCategoriaSeleccionada] = useState("todos");
  const [busqueda, setBusqueda] = useState("");


useEffect(() => {
  fetch("../../public/data/productos.json")
    .then((res) => res.json())
    .then((data) => setProductos(data))
    .catch((err) => console.error("Error cargando productos:", err));
}, []);
 /* useEffect(() => {
    fetch("https://fakestoreapi.com/products")
      .then((res) => res.json())
      .then((data) => setProductos(data))
      .catch((err) => console.error("Error cargando productos:", err));
  }, []);
*/
  const productosFiltrados = productos.filter((producto) => {
    const coincideCategoria =
      categoriaSeleccionada === "todos" || producto.category === categoriaSeleccionada;

    const texto = busqueda.toLowerCase();
    const coincideBusqueda = producto.title.toLowerCase().includes(texto);

    return coincideCategoria && coincideBusqueda;
  });

  return (
    <main>
      <section id="categorias">
        <Categorias
          categoriaSeleccionada={categoriaSeleccionada}
          setCategoriaSeleccionada={setCategoriaSeleccionada}
        />
      </section>

      <section id="productos">
        <Buscador
          busqueda={busqueda}
          setBusqueda={setBusqueda}
          productos={productos}
        />
        <ListaProductos productos={productosFiltrados} />
      </section>
    </main>
  );
};

export default Home;

/*
import { useEffect, useState } from "react";
import Categorias from "../components/Categorias/Categorias";
import Buscador from "../components/Buscador/Buscador";
import ListaProductos from "../components/ListaProductos/ListaProductos";
import "../styles/Main.css"

const Main = () => {
  const [productos, setProductos] = useState([]);
  const [categoriaSeleccionada, setCategoriaSeleccionada] = useState("todos");
  const [busqueda, setBusqueda] = useState("");

useEffect(() => {
  fetch("https://fakestoreapi.com/products")
    .then((res) => res.json())
    .then((data) => setProductos(data))
    .catch((err) => console.error("Error cargando productos desde la API:", err));
}, []);

  const productosFiltrados = productos.filter((producto) => {
    const coincideCategoria =
      categoriaSeleccionada === "todos" ||
      producto.categoria === categoriaSeleccionada;

    const texto = busqueda.toLowerCase();
    const coincideBusqueda =
      producto.nombre.toLowerCase().includes(texto) ||
      producto.marcas.some((marca) => marca.toLowerCase().includes(texto));

    return coincideCategoria && coincideBusqueda;
  });

  return (
    <main>
      <section id="categorias">
        <Categorias
          categoriaSeleccionada={categoriaSeleccionada}
          setCategoriaSeleccionada={setCategoriaSeleccionada}
        />
      </section>

      <section id="productos">
        <Buscador
          busqueda={busqueda}
          setBusqueda={setBusqueda}
          productos={productos}
        />
        <ListaProductos productos={productosFiltrados} />
      </section>

      <section id="carrito" className="carrito">
        <h2>
          <i className="fas fa-shopping-cart fa-2x"></i>
        </h2>
        <div className="carrito-container"></div>
        <button className="btn-whatsapp" onClick={() => alert("Lógica de WhatsApp pendiente")}>Consultar por WhatsApp</button>
      </section>
    </main>
  );
};

export default Main;
*/