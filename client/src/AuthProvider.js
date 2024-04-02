import React, { createContext, useContext, useState } from "react";

const AuthContext = createContext({});

const AuthProvider = ({ children }) => {
    const [isAuthenticated, setIsAuthenticated] = useState(!!localStorage.getItem("token"));
    
    const setUserAuthenticated = () => {
    setIsAuthenticated(true);
  };

  const setUserLoggedOut = () => {
    localStorage.clear()
    localStorage.removeItem("token");
    setIsAuthenticated(false);
  };

  return (
    <AuthContext.Provider value={{ isAuthenticated, setUserAuthenticated, setUserLoggedOut }}>
      {children}
    </AuthContext.Provider>
  );
};

export default AuthProvider;

export const useAuth = () => {
  return useContext(AuthContext);
};
