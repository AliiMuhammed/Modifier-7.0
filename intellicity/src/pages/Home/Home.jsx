import React from 'react';

import Hero from "../../Shared/Hero"
import { AboutUs } from '../../Shared/AboutUs';
import OurServices from '../../Shared/OurServices';

const Home = () => {
    return (
        <>
            <Hero/>
            <AboutUs/>
            <OurServices/>
        </>
    );
};

export default Home;