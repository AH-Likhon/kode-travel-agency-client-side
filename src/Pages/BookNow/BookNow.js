import React, { useState, useEffect } from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import { useForm } from 'react-hook-form';
import { useParams } from 'react-router';
import useFirebase from '../../hooks/useFirebase';
import './BookNow.css'

const BookNow = () => {
    const { user } = useFirebase();
    const { id } = useParams();
    const [offer, setOffer] = useState({});

    const { register, handleSubmit, reset, formState: { errors } } = useForm();
    useEffect(() => {
        const url = `https://infinite-garden-01511.herokuapp.com/allOffers/${id}`;

        fetch(url)
            .then(res => res.json())
            .then(data => setOffer(data))
    }, [])

    const onSubmit = (data) => {
        data.status = "Pending";
        fetch("https://infinite-garden-01511.herokuapp.com/booking", {
            method: "POST",
            headers: { "content-type": "application/json" },
            body: JSON.stringify(data),
        })
            .then(res => res.json())
            .then(result => {
                if (result.insertedId) {
                    alert('Successfully Booked');
                    console.log(result);
                    reset();
                }
            });
        // console.log(data);
    };

    return (
        <div className="my-5">

            <Container>
                <Row>
                    <Col className="my-5" sm={12} md={6}>

                        <img className="w-75 mb-3" src={offer.image} alt="" />
                        <h4>Country: {offer.country}</h4>
                        <h4>Tourist Spot: {offer.destination}</h4>
                        <h4>Tour Duration: {offer.number} Days</h4>

                    </Col>

                    <Col sm={12} md={6}>
                        <h1 className="text-center text-danger">Please, Book Now</h1>
                        <div className="w-100 m-auto my-3">
                            <div className="border ">
                                <div className="login-form my-3">
                                    <form className="booking-form" onSubmit={handleSubmit(onSubmit)}>

                                        <input defaultValue={user.displayName} {...register("name")} className="p-2 m-2 w-75" />
                                        <br />

                                        <input defaultValue={user.email} {...register("email", { required: true })} className="p-2 m-2 w-75" />
                                        <br />

                                        {errors.exampleRequired && <span className="error">This field is required</span>}

                                        <input placeholder="Address" defaultValue="" {...register("address")} className="p-2 m-2 w-75" />
                                        <br />
                                        <input placeholder="City" defaultValue="" {...register("city")} className="p-2 m-2 w-75" />
                                        <br />
                                        <input placeholder="Phone Number" defaultValue="" {...register("phone")} className="p-2 m-2 w-75" />
                                        <br />

                                        <input type="submit" value="Submit" className="btn btn-danger w-75" />
                                    </form>
                                </div>
                            </div>
                        </div>
                    </Col>
                </Row>
            </Container>
        </div>
    );
};

export default BookNow;