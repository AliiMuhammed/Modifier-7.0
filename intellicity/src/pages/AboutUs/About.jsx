import React from "react";
import "./style/about.css"
import MainHeader from "../../Shared/MainHeader";
import image from "../../Assest/Images/About/About-us.jpg"
import Team from "./components/Team";
function About() {
  return (
    <>
      <MainHeader
        paragraph={
          "We are shaping the future of urban living through cutting-edge smart services for smart cities."
        }
        title={"About Us"}
      />
      <section className="AboutUs-section">
        <div className="container">
          <div className="content">
            <div className="left">
              <h2>
                About <span>IntelliCity</span>
              </h2>
              <p>
                Intellicity is a visionary company committed to transforming
                cities into smarter, sustainable, and efficient urban
                landscapes. Their wide range of services is designed to cater to
                the unique needs of modern cities, focusing on smart parking,
                recycling, energy reduction, and more. By employing advanced
                sensor technologies and real-time data analytics, Intellicity
                optimizes parking spaces, easing traffic congestion and
                enhancing mobility. Their smart recycling solutions promote
                waste reduction and responsible recycling practices,
                contributing to cleaner and greener cities. With expertise in
                energy management, they implement intelligent solutions to
                reduce energy consumption and optimize usage, resulting in
                significant cost savings and reduced carbon footprints.
                Collaborating with local governments, businesses, and
                communities, Intellicity designs customized and scalable
                solutions that address specific urban challenges. Their
                dedicated team of experts strives to create future-proof
                solutions that harmoniously blend technology and innovation with
                the needs of the people and the planet. Join Intellicity in
                their mission to build resilient, sustainable, and intelligent
                cities, setting a path for a brighter urban future.
              </p>
            </div>
            <div className="right">
                <img src={image} alt="about-img" />
            </div>
          </div>
          <p>testtttttttttttttttttttttttttt</p>
          <Team/>
        </div>
      </section>
    </>
  );
}

export default About;
