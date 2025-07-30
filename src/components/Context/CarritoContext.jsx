import { createContext, useContext, useState, useEffect } from "react";

const CarritoContext = createContext();

export const useCarrito = () => useContext(CarritoContext);

export const CarritoProvider = ({ children }) => {
  const [carrito, setCarrito] = useState(() => {
    const guardado = localStorage.getItem("carrito");
    return guardado ? JSON.parse(guardado) : [];
  });

  useEffect(() => {
    localStorage.setItem("carrito", JSON.stringify(carrito));
  }, [carrito]);

  // Ahora recibe (id, title, marca)
  const agregarAlCarrito = (id, title, marca) => {
    if (!marca) {
      alert("Por favor, selecciona una marca antes de agregar al carrito.");
      return;
    }

    // Busca producto con id Y marca iguales
    const existe = carrito.find(
      (item) => item.id === id && item.marca === marca
    );

    if (existe) {
      setCarrito(
        carrito.map((item) =>
          item.id === id && item.marca === marca
            ? { ...item, cantidad: item.cantidad + 1 }
            : item
        )
      );
    } else {
      setCarrito([
        ...carrito,
        {
          id,
          title,
          marca,
          cantidad: 1,
        },
      ]);
    }
  };

  const aumentarCantidad = (id, marca) => {
    setCarrito(
      carrito.map((item) =>
        item.id === id && item.marca === marca
          ? { ...item, cantidad: item.cantidad + 1 }
          : item
      )
    );
  };

  const disminuirCantidad = (id, marca) => {
    setCarrito(
      carrito
        .map((item) =>
          item.id === id && item.marca === marca
            ? { ...item, cantidad: item.cantidad - 1 }
            : item
        )
        .filter((item) => item.cantidad > 0)
    );
  };

  const eliminarDelCarrito = (id, marca) => {
    setCarrito(carrito.filter((item) => !(item.id === id && item.marca === marca)));
  };

  const enviarWhatsapp = () => {
    let mensaje = "Hola, me gustaría hacer un pedido:\n\n";
    carrito.forEach((producto) => {
      mensaje += `Producto: ${producto.title}, Marca: ${producto.marca}, Cantidad: ${producto.cantidad}\n`;
    });

    const whatsappLink = `https://wa.me/2920308378?text=${encodeURIComponent(
      mensaje
    )}`;
    window.open(whatsappLink, "_blank");
  };

  return (
    <CarritoContext.Provider
      value={{
        carrito,
        agregarAlCarrito,
        aumentarCantidad,
        disminuirCantidad,
        eliminarDelCarrito,
        enviarWhatsapp,
      }}
    >
      {children}
    </CarritoContext.Provider>
  );
};
