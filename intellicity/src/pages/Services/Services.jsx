import React, { useEffect, useState } from "react";
import MainHeader from "../../Shared/MainHeader";
import ServicesCard from "./components/ServicesCard";
import Spinner from "react-bootstrap/Spinner";
import axios from "axios";
import Alert from "react-bootstrap/Alert";
function Services() {
  const [service, setService] = useState({
    loading: false,
    results: [],
    err: null,});

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
  }, []);

  const displayServices = () => {
    return (
      <>
        {service.loading === false && service.results.length !== 0 && (
          <>
            {service.results.map((serv) => {
              const truncatedContent = serv.description
                .split(" ")
                .slice(0, 80)
                .join(" ");
              return serv.id % 2 === 0 ? (
                <ServicesCard
                  key={serv.id}
                  picture={serv.img}
                  content={`${truncatedContent}...`}
                  title={serv.name}
                  available={serv.status}
                  picturePosition={"left"}
                />
              ) : (
                <ServicesCard
                  key={serv.id}
                  picture={serv.img}
                  content={`${truncatedContent}....`}
                  title={serv.name}
                  available={serv.status}
                  picturePosition={"right"}
                />
              );
            })}
          </>
        )}
      </>
    );
  };

  return (
    <>
      <MainHeader
        title={"Our Services"}
        paragraph={
          "Discover a world of smarter living with Intellicity's cutting-edge smart city solutions and services."
        }
      />

      <section className="services-section">
        <div className="container">
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
    </>
  );
}

export default Services;
