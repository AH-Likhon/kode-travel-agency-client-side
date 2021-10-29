import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';

const OfferDetails = () => {
    const { id } = useParams();
    // const [offerDetails, setOfferDetails] = useState([]);

    // useEffect(() => {
    //     fetch(`offers.json/${id}`)
    //         .then(res => res.json())
    //         .then(data => console.log(data))
    // }, [])


    return (
        <div className="container w-50 mx-auto my-5">
            <h4>{id}</h4>
        </div>
    );
};

export default OfferDetails;