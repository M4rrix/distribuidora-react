//Componente para rutas privadas


import { Navigate } from "react-router-dom";
import { useAuth } from "../components/Context/AuthContext";

const ProtectedRoute = ({ children }) => {
  const { user } = useAuth();
  // Si no hay usuario, redirige a /login
  return user ? children : <Navigate to="/login" replace />;
};

export default ProtectedRoute;
