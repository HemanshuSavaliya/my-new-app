import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark fixed-top">
    <div className="container-fluid">
        <Link className="navbar-brand" to="/home">
            SAVALIYA INFOTECH 🤝
        </Link>
        <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
        >
            <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse justify-content-end" id="navbarSupportedContent">
            <ul className="navbar-nav">
                <li className="nav-item">
                    <Link className="nav-link" to="/home">
                        Home
                    </Link>
                </li>
                <li className="nav-item">
                    <Link className="nav-link" to="/about">
                        About Us
                    </Link>
                </li>
                <li className="nav-item">
                    <Link className="nav-link" to="/contact">
                        Contact Us
                    </Link>
                </li>
            </ul>
        </div>
    </div>
</nav>

  );
};

export default Navbar;
