import React, { useEffect, useState } from 'react';
import { Table } from 'react-bootstrap';
import './AllOffers.css'

const AllOffers = () => {
    const [offers, setOffers] = useState([]);

    const [control, setControl] = useState(false);

    useEffect(() => {
        fetch("https://infinite-garden-01511.herokuapp.com/allOffers")
            .then((res) => res.json())
            .then((data) => setOffers(data));
    }, [offers]);

    const handleDelete = (id) => {
        const proceed = window.confirm('Do you want to delete?');
        if (proceed) {
            fetch(`https://infinite-garden-01511.herokuapp.com/allOffers/${id}`, {
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
        <div className="w-100">
            <h1>Total Offers {offers?.length}</h1>

            {/* Tables are responsive as horizontally(left to right) scrolling using bootstrap */}

            <Table responsive="sm" striped bordered hover>
                <thead>
                    <tr>
                        <th>SI</th>
                        <th>Country</th>
                        <th>Tourist Spot</th>
                        <th>Tour Duration</th>
                        <th>About</th>
                        <th>Action</th>
                    </tr>
                </thead>
                {offers?.map((pd, index) => (
                    <tbody key={pd._id}>
                        <tr>
                            <td>{index + 1}</td>
                            <td>{pd.country}</td>
                            <td>{pd.destination}</td>
                            <td>{pd.number}</td>
                            <td>{pd.about.slice(0, 60)}</td>
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

export default AllOffers;