import React from 'react';
import { useParams } from 'react-router';

const OfferDetails = () => {
    const { id } = useParams();

    return (
        <div className="container w-50 mx-auto my-5">
            <h4>{id}</h4>
        </div>
    );
};

export default OfferDetails;