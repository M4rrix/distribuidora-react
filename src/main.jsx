import ReactDOM from "react-dom/client";
import React from "react";
import { BrowserRouter } from "react-router-dom"
import { AuthProvider } from "./components/Context/AuthContext"
import { CarritoProvider } from "./components/Context/CarritoContext";
import { Router } from "./router/Router";
import "./index.css";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <AuthProvider>
       <CarritoProvider>
          <Router />
        </CarritoProvider>
    </AuthProvider>
  </React.StrictMode>
);


