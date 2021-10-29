import Button from '@restart/ui/esm/Button';
import React from 'react';
import { Card, Col, Row } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import './Service.css'

const Service = ({ service }) => {
    // const {service} = props;
    const { name, details, img } = service;
    return (
        <div className="custom-sevrice">
            <Row xs={1} md={1} className="g-4">
                <Col>
                    <Card className="custom-bg">
                        <Card.Img className="custom-img mx-auto my-3" variant="top" src={img} />
                        <Card.Body>
                            <Card.Title> {name} </Card.Title>
                            <Card.Text> {details} </Card.Text>

                            <Link to={`/doctor/${details}`}>
                                <Button className="btn bg-black text-white" >Details About</Button>
                            </Link>

                        </Card.Body>
                    </Card>
                </Col>
            </Row>
        </div>
    );
};

export default Service;