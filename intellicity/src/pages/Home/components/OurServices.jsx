import React, { useEffect, useState } from "react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import Spinner from "react-bootstrap/Spinner";
import axios from "axios";
import Alert from "react-bootstrap/Alert";
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

  const [service, setService] = useState({
    loading: false,
    results: [],
    err: null,
    reload: 0,
  });

  useEffect(() => {
    setService({ ...service, loading: true });
    axios
      .get("http://localhost:5000/services/getAll")
      .then((resp) => {
        setService({ ...service, results: resp.data, loading: false });
      })
      .catch((err) => {
        setService({
          ...service,
          loading: false,
          err: "Error can't load Services",
        });
      });
  }, [service.reload]);

  const displayServices = () => {
    return (
      <>
        <Carousel
          responsive={responsive}
          arrows={true}
          infinite
          autoPlay={true}
          partialVisible={true}
          className="services-slider"
        >
          {service.results.map((serv) => {
            return (
              <ServiceCard key={serv.id} img={serv.img} title={serv.name} />
            );
          })}
        </Carousel>
      </>
    );
  };

  return (
    <section className="our-services" id="our-services">
      <div className="container">
        <div className="heading">
          <MainHeading haeding={"our services"} />
        </div>
        {/* loader..... */}
        {service.loading === true && (
          <div className="loader-dev">
            <Spinner animation="grow" className="loader" />
          </div>
        )}
        {/* displayServices */}
        {service.loading === false &&
          service.err === null &&
          service.results.length !== 0 && <>{displayServices()}</>}

        {/* errors handling */}
        {service.loading === false && service.err != null && (
          <div className="alert-container container">
            <Alert variant="danger" className="alret">
              {service.err}
            </Alert>
          </div>
        )}
        {service.loading === false &&
          service.err == null &&
          service.results.length === 0 && (
            <div className="alert-container container">
              <Alert className="alret-notAvailable">
                There is no services available please come back later
              </Alert>
            </div>
          )}
      </div>
    </section>
  );
}

export default OurServices;
