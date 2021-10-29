import React from 'react';
import { Card, Col, Row, Button } from 'react-bootstrap';
import './ChooseUs.css'

const ChooseUs = () => {
    return (
        <div className="bg-img my-5 text-center py-5">
            <h3 className="text-white">WHY CHOOSE US </h3>
            <div className="container">
                <Row xs={1} md={3} className="g-4 mt-4">
                    <Col>
                        <Card className="h-100">
                            <i className="fas fa-star mx-auto fw-bold icon-style"></i>
                            <Card.Body>
                                <Card.Title className="fw-bold">HandPicked Hotels</Card.Title>
                                <Card.Text>
                                    Turkey is an insanely beautiful country. Surrounded by water on three sides, the coasts of Turkey are some of the most beautiful in the world. With crystal clear waters, fantastic beaches, and quaint fishing villages, the Turkish coast is one of the most pristine in the world.
                                </Card.Text>
                                <Button variant="danger">Learn More</Button>
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col>
                        <Card className="h-100">
                            <i className="fas fa-globe-asia mx-auto fw-bold icon-style"></i>
                            <Card.Body>
                                <Card.Title className="fw-bold">World Class Service</Card.Title>
                                <Card.Text>
                                    Madrid is one of the most beautiful cities in Spain and its capital is the heart of the country.Within its boundaries you'll find a range of cultural and historical treasures such as the Royal Palace,Royal Theater along with numerous museums and art galleries that are unmatched elsewhere in Europe.
                                </Card.Text>
                                <Button variant="danger">Learn More</Button>
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col>
                        <Card className="h-100">
                            <i className="fas fa-thumbs-up mx-auto fw-bold icon-style"></i>
                            <Card.Body>
                                <Card.Title className="fw-bold">Best Price Guarantee</Card.Title>
                                <Card.Text>
                                    Madrid is one of the most beautiful cities in Spain and its capital is the heart of the country.Within its boundaries you'll find a range of cultural and historical treasures such as the Royal Palace,Royal Theater along with numerous museums and art galleries that are unmatched elsewhere in Europe.
                                </Card.Text>
                                <Button variant="danger">Learn More</Button>
                            </Card.Body>
                        </Card>
                    </Col>
                </Row>
            </div>
        </div>
    );
};

export default ChooseUs;