import React from 'react';
import { Card, Col, Row, Button } from 'react-bootstrap';
import './ChooseUs.css'

const ChooseUs = () => {
    return (
        <div className="bg-img my-5 text-center py-5">
            <h3 className="text-white">WHY CHOOSE US ?</h3>
            <div className="container">
                <Row xs={1} md={3} className="g-4 mt-4">
                    <Col>
                        <Card className="h-100">
                            <i className="fas fa-star mx-auto fw-bold icon-style"></i>
                            <Card.Body>
                                <Card.Title className="fw-bold">Cost Effective</Card.Title>
                                <Card.Text>
                                    We are very well known that how much you have worked hard for your savings, we want to save as much as possible on your tripsa nd get the best services and other VIP facilities within that budget at the same time. This is where our cheap tour packages from Bangladesh come into play. Our tour packages are designed in such a manner that you are bound to get the best such pleasure in such a little amount of money in any other agencies. We believe in quality with more other anything. Thus ensuring that your vacation goes as planned and your satisfaction level reaches to a new height. This is how we achieve our client's trust. The clients that we have already served have now made us their permanent traveling partner and they are happy with our cheap tour packages and overall services. We even provide discounts to our loyal customers. So give us a try today and let us have the honor of becoming a part opf your life by fulfilling your traveling satisfaction in the cheapest way possible.
                                    {/* Turkey is an insanely beautiful country. Surrounded by water on three sides, the coasts of Turkey are some of the most beautiful in the world. With crystal clear waters, fantastic beaches, and quaint fishing villages, the Turkish coast is one of the most pristine in the world. */}
                                </Card.Text>
                                <Button variant="danger">Learn More</Button>
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col>
                        <Card className="h-100">
                            <i className="fas fa-globe-asia mx-auto fw-bold icon-style"></i>
                            <Card.Body>
                                <Card.Title className="fw-bold">Quality Assurance</Card.Title>
                                <Card.Text>
                                    This is the next important thing after costing factor. If you take one or two weeks off from your everyday life, you want these weeks to be most relaxing and fun-filled weeks of your life. We konw how hard it is to take days off from work. Many companies don't approve such a long vacation. However, once it does, each second of those days counts and matters to you. Therefore, KodeTravel agency is here to make sure that you get nothing but relaxation and fun throughout your ebtire holiday, making a memorable holiday for you. We promise that at the end of your tour you will definitely feel pleased and mentally satisfied to its core. You will not feel like ending your tour.Our Quality of service will definitely make you feel like you are at home and enjoying the natures mesmerizing view,and the exoticness of nature will refresh you and energize you fully making you ready to get back to your regular life until next time you need us to energize again. We will provide you the best accommodations, food and flights possible within a very low budget...
                                </Card.Text>
                                <Button variant="danger">Learn More</Button>
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col>
                        <Card className="h-100">
                            <i className="fas fa-thumbs-up mx-auto fw-bold icon-style"></i>
                            <Card.Body>
                                <Card.Title className="fw-bold">Hassle-free traveling</Card.Title>
                                <Card.Text>
                                    What is the point of traveling if you have to through a lot of hassles and abstacles? To ensure that this trust and mood-breaking experience do not happen, our expert team is there to take care of it all. Right after you choose your tour package, the first thing that can be a problem is with the visa. As mentioned earlier, we were the best visa-processing agency in bangladesh, it will not be a challenge for us. We will need a few documents from you and the rest is our headache. Once we receive your visa, rests on the procedures are cery easy. We will book and buy the ticket of the airliners in which you will be travelling to your destination. We will give you the best airlines, which have the best quality of service. For your accomodations, we will book thew best hotel there is available and most importantly, a hotel, which is well secured. Security of our customers is one of the major priorities that we give. You can not have fun and enjoy if you have the the btension of your belongings in the back end of your mind.
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