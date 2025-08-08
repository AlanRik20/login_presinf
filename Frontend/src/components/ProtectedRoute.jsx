import React from "react";
// import { useAuth } from "../context/authContext";
import { useAuth } from "../context/authContext";
import { Navigate } from "react-router-dom";

const ProtectedRoute = ({ children }) => {
  const { isAuthenticated, loading } = useAuth();

  if (loading) return <div>Cargando...</div>; // O un spinner

  if (!isAuthenticated) {
    return <Navigate to="/Login" replace />;
  }

  return children;
};

export default ProtectedRoute;
