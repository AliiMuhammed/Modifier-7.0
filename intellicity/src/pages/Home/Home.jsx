import React from "react";

import Hero from "./components/Hero";
import { AboutUs } from "./components/AboutUs";
import OurServices from "./components/OurServices";
import ContactUs from "./components/ContactUs";

const Home = () => {
  return (
    <>
      <Hero />
      <AboutUs />
      <OurServices />
      <ContactUs />
    </>
  );
};

export default Home;
