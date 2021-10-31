import React, { useEffect, useState } from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import { useParams } from 'react-router';

const UpdateMyBooking = () => {
    const [booking, setBooking] = useState({});
    const { id } = useParams();

    useEffect(() => {
        const url = `https://infinite-garden-01511.herokuapp.com/myBooking/${id}`;

        fetch(url)
            .then(res => res.json())
            .then(data => setBooking(data))
    }, []);

    //update myBooking
    const updateNameChange = e => {
        const updateName = e.target.value;
        const updateBooking = { ...booking };
        updateBooking.name = updateName;
        setBooking(updateBooking);
    }

    const updateEmailChange = e => {
        const updateEmail = e.target.value;
        const updateBooking = { ...booking };
        updateBooking.email = updateEmail;
        setBooking(updateBooking);
    }
    const updateAddressChange = e => {
        const updateAddress = e.target.value;
        const updateBooking = { ...booking };
        updateBooking.address = updateAddress;
        setBooking(updateBooking);
    }
    const updateStatusChange = e => {
        const updateStatus = e.target.value;
        const updateBooking = { ...booking };
        updateBooking.status = updateStatus;
        setBooking(updateBooking);
    }
    const updateCityChange = e => {
        const updateCity = e.target.value;
        const updateBooking = { ...booking };
        updateBooking.city = updateCity;
        setBooking(updateBooking);
    }
    const updatePhoneChange = e => {
        const updatePhone = e.target.value;
        const updateBooking = { ...booking };
        updateBooking.phone = updatePhone;
        setBooking(updateBooking);
    }

    const handleUpdateBooking = e => {
        const url = `https://infinite-garden-01511.herokuapp.com/myBooking/${id}`;
        fetch(url, {
            method: 'PUT',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(booking)
        })
            .then(res => res.json())
            .then(data => {
                if (data.modifiedCount > 0) {
                    alert('Successfully Updated');
                    setBooking(booking);
                }
            })

        e.preventDefault();
    }


    return (
        <div className="my-5">
            <h3>Update Your Information</h3>

            <Container className="my-5">
                <Row>
                    <Col xs={12} md={6}>
                        <h4>Update Name: {booking.name}</h4>
                        <h4>Update Email: {booking.email}</h4>
                        <h4>Update Address: {booking.address}</h4>
                        <h4>Update City: {booking.city}</h4>
                        <h4>Update Status: {booking.status}</h4>
                        <h4>Update Phone: {booking.phone}</h4>
                    </Col>

                    <Col xs={12} md={6}>
                        <form onSubmit={handleUpdateBooking}>
                            <input type="text" className="m-2 w-50" onChange={updateNameChange} value={booking.name || ''} placeholder="Name" /> <br />

                            <input type="email" className="m-2 w-50" onChange={updateEmailChange} value={booking.email || ''} placeholder="Email" /><br />

                            <input type="text" className="m-2 w-50" onChange={updateAddressChange} value={booking.address || ''} placeholder="Address" /><br />

                            <input type="text" className="m-2 w-50" onChange={updateCityChange} value={booking.city || ''} placeholder="City" /><br />

                            <input type="text" className="m-2 w-50" onChange={updateStatusChange} value={booking.status || ''} placeholder="Status" /><br />

                            <input type="number" className="m-2 w-50" onChange={updatePhoneChange} value={booking.phone || ''} placeholder="Phone Number" /><br />

                            <input type="submit" value="Update" />

                        </form>
                    </Col>
                </Row>
            </Container>

        </div>
    );
};

export default UpdateMyBooking;