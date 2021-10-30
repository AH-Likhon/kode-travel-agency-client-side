import React from 'react';
import { Card, Col, Row, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const Offer = ({ offer }) => {
    // const {offers} = props;
    const { id, country, destination, img, about } = offer;
    return (
        <div className="custom-offer">
            <Row xs={1} md={1} className="g-4">
                <Col>
                    <Card className="h-100">
                        <Card.Img className="card-img" variant="top" src={img} />
                        <Card.Body>
                            <Card.Title> {country} </Card.Title>
                            <Card.Title className="fw-bold"> {destination} </Card.Title>
                            <Card.Text>{about}</Card.Text>


                            {/* <Link to={`/offer/${id}`}> */}
                            <Link to="/bookNow">
                                <Button Button className="btn bg-black text-white" >Book Now</Button>
                            </Link>

                        </Card.Body>
                    </Card>
                </Col>
            </Row>
        </div>
    );
};

export default Offer;