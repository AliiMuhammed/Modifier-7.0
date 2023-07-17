import React from "react";
import { Link } from "react-router-dom";
import aboutImg from "../../../Assest/Images/About/about.jpg";
import "../style/about.css";
import MainHeading from "../../../Shared/MainHeading";
export const AboutUs = () => {
  return (
    <>
      <section className="about" id="about">
        <div className="container">
          <MainHeading haeding={"about us"} />
          <div className="content">
            <div className="left">
              <img src={aboutImg} alt="" />
            </div>
            <div className="right">
              <h1>
                Revolutionizing Urban Living through Intelligent Solutions
              </h1>
              <p>
                IntelliCity is a pioneering company specializing in the field of
                smart cities and urban development. With a strong focus on
                transforming cities into intelligent and sustainable living
                spaces, IntelliCity offers a range of innovative solutions that
                enhance urban life and contribute to a greener future.
              </p>
              <p>
                At IntelliCity, we understand the potential of technology and
                data-driven solutions in shaping the cities of tomorrow. Our
                expertise lies in integrating cutting-edge technologies and
                intelligent systems to optimize various aspects of urban living.
                We are passionate about creating connected communities,
                improving resource efficiency, and enhancing the overall quality
                of life for residents.
              </p>
              <Link className="main-btn about-main-btn" to={"/team"}>
                our team
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};
