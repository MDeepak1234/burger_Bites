import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../../src/assets/logo/logo.png';
import '../Styles/NavStyles.css';

function Navbar({ c }) {
  return (
    <>
      <nav className="header navbar navbar-expand-md bg-body-tertiary">
        <div className="container-fluid">
          <Link className="img1 navbar-brand" to="/">
            <img className="img-fluid" src={logo} alt="logo" />
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
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="ulbar navbar-nav me-auto ms-2 mb-lg-0">
              <li className="nav-item">
                <Link className="nav-link active" to="/">Home</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/menu">Our Menu</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/order">Order</Link>
              </li>
              <li className="nav-item">
                  <Link className="nav-link cart "style={{"width":"3vw"}} to="/cart">
                    <div className="cart-icon-wrapper">
                      <i className="bi bi-bag"></i>
                      <em className="round">{c}</em>
                    </div>
                  </Link>

              </li>
            </ul>
            <Link
              to="/login"
              style={{
                backgroundColor: "black",
                color: "white",
                padding: "0.5rem",
                borderRadius: "0.5rem",
                textDecoration: "none"
              }}
            >
              Login
            </Link>
          </div>
        </div>
      </nav>
    </>
  );
}

export default Navbar;
