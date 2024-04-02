import React from "react";
import { Navigate } from "react-router-dom";
import { useAuth } from "../AuthProvider";

  

export const AuthMiddleware = ({ children }) => {
  const { isAuthenticated } = useAuth();
  if (!isAuthenticated) {
    return <Navigate to="/login" />;
  }
  return children;
};