import React, { useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import logo from "../Assest/Images/h-logo.png";
import "../Style/nav.css";

const NavBar = () => {
  const location = useLocation();

  useEffect(() => {
    const targetId = location.hash.substr(1);
    const targetElement = document.getElementById(targetId);
    if (targetElement) {
      const offset = 150; // Adjust the offset value as needed
      const topPosition =
        targetElement.getBoundingClientRect().top + window.pageYOffset - offset;

      window.scrollTo({
        top: topPosition,
        behavior: "smooth",
      });
    }
  }, [location]);

  return (
    <nav>
      <div className="container">
        <div className="logo">
          <Link to={"/#home"}>
            <img src={logo} alt="logo" />
          </Link>
        </div>
        <ul className="nav-links">
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
        <Link className="btn login-btn" to="/login">
          Login
        </Link>
      </div>
    </nav>
  );
};

export default NavBar;
