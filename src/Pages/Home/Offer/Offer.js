import React from 'react';
import { Card, Col, Row, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const Offer = ({ offer }) => {
    // const {offers} = props;
    const { _id, country, destination, image, about, number } = offer;
    return (
        <div className="custom-offer">
            <Row xs={1} md={1} className="g-4">
                <Col>
                    <Card className="h-100">
                        <Card.Img className="card-img" variant="top" src={image} />
                        <Card.Body>
                            <Card.Title>Country: {country} </Card.Title>
                            <Card.Title className="fw-bold">Tourist Spot: {destination} </Card.Title>
                            <Card.Title className="fw-bold">Tour Duration: {number} Days </Card.Title>
                            <Card.Text>{about}</Card.Text>


                            {/* <Link to={`/offer/${id}`}> */}
                            <Link to={`/bookNow/${_id}`}>
                                <Button Button className="btn bg-danger border-0 text-white" >Book Now</Button>
                            </Link>

                        </Card.Body>
                    </Card>
                </Col>
            </Row>
        </div>
    );
};

export default Offer;