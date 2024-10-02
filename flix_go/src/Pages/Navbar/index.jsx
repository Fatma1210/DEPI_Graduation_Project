import React from 'react';
import { Link } from 'react-router-dom';
import '@fortawesome/fontawesome-free/css/all.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js'; // Import Bootstrap JS
import NavLinkcomp from './Navcomp/NavLinkcomp';

let navLinks = [
  { name: "Home", path: "home" },
  { name: "Catalog", path: "catalog" },
  { name: "Pricing Plans", path: "pricingplans" },
  { name: "Profile", path: "profile" },
  { name: "About Us", path: "aboutus" }

];

export default function Navbar() {
  return (
<nav className="navbar navbar-expand-lg navbar-dark" style={{ backgroundColor: "#2c2b31" }}>
  <div className="container">
    <div style={{ width: '200px', height: '100%', backgroundColor: '#20282d' ,      borderRadius: '10px',  }} className="d-flex align-items-center justify-content-center">
      <Link className="navbar-brand" to="home">
        <img src='https://flixgo.volkovdesign.com/main/img/logo.svg' alt="Logo" style={{ maxWidth: '100%', maxHeight: '100%' }} />
      </Link>
    </div>
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
      <ul className="navbar-nav mb-2 mb-lg-0 justify-content-center flex-grow-1">
        {navLinks.map((link, index) => (
          <NavLinkcomp key={index} link={link} />
        ))}
      </ul>
      <ul className="navbar-nav ms-auto mb-2 mb-lg-0 align-items-center">
        <li className="nav-item">
          <div style={{ 
            backgroundColor: '#ff568e', 
            border: '1px solid #ff568e', 
            borderRadius: '10px', 
            padding: '5px 10px' 
          }}>
            <Link className="nav-link active" aria-current="page" to="signin" style={{ color: 'white', textDecoration: 'none' }}>
              Sign In
            </Link>
          </div>
        </li>
        <li className="nav-item">
          <Link className="nav-link active ms-4" aria-current="page" to="signup">Sign Up</Link>
        </li>
      </ul>
    </div>
  </div>
</nav>

  );
}
