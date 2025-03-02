import React, { useState } from "react";
import { Link } from "react-router-dom"; 
import LoginForm from "./LoginForm";
import SignUp from "./Signup";

function Navbar({ cartCount }) {
  const [sort, setSort] = useState("");
  const [search, setSearch] = useState("");

  return (
    <>
      <nav className="navbar navbar-expand-md bg-primary-subtle fixed-top" style={{ position: "fixed", top: "0px", zIndex: "100", width: "100%" }}>
        <div className="container-fluid">
          <h1 className="navbar-brand">E-Commerce</h1>

          <button 
            className="navbar-toggler" 
            type="button" 
            data-bs-toggle="collapse" 
            data-bs-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>

          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav me-auto gap-4">  
              <li className="nav-item"><Link className="nav-link" to="/">Home</Link></li>
              <li className="nav-item"><Link className="nav-link" to="/login">Login</Link></li>
              <li className="nav-item"><Link className="nav-link" to="/signup">Sign Up</Link></li>
              <li className="nav-item"><Link className="nav-link" to="/cart">Cart ({cartCount})</Link></li>
            </ul>

            <div className="d-flex gap-3">
              <input
                type="search"
                className="form-control"
                placeholder="Search"
                onChange={(e) => setSearch(e.target.value.toLowerCase())}
              />
              <select className="form-select" onChange={(e) => setSort(e.target.value)}>
                <option value="">Sort By</option>
                <option value="lowhigh">Low to High</option>
                <option value="highlow">High to Low</option>
                <option value="alphabetical">Alphabetical</option>
              </select>
            </div>
          </div>
        </div>
      </nav>
    </>
  );
}

export default Navbar;
