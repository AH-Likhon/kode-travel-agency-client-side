import React, { useEffect, useState } from 'react';
import Offer from '../Offer/Offer';
import './Offers.css'

const Offers = () => {
    const [offers, setOffers] = useState([])
    useEffect(() => {
        fetch('offers.json')
            .then(res => res.json())
            .then(data => setOffers(data));
    }, [])

    return (
        <div id="offers">
            <h2 className="text-dark mt-5">BEST OFFERS</h2>
            <p className="text-muted mb-0">CHECK OUT OUR BEST PROMOTION TOURS</p>
            <hr className="w-25 mx-auto mt-0" />
            <div className="container my-5 offer-container">
                {
                    offers.map(offer => <Offer
                        key={offer.id}
                        offer={offer}
                    ></Offer>)
                }
            </div>
        </div>
    );
};

export default Offers;