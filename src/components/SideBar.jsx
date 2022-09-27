import React from "react";
import { Link } from "react-router-dom";

const SideBar = () => {
  return (
    <div>
      {/* <li className="nav-item">
        <a
          className="nav-link "
          href="#"
          role="button"
          data-bs-toggle="dropdown"
          aria-expanded="false"
          
        >
          Link
        </a>
        <ul className="dropdown-menu" style={{ height: "100vh", width: "25%" }} >
          <li className="dropdown-item">
            <Link to="/">Homes</Link>
          </li>
          <li className="dropdown-item">
            <Link to="pages1">Pages1</Link>
          </li>
          <li className="dropdown-item">
            <Link to="pages2">Pages2</Link>
          </li>
        </ul>
      </li> */}

      <div className="sidebar  ">
        <div>
          <Link className="sidebar-link  " to="/">
            Pages1
          </Link>
        </div>
        <div>
          <Link className="sidebar-link  " to="/pages2">
            Pages2
          </Link>
        </div>
        <div>
          <Link className="sidebar-link  " to="/pages3">
            Pages3
          </Link>
        </div>
      </div>
    </div>
  );
};

export default SideBar;
