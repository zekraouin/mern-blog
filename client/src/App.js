import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import React from "react";
import { Routes, Route } from "react-router-dom";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Index from "./components/pages/Index";

import Login from "./components/pages/Login";
import Register from "./components/pages/Register";
import Profile from "./components/pages/Profile";
import {AuthMiddleware} from "./utils/AuthMiddleware";
import Layout from "./components/layouts/Layout";
import AuthProvider from "./AuthProvider";

function App() {

  return (
    <AuthProvider>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route exact path="/" element={<Index />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route
            path="/profile"
            element={
              <AuthMiddleware>
                <Profile />
              </AuthMiddleware>
            }
          />
        </Route>
      </Routes>
    </AuthProvider>
  );
}

export default App;
