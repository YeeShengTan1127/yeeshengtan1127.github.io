import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./NavBar.css";
import data from "../data/data.json";

function NavBar() {
  const [click, setClick] = useState(false);

  const handleClick = () => setClick(!click);
  const closeMobileMenu = () => setClick(false);

  window.addEventListener("scroll", (e) => {
    const nav = document.querySelector(".navbar");
    if (window.pageYOffset > 0) {
      nav.classList.add("add-shadow");
    } else {
      nav.classList.remove("add-shadow");
    }
  });

  const backToTop = () => {
    window.scroll(0, 0);
  };

  return (
    <>
      <nav className="navbar">
        <div className="navbar-container">
          <Link
            to="/"
            className="navbar-logo"
            onClick={() => {
              closeMobileMenu();
              backToTop();
            }}
          >
            {data.CompanyName}
          </Link>
          <div className="menu-icon" onClick={handleClick}>
            <i className={click ? "fas fa-times" : "fas fa-bars"}></i>
          </div>
          <ul className={click ? "nav-menu active" : "nav-menu"}>
            <li className="nav-item">
              <Link to="/" className="nav-links" onClick={closeMobileMenu}>
                Home
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/about" className="nav-links" onClick={closeMobileMenu}>
                About
              </Link>
            </li>
            <li className="nav-item">
              <Link
                to="/services"
                className="nav-links"
                onClick={closeMobileMenu}
              >
                Services
              </Link>
            </li>
            <li className="nav-item">
              <Link
                to="/contacts"
                className="nav-links"
                onClick={closeMobileMenu}
              >
                Contacts
              </Link>
            </li>
          </ul>
        </div>
      </nav>
    </>
  );
}

export default NavBar;
