import React, { useEffect, useState } from 'react';
import { Table } from 'react-bootstrap';

const AllOffers = () => {
    const [offers, setOffers] = useState([]);

    const [control, setControl] = useState(false);

    useEffect(() => {
        fetch("http://localhost:5000/allOffers")
            .then((res) => res.json())
            .then((data) => setOffers(data));
    }, [offers]);

    const handleDelete = (id) => {
        const proceed = window.confirm('Do you want to delete?');
        if (proceed) {
            fetch(`http://localhost:5000/allOffers/${id}`, {
                method: "DELETE",
                headers: { "content-type": "application/json" },
            })
                .then((res) => res.json())
                .then((data) => {
                    if (data.deletedCount > 0) {
                        alert('Succesfully Deleted');
                        setControl(!control);
                    } else {
                        setControl(false);
                    }
                });
        }
        console.log(id);
    };

    return (
        <div className="container">
            <h1>Offers {offers?.length}</h1>
            <Table striped bordered hover>
                <thead>
                    <tr>
                        <th>SI</th>
                        <th>Country</th>
                        <th>Destination</th>
                        <th>About</th>
                        <th>Image Link</th>
                        <th>Action</th>
                    </tr>
                </thead>
                {offers?.map((pd, index) => (
                    <tbody key={pd._id}>
                        <tr>
                            <td>{index}</td>
                            <td>{pd.country}</td>
                            <td>{pd.destination}</td>
                            <td>{pd.about}</td>
                            <td>{pd.image}</td>
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

export default AllOffers;