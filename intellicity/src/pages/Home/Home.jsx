import React from "react";

import Hero from "./components/Hero";
import { AboutUs } from "./components/AboutUs";
import OurServices from "../../Shared/OurServices";


const Home = () => {
  return (
    <>
      <Hero />
      <AboutUs />
      <OurServices />
    </>
  );
};

export default Home;
