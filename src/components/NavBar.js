import React, { useState } from "react";
import { Link } from "react-router-dom";
import data from "../data/data.json";
import DropDown from "./DropDown";
import "./NavBar.css";

function NavBar() {
  const [click, setClick] = useState(false);
  const [dropdown, setDropDown] = useState(false);

  const handleClick = () => setClick(!click);
  const closeMobileMenu = () => {
    setClick(false);
    setDropDown(false);
  };

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

  const onMouseEnter = () => {
    if (window.innerWidth < 960) setDropDown(false);
    else setDropDown(true);
  };

  const onMouseLeave = () => {
    if (window.innerWidth < 960) setDropDown(dropdown);
    else setDropDown(false);
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
            <li
              className="nav-item"
              onMouseEnter={onMouseEnter}
              onMouseLeave={onMouseLeave}
            >
              <Link
                to="/services"
                className="nav-links"
                onClick={() => {
                  if (window.innerWidth > 960) closeMobileMenu();
                  else setDropDown(!dropdown);
                }}
              >
                Services <i className="fas fa-caret-down" />
              </Link>
              {dropdown && (
                <DropDown
                  data={data.services}
                  closeMobileMenu={closeMobileMenu}
                />
              )}
            </li>
            <li className={dropdown ? "nav-item nav-contacts" : "nav-ite"}>
              <Link
                to="/location"
                className="nav-links"
                onClick={closeMobileMenu}
              >
                Location
              </Link>
            </li>
          </ul>
        </div>
      </nav>
    </>
  );
}

export default NavBar;
