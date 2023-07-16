import React from "react";
import { Link } from "react-router-dom";
import landing from "../Assest/Images/Hero/landing.jpg";
import "../Style/hero.css";
const Header = () => {
  return (
    <>
      <section className="hero-section">
        <div className="container">
          <div className="content">
            <div className="left">
            <h1>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus,
              earum.
            </h1>
            <p>
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Eaque
              quae adipisci reiciendis, id eligendi neque animi in explicabo
              commodi tenetur, quidem quisquam, itaque rerum ad?
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
