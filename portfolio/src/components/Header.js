import React from "react";
import { Link } from "react-router-dom";

export default function Header() {
  return (
    <>
      <header id="header" className="fixed-top">
        <div className="container-fluid d-flex justify-content-between align-items-center">
          <h1 className="logo me-auto me-lg-0">
            <Link to="/">ALI IBNE IMRAN</Link>
          </h1>
          <nav id="navbar" className="navbar order-last order-lg-0">
            <ul>
              <li>
                <Link className="active" to="/">
                  Home
                </Link>
              </li>
              <li>
                <Link to="/about">About</Link>
              </li>
              <li>
                <Link to="/resume">Resume</Link>
              </li>
              <li>
                <Link to="/service">Services</Link>
              </li>
              <li>
                <Link to="/project">Projects</Link>
              </li>
              <li>
                <Link to="/contact">Contact</Link>
              </li>
            </ul>
            <i className="bi bi-list mobile-nav-toggle"></i>
          </nav>

          <div className="header-social-links">
            <Link to="https://www.twitter.com/ali_ibne_imran/" className="twitter">
              <i className="bi bi-twitter"></i>
            </Link>
            <Link to="https://www.facebook.com/profile.php?id=100007773072162/" className="facebook">
              <i className="bi bi-facebook"></i>
            </Link>
            <Link to="https://www.instagram.com/ali_ibne_imran/" className="instagram">
              <i className="bi bi-instagram"></i>
            </Link>
            <Link to="https://www.linkedin.com/ali-ibne-imran-963494152/" className="linkedin">
              <i className="bi bi-linkedin"></i>
            </Link>
          </div>
        </div>
      </header>
    </>
  );
}
