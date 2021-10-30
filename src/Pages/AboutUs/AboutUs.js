import React from 'react';
import img3 from '../../images/img-3.jpg'

const AboutUs = () => {
    return (
        <div class="container mb-5">
            <h2 className="text-dark mt-5">About Our Clinic</h2>
            <p className="text-muted mb-0">Our goals and values</p>
            <hr className="w-25 mx-auto mt-0" />
            <div class="row">
                <div class="col-sm-12 col-md-6 my-auto">
                    <img className="w-100" src={img3} alt="" />
                </div>
                <div class="col-sm-12 col-md-6 my-auto">
                    <h4>Who are we?</h4>
                    <p>KodeTravel is the country’s first and leading online travel aggregator. Initially started with the name Travel Booking BD, we had a dream to make travel easier for people. And that is what we did since our inception. And now with our new, innovative, easy to use app, travel services are on your palm. The dynamic app lets you book your flight, find your perfect holiday from our thousands of holiday packages around the globe.</p>

                    <p>KodeTravel is revolutionizing the way we book travel services. With KodeTravel’s website and mobile app, booking your flight, hotel or holiday become more fun that you would think. With exciting games and real rewards like free trips and air ticket makes ShareTrip more fun to use! You can also win TripCoin by playing games and booking service from KodeTravel, that you can use to avail discount.</p>

                    <p>We have more than 100 employees, who are all experts in their respective fields. They have the experience and professionalism to understand each and every customer's requirements and fulfill it. With today’s era of digitalization, where everyone has a lot of information and choice in hand, our clients still choose us. Because we provide the best rates and wide range of choices for your accommodations and travel plans.</p>

                    <button type="button" className="btn btn-danger mt-2">More About Us</button>
                </div>
            </div>
        </div>
    );
};

export default AboutUs;