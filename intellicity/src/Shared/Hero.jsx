import React from "react";
import { Link } from "react-router-dom";
import landing from "../Assest/Images/Hero/landing.png";
import "../Style/hero.css";
const Header = () => {
  return (
    <>
      <section className="hero-section" id="home">
        <div className="container">
          <div className="content">
            <div className="left">
              <h1>Creating Intelligent Cities, Enhancing Quality of Life</h1>
              <p>
              Transforming cities with smart solutions. From intelligent parking to sustainable waste management, we create greener, more connected urban environments for a brighter future.
              </p>
              <Link className="btn hero-btn" to={"#our-services"}>
                View Our Services
              </Link>
            </div>
            <div className="right">
              <img src={landing} alt="" />
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Header;
