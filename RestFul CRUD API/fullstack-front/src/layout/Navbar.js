import React from "react";
import { Link } from "react-router-dom";
import './Navbar.css'

export default function Navbar() {
  return (
    <div>
      <nav className="navbar navbar-expand-lg navbar-dark custom-navcolor">
        <div className="container-fluid ">
          <Link className="navbar-brand ml-20 custom-font" to={"/"}>
          CRUD Rest-API  
          </Link>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarScroll"
            aria-controls="navbarScroll"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
          </button>

          <Link className="btn btn-outline-light custom-font2 " to="/adduser">Add User</Link>
        </div>
      </nav>
    </div>
  );
}
