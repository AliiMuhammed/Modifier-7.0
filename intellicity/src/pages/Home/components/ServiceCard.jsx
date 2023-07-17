import React from "react";
import { Link } from "react-router-dom";
function ServiceCard({ img, title, desc }) {
  return (
    <div className="service-card">
      <div className="services-img">
        <img src={img} alt="serviceImage" />
      </div>
      <h3>{title}</h3>
      <Link className="main-btn view-more-main-btn" to={"/"}>
        View More
      </Link>
    </div>
  );
}

export default ServiceCard;
