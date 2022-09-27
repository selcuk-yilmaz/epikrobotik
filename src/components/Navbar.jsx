import React from "react";
import { Link } from "react-router-dom";
const Navbar = () => {
  return (
    <nav className=" navbar navbar-expand-lg navbar-dark bg-primary">
      <div className="container ">
        <a className="navbar-brand " href="#">
          Navbar
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon" />
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav">
            <li className="v nav-item active">
              <Link
                className="text-white text-decoration-none navbar-brand "
                to="/"
              >
                Pages1
              </Link>
            </li>
            <li className="nav-item">
              <Link
                className="text-white text-decoration-none navbar-brand "
                to="/pages2"
              >
                Pages2
              </Link>
            </li>
            <li className="nav-item">
              <Link
                className="text-white text-decoration-none navbar-brand "
                to="/pages3"
              >
                Pages3
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
