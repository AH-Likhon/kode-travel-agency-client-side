import React, { useEffect, useState } from 'react';
import { Table } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import useFirebase from '../../hooks/useFirebase';

const MyBooking = () => {
    const { user } = useFirebase();
    const [booked, setBooked] = useState([]);


    useEffect(() => {
        fetch(`http://localhost:5000/myBooking/${user?.email}`)
            .then((res) => res.json())
            .then((data) => setBooked(data));
    }, [user.email]);

    const handleDelete = (id) => {
        const proceed = window.confirm('Do you want to delete?');
        if (proceed) {
            fetch(`http://localhost:5000/myBooking/${id}`, {
                method: "DELETE",
                headers: { "content-type": "application/json" },
            })
                .then((res) => res.json())
                .then((data) => {
                    console.log(data);
                    if (data.deletedCount) {
                        alert('Succesfully Deleted');
                        const remaining = booked.filter(book => book._id !== id);
                        setBooked(remaining);
                    }
                });
        }
        console.log(id);
    };

    console.log(booked);
    return (
        <div>
            <h1>My Booked : {booked.length}</h1>

            <Table striped bordered hover>
                <thead>
                    <tr>
                        <th>SI</th>
                        <th>Name</th>
                        <th>Email</th>
                        <th>Address</th>
                        <th>Status</th>
                        <th>Update</th>
                        <th>Delete</th>
                    </tr>
                </thead>
                {booked?.map((pd, index) => (
                    <tbody key={pd._id}>
                        <tr>
                            <td>{index}</td>
                            <td>{pd.name}</td>
                            <td>{pd.email}</td>
                            <td>{pd.address}</td>
                            <td>{pd.status}</td>
                            <td>
                                <Link to={`/myBooking/update/${pd._id}`}><button className="btn bg-danger p-2">Update</button></Link>

                            </td>
                            <td>
                                <button
                                    onClick={() => handleDelete(pd._id)}
                                    className="btn bg-danger p-2"
                                >
                                    Delete
                                </button>
                            </td>

                        </tr>
                    </tbody>
                ))}
            </Table>
        </div>
    );
};

export default MyBooking;