import React from "react";
import { Link } from "react-router-dom";
import "./Footer.css";
import data from "../data/data.json";

function Footer() {
  return (
    <div className="footer-container">
      <div className="footer-links">
        <div className="footer-link-wrapper">
          <div class="footer-link-items">
            <h2>Our Company</h2>
            <Link to="/about">About Us</Link>
            <Link to="/">Testimonials</Link>
            <Link to="/">Careers</Link>
          </div>
          <div class="footer-link-items">
            <h2>Contact Us</h2>
            <Link to="/">Contact</Link>
            <Link to="/">Support</Link>
            <Link to="/">Destinations</Link>
            <Link to="/">Sponsorships</Link>
          </div>
          <div class="footer-link-items">
            <h2>Social Media</h2>
            <div className="social-icons">
              <Link
                to="/"
                target={"_blank"}
                aria-label="Facebook"
                className="social-icon-link facebook"
              >
                <i className="fab fa-facebook-f"></i>
              </Link>
              <Link
                to="/"
                target={"_blank"}
                aria-label="Instagram"
                className="social-icon-link instagram"
              >
                <i className="fab fa-instagram"></i>
              </Link>
              <Link
                to="/"
                target={"_blank"}
                aria-label="Whatsapp"
                className="social-icon-link whatsapp"
              >
                <i className="fab fa-whatsapp"></i>
              </Link>
            </div>
          </div>
        </div>
      </div>
      <section className="social-media">
        <div className="social-media-wrap">
          <div className="footer-logo">
            <Link to="/" className="social-logo">
              {data.CompanyName}
            </Link>
          </div>
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
