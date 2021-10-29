import React from 'react';
import { Col, Container, Form, Row, Button } from 'react-bootstrap';
import logo from '../../images/logo.png';
import img1 from '../../images/news-img-1.jpg';
import img2 from '../../images/news-img-2.jpg';
import './Footer.css'

const Footer = () => {
    return (
        <div className="footer bg-dark">
            <Container>
                <Row>
                    <Col xs={12} md={4}>
                        <img src={logo} alt="" />
                        <p className="mt-2"><small className="text-center">Our focus is on your overall well-being and helping you achieve optimal health and esthetics. We provide state of the art dental care. Dentistry is the science and art of preventing, diagnosing, treating, injuries and disease.</small></p>
                    </Col>
                    <Col xs={12} md={4}>
                        <h4 className="text-light">Recent News</h4>
                        <hr className="text-light w-25 mx-auto border-1" />
                        <div className="d-flex justify-content-between align-items-center">
                            <img className="rounded-circle" src={img1} alt="" />
                            <small>Dental patients given increased protection</small>
                        </div>
                        <div className="d-flex justify-content-between align-items-center mt-2">
                            <img className="rounded-circle" src={img2} alt="" />
                            <small>Best Wedding Day Smile with Dentistry Procedures</small>
                        </div>
                    </Col>
                    <Col xs={12} md={4}>
                        <h4 className="text-light">Contact Us</h4>
                        <hr className="text-light w-25 mx-auto border-1" />
                        <Form className="w-75 mx-auto">
                            <Form.Group className="mb-2" controlId="formBasicName">
                                <Form.Label className="ms-0 text-dark">Name</Form.Label>
                                <Form.Control size="sm" type="text" className="bg-transparent" />
                            </Form.Group>
                            <Form.Group className="mb-2" controlId="formBasicEmail">
                                <Form.Label className="ms-0 text-dark">Email*</Form.Label>
                                <Form.Control size="sm" type="text" className="bg-transparent" />
                            </Form.Group>
                            <Form.Group className="mb-2" controlId="exampleForm.ControlTextarea1">
                                <Form.Label className="text-dark">Message*</Form.Label>
                                <Form.Control className="bg-transparent" as="textarea" rows={2} />
                            </Form.Group>
                            <Button className="bg-dark border-0" type="submit">
                                Send Message
                            </Button>
                        </Form>
                    </Col>
                </Row>

            </Container>
        </div>
    );
};

export default Footer;