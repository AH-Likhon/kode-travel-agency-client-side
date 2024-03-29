import React from 'react';
import { Carousel } from 'react-bootstrap';
import img1 from '../../../images/banner/homepage-cta.jpg';
import img2 from '../../../images/banner/grand-canyon-home-01.jpg';
import img3 from '../../../images/banner/slider-3.jpg';
import './Banner.css';

const Banner = () => {
    return (
        <div >
            {/* className='banner d-flex align-items-center' */}
            {/* <div className="container">
                <div className="row">
                    <div className="col-md-8">
                        <h1 className="banner-title" >High Innovative Technlogy & Professional Dentists</h1>
                        <p className="sub-title">Dr. Joseph Phillips is an active member of the Academy of  General Dentistry and strives to stay up to date with the latest  in techniques and technology in the dental profession.</p>

                    </div>
                    <div className="col-md-4"></div>
                </div>
            </div> */}
            <Carousel>
                <Carousel.Item interval={1000}>
                    <img
                        className="d-block w-100 slider-img"
                        src={img1}
                        alt="First slide"
                    />
                    <Carousel.Caption>
                        <h4>ITALY</h4>
                        <h2>VENEZIA</h2>
                        <p>Italy is not only blessed with beautiful beaches, snowy mountain peaks, fresh water lakes and verdant valleys; the country is also replete with thermal baths and hot springs. As the saying goes, some like it hot, and the most famous and loveliest thermal springs are found in Tuscany's southern Maremma region.</p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item interval={500}>
                    <img
                        className="d-block w-100 slider-img"
                        src={img2}
                        alt="Second slide"
                    />
                    <Carousel.Caption>
                        <h4>SWITZERLAND</h4>
                        <h2>ZURICH</h2>
                        <p>A landlocked country of towering mountains, deep Alpine lakes, grassy valleys dotted with neat farms and small villages, and thriving cities that blend the old and the new, Switzerland is the nexus of the diverse physical and cultural geography of western Europe, renowned for both its natural beauty and its way of life.</p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="d-block w-100 slider-img"
                        src={img3}
                        alt="Third slide"
                    />
                    <Carousel.Caption>
                        <h4>FRANCE</h4>
                        <h2>PARIS</h2>
                        <p>France might be famed for its impressive man-made landmarks – think the Eiffel Tower, the Palace of Versailles and the Pont du Gard – but the landscape has just as much to offer. From the towering Alps to the otherworldly salt flats of Camargue, France is a bounty of natural wonders just waiting to be discovered.</p>
                    </Carousel.Caption>
                </Carousel.Item>
            </Carousel>
        </div>
    );
};

export default Banner;