import React from 'react';
import img3 from '../../images/img-3.jpg'

const AboutUs = () => {
    return (
        <div class="container mb-5">
            <h2 className="text-dark mt-5">About Our Clinic</h2>
            <p className="text-muted mb-0">Our goals and values</p>
            <hr className="w-25 mx-auto mt-0" />
            <div class="row">
                <div class="col-sm-12 col-md-6">
                    <img src={img3} alt="" />
                </div>
                <div class="col-sm-12 col-md-6 my-auto">
                    <p>Our focus is on your overall well being and helping you achieve optimal health and esthetics. We provide state-of-the-art dental care in a comfortable.</p>
                    <h4>Our Mission</h4>
                    <small>Has provided a high class facility for the treatment</small>
                    <h4>Professionals in our Clinic</h4>
                    <small>Has provided a high class facility for the treatment</small><br />
                    <button type="button" className="btn btn-dark mt-2">More About Us</button>
                </div>
            </div>
        </div>
    );
};

export default AboutUs;