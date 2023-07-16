import React from "react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import img from "../Assest/Images/About/about.jpg";
import "../Style/services.css";

import MainHeading from "./MainHeading";
import ServiceCard from "./ServiceCard";
function OurServices() {
  const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 1024 },
      items: 3,
    },
    desktop: {
      breakpoint: { max: 1024, min: 800 },
      items: 3,
    },
    tablet: {
      breakpoint: { max: 800, min: 464 },
      items: 2,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
    },
  };
  return (
    <section className="our-services" id="our-services">
      <div className="container">
        <div className="heading">
          <MainHeading haeding={"our services"} />
        </div>
        <Carousel
          responsive={responsive}
          arrows={true}
          infinite
          autoPlay={true}
          partialVisbile={true}
          className="services-slider"
        >
          <ServiceCard img={img} title={"ParkSense"} />
          <ServiceCard img={img} title={"EcoCycle"} />
          <ServiceCard img={img} title={"EnSmart"} />
          <ServiceCard img={img} title={"MobiliCity"} />
        </Carousel>
      </div>
    </section>
  );
}

export default OurServices;
