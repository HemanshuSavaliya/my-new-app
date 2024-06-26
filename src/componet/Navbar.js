import React from "react";

const Navbar = () => {


  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark fixed-top">
    <div className="container-fluid">
        <a className="navbar-brand" href="/home">
            SAVALIYA INFOTECH 🤝
        </a>
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
                    <a className="nav-link" href="/home">
                        Home
                    </a>
                </li>
                <li className="nav-item">
                    <a className="nav-link" href="/about" >
                        About Us
                    </a>
                </li>
                <li className="nav-item">
                    <a className="nav-link" href="/contact">
                        Contact Us
                    </a>
                </li>
                <li className="nav-item">
                    <a className="nav-link" href="/team">
                        Our Team
                    </a>
                </li>
            </ul>
        </div>
    </div>
</nav>

  );
};

export default Navbar;
