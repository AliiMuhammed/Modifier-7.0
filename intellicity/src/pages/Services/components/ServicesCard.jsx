import React from "react";
import { Link } from "react-router-dom";
import "../style/serviceCard.css";

const ServicesCard = ({
  title,
  picture,
  content,
  picturePosition,
  available,
}) => {
  return (
    <section className="service-section">
      <div className="container">
        {picturePosition === "left" ? (
          <div className="card-service left">
            <div className="service-img">
              <img src={picture} alt="service" />
            </div>
            <div className="card-content">
              <h2>{title}</h2>
              <p>{content}</p>
              {available ? (
                <button className="main-btn service-card-btn">
                  <Link to={"#"}>Know more</Link>
                </button>
              ) : (
                <button className="main-btn service-card-btn " disabled>
                  Available Soon
                </button>
              )}
            </div>
          </div>
        ) : (
          <div className="card-service right">
            <div className="service-img">
              <img src={picture} alt="service" />
            </div>
            <div className="card-content">
              <h2>{title}</h2>
              <p>{content}</p>
              {available ? (
                <button className="main-btn service-card-btn">
                  <Link to={"#"}>Know more</Link>
                </button>
              ) : (
                <button className="main-btn service-card-btn " disabled>
                  Available Soon
                </button>
              )}
            </div>
          </div>
        )}
      </div>
    </section>
  );
};

export default ServicesCard;
