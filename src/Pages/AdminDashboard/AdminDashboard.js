import React, { useState } from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import AddNewOffer from '../AddNewOffer/AddNewOffer';
import AllBooked from '../AllBooked/AllBooked';
import AllOffers from '../AllOffers/AllOffers';
import MyBooking from '../MyBooking/MyBooking';
import './AdminDashboard.css'

const AdminDashboard = () => {
    const [control, setControl] = useState("allOffers");

    // console.log(control);

    return (

        <div className="my-5">
            <Container>
                <Row>
                    <Col className="my-5 list-style" sm={12} md={4}>
                        <ul className="my-5 w-75">
                            <li onClick={() => setControl("allOffers")}
                                className="admin-menu p-2">
                                Manage All Offers
                            </li>

                            <li onClick={() => setControl("allBooked")}
                                className="admin-menu p-2">
                                Manage All Booked
                            </li>

                            <li onClick={() => setControl("myBooked")}
                                className="admin-menu p-2">
                                My Booked
                            </li>

                            <li onClick={() => setControl("addNewOffer")}
                                className="admin-menu p-2">
                                Add A New Offer
                            </li>
                        </ul>
                    </Col>

                    <Col sm={12} md={8}>
                        <div className="w-100">
                            {control === "allOffers" && <AllOffers></AllOffers>}
                            {control === "allBooked" && <AllBooked></AllBooked>}
                            {control === "myBooked" && <MyBooking></MyBooking>}
                            {control === "addNewOffer" && <AddNewOffer></AddNewOffer>}
                        </div>
                    </Col>
                </Row>
            </Container>
        </div>
    );
};

export default AdminDashboard;