import React from "react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import parkingImg from "../../../Assest/Images/services/parking.png";
import recycleImg from "../../../Assest/Images/services/recycle.png";
import powerImg from "../../../Assest/Images/services/power.png";
import transImg from "../../../Assest/Images/services/transport.png";
import "../style/services.css";

import MainHeading from "../../../Shared/MainHeading";
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
          partialVisible={true}
          className="services-slider"
        >
          <ServiceCard img={recycleImg} title={"EcoCycle"} />
          <ServiceCard img={parkingImg} title={"ParkSense"} />
          <ServiceCard img={powerImg} title={"EnSmart"} />
          <ServiceCard img={transImg} title={"MobiliCity"} />
        </Carousel>
      </div>
    </section>
  );
}

export default OurServices;
