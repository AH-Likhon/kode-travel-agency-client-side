import React from 'react';
import Banner from '../Banner/Banner';
import ChooseUs from '../ChooseUs/ChooseUs';
import Offers from '../Offers/Offers';
import TourHandleCases from '../TourHandleCases/TourHandleCases';

const Home = () => {
    return (
        <div id="home" >
            <Banner></Banner>
            <Offers></Offers>
            <ChooseUs></ChooseUs>
            <TourHandleCases></TourHandleCases>
            {/* <Services></Services> */}
        </div>
    );
};

export default Home;