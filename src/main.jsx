import React from "react";
import ReactDOM from "react-dom/client";
import { CarritoProvider } from "./components/Context/CarritoContext";
import { Router } from "./router/Router";
import "./index.css";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <CarritoProvider>
      <Router />
    </CarritoProvider>
  </React.StrictMode>
);


