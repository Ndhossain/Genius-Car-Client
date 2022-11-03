import React from 'react';
import AboutHome from './Home_About/Home_About';
import Banner from './Banner/Banner';
import HomeService from './Service/HomeService';

function Home() {
    return (
        <div>
            <Banner />
            <AboutHome />
            <HomeService />
        </div>
    );
}

export default Home;
