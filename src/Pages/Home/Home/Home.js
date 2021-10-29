import React from 'react';
import Footer from '../../Footer/Footer';
import Banner from '../Banner/Banner';
import ChooseUs from '../ChooseUs/ChooseUs';
import Offers from '../Offers/Offers';



import Services from '../Services/Services';
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