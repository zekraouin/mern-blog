import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../../AuthProvider"; // Import useAuth hook

const LoginPage = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();
  const { isAuthenticated,setUserAuthenticated } = useAuth()
  console.log(isAuthenticated)
  function login(ev) {
    ev.preventDefault();
    const loginData = {
      email: email,
      password: password,
    };
    axios
      .post("http://localhost:5000/api/users/login", loginData)
      .then((response) => {
        localStorage.setItem("token", response.data.token);
        setUserAuthenticated(); // Set user as authenticated
        navigate("/profile");
        console.log("login successful:", response.data);
      })
      .catch((error) => {
        console.error("login failed:", error);
      });
  }

  return (
    <div className="container">
      <div className="row justify-content-center">
        <div className="col-md-6 mt-5">
          <h1 className="mt-5">Login</h1>

          <form onSubmit={login}>
            <div className="form-group mb-3">
              <label htmlFor="email">Email:</label>
              <input
                type="text"
                className="form-control"
                id="email"
                name="email"
                value={email}
                onChange={(ev) => setEmail(ev.target.value)}
              />
            </div>
            <div className="form-group mb-3">
              <label htmlFor="password">Password:</label>
              <input
                type="password"
                className="form-control"
                id="password"
                name="password"
                value={password}
                onChange={(ev) => setPassword(ev.target.value)}
              />
            </div>
            <button type="submit" className="btn btn-primary">
              Login
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
