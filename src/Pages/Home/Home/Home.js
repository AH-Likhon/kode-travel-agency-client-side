import React from 'react';
import Footer from '../../Footer/Footer';
import Banner from '../Banner/Banner';
import Offers from '../Offers/Offers';



import Services from '../Services/Services';

const Home = () => {
    return (
        <div id="home" >
            <Banner></Banner>
            <Offers></Offers>
            <Services></Services>
        </div>
    );
};

export default Home;