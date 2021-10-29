import React from "react";
import { useParams } from 'react-router';

const ServiceDetails = () => {
    const { details } = useParams();


    return (
        <div className="container w-50 mx-auto my-5">
            <h4>{details}</h4>
        </div>
    );
};

export default ServiceDetails;