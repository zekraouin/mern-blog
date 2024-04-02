import React from "react";
import { Link } from "react-router-dom";
import { useAuth } from "../../AuthProvider";

const Header = () => {
  const { isAuthenticated, setUserLoggedOut } = useAuth();

  const handleLogout = () => {
    setUserLoggedOut();
    window.location.href = "/login";
  };

  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <div className="container">
        <Link className="navbar-brand" to="/">
          <img src="book.jpeg" alt="Logo" className="logo" />
        </Link>

        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="/navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div
          className="collapse navbar-collapse justify-content-end"
          id="navbarNav"
        >
          <ul className="navbar-nav">
            <li className="nav-item">
              <Link className="nav-link" to="/">
                Home
              </Link>
            </li>

            {/* Conditionally render logout button if authenticated */}
            {isAuthenticated && (
              <li className="nav-item">
                <button className="nav-link" onClick={handleLogout}>
                  Logout
                </button>
              </li>
            )}

            {/* Conditionally render login/register links if not authenticated */}
            {!isAuthenticated && (
              <>
                <li className="nav-item">
                  <Link className="nav-link" to="/login">
                    Login
                  </Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to="/register">
                    Register
                  </Link>
                </li>
              </>
            )}
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Header;
