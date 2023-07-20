import React from "react";
import { Link } from "react-router-dom";
import logo from "../Assest/Images/h-logo.png";
import "../Style/footer.css"
const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <section className="footer">
      <div className="container">
        <div className="up-line">
          <div className="logo">
            <img src={logo} alt="logo footer" />
          </div>
          <div className="footer-links">
            <ul className="footer-nav-links">
              <li>
                <Link to="/#home">Home</Link>
              </li>
              <li>
                <Link to="/#about">About us</Link>
              </li>
              <li>
                <Link to="/#our-services">Our Services</Link>
              </li>
              <li>
                <Link to="/#contact-us">Contact Us</Link>
              </li>
            </ul>
          </div>
        </div>
        <span className="footer-line"></span>
        <div className="down-line">
          <span>&copy; {currentYear}Intellicity. All rights reserved.</span>
          <div className="footer-Privacy-links">
            <ul>
              <li>
                <Link to="/">Privacy Policy</Link>
              </li>
              <li>
                <Link to="/">Terms of Service</Link>
              </li>
              <li>
                <Link to="/">Cookies Settings</Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Footer;
