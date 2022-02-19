import React from "react";
import { Link } from "react-router-dom";
import "./Footer.css";
import data from "../data/data.json";

function Footer() {
  return (
    <div className="footer-container">
      <div className="footer-links">
        <div className="footer-link-wrapper">
          <div className="footer-link-items">
            <h2>
              <Link to="/">Company</Link>
            </h2>
            <Link to="/about">About Us</Link>
            <Link to="/services">Our Services</Link>
            <Link to="/gallery">Gallery</Link>
            <Link to="/location">Location</Link>
          </div>

          <div className="footer-link-items">
            <h2>Social Media</h2>
            <div className="social-icons">
              <a
                href="https://www.facebook.com/zuck"
                target={"_blank"}
                rel="noreferrer"
                aria-label="Facebook"
                className="social-icon-link facebook"
              >
                <i className="fab fa-facebook-f"></i>
              </a>
              <a
                href="https://www.instagram.com/singapore/?hl=en"
                target={"_blank"}
                rel="noreferrer"
                aria-label="Instagram"
                className="social-icon-link instagram"
              >
                <i className="fab fa-instagram"></i>
              </a>
              <a
                href="https://wa.me/6596129066?text=Hi%2C+I+just+visited+http%3A%2F%2Flocalhost%3A3000%2Fabout+.+Could+you+please+provide+more+info%3F"
                target={"_blank"}
                rel="noreferrer"
                aria-label="Whatsapp"
                className="social-icon-link whatsapp"
              >
                <i className="fab fa-whatsapp"></i>
              </a>
            </div>
          </div>
        </div>
      </div>
      <section className="social-media">
        <div className="social-media-wrap">
          <small className="website-rights">
            <i className="fa fa-copyright"></i>{" "}
            {" 2022 " + data.CompanyName + " All Rights Reserved."}
          </small>
        </div>
      </section>
    </div>
  );
}

export default Footer;
