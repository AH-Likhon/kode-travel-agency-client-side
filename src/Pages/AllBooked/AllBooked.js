import React, { useEffect, useState } from 'react';
import { Table } from 'react-bootstrap';

const AllBooked = () => {
    const [booked, setbooked] = useState([]);



    useEffect(() => {
        const url = `https://travel-server-j1sq.onrender.com/booking`;
        fetch(url)
            .then(res => res.json())
            .then(data => setbooked(data))
    }, []);

    const handleDelete = (id) => {
        const proceed = window.confirm('Do you want to delete?');
        if (proceed) {
            fetch(`https://travel-server-j1sq.onrender.com/booking/${id}`, {
                method: "DELETE",
                headers: { "content-type": "application/json" },
            })
                .then((res) => res.json())
                .then((data) => {
                    console.log(data);
                    if (data.deletedCount) {
                        alert('Succesfully Deleted');
                        const remaining = booked.filter(book => book._id !== id);
                        setbooked(remaining);
                    }
                });
        }
        // console.log(id);
    };



    const handleUpdate = (id) => {
        const proceed = window.confirm('Do you want to update?');
        if (proceed) {
            fetch(`https://travel-server-j1sq.onrender.com/booking/${id}`, {
                method: "PUT",
                headers: { "content-type": "application/json" },
                body: JSON.stringify(booked)
            })
                .then((res) => res.json())
                .then((data) => {
                    console.log(data);
                    if (data.modifiedCount) {
                        alert('Succesfully Updated!');
                    }
                });
        }
        console.log(id);
    };
    return (
        <div className="w-100">
            {/* <h1>My Booked : </h1> */}
            <h1>All Booked : {booked.length}</h1>

            {/* Tables are responsive as horizontally(left to right) scrolling using bootstrap */}

            <Table responsive="sm" striped bordered hover>
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
                            <td>{index + 1}</td>
                            <td>{pd.name}</td>
                            <td>{pd.email}</td>
                            <td>{pd.address}</td>
                            <td>{pd.status}</td>
                            <td>
                                <button onClick={() => handleUpdate(pd._id)} className="btn table-btn p-2">Update</button>

                            </td>
                            <td>
                                <button
                                    onClick={() => handleDelete(pd._id)}
                                    className="btn table-btn p-2"
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

export default AllBooked;