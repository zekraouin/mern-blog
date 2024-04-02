import React, { useState } from "react";
import axios from "axios";


const RegisterPage = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  function register(ev) {
    ev.preventDefault();
    console.log(name, email, password, confirmPassword);

    // Create a data object to send to the API
    const userData = {
      name: name,
      email: email,
      password: password,
      confirmPassword: confirmPassword,
    };

    // Make a POST request to your API endpoint using Axios
    axios
      .post("http://localhost:5000/api/users/register", userData)
      .then((response) => {
        console.log("Registration successful:", response.data);
      })
      .catch((error) => {
        console.error("Registration failed:", error);
      });
  }


  return (
    <div className="container">
      <div className="row justify-content-center">
        <div className="col-md-6 mt-5">
          <h1 className="mt-5">Register</h1>

          <form onSubmit={register}>
            <div className="form-group mb-3">
              <label htmlFor="name">Name:</label>
              <input
                type="text"
                className="form-control"
                id="name"
                name="name"
                value={name}
                onChange={(ev) => setName(ev.target.value)}
              />
            </div>
            <div className="form-group mb-3">
              <label htmlFor="email">Email:</label>
              <input
                type="email"
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
            <div className="form-group mb-3">
              <label htmlFor="confirmPassword">Confirm Password:</label>
              <input
                type="password"
                className="form-control"
                id="confirmPassword"
                name="confirmPassword"
                value={confirmPassword}
                onChange={(ev) => setConfirmPassword(ev.target.value)}
              />
            </div>
            <button type="submit" className="btn btn-primary">
              Register
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default RegisterPage;
