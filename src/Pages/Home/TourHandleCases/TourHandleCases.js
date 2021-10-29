import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';

const TourHandleCases = () => {
    return (
        <div className="my-5">
            <Container>
                <Row>
                    <Col xs={6} md={3} className="text-center">
                        <i className="fas fa-smile fs-1 text-secondary"></i>
                        <h3>70,101</h3>
                        <p className="text-danger">HAPPY CUSTOMERS</p>
                    </Col>
                    <Col xs={6} md={3} className="text-center">
                        <i className="fas fa-bus-alt fs-1 text-secondary"></i>
                        <h3>109</h3>
                        <p className="text-danger">AMAZING TOURS</p>
                    </Col>
                    <Col xs={6} md={3} className="text-center">
                        <i className="fas fa-briefcase fs-1 text-secondary"></i>
                        <h3>6,409</h3>
                        <p className="text-danger">IN BUSINESS</p>
                    </Col>
                    <Col xs={6} md={3} className="text-center">
                        <i className="fas fa-comments fs-1 text-secondary"></i>
                        <h3>10,876</h3>
                        <p className="text-danger">SUPPORT CASES</p>
                    </Col>
                </Row>
            </Container>
        </div>
    );
};

export default TourHandleCases;