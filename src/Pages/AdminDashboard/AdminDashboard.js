import React, { useState } from 'react';
import AddNewOffer from '../AddNewOffer/AddNewOffer';
import AllOffers from '../AllOffers/AllOffers';
// import Offers from '../Home/Offers/Offers';
import './AdminDashboard.css'

const AdminDashboard = () => {
    const [control, setControl] = useState("allOffers");

    console.log(control);

    return (
        <div className="admin-container">
            <div className="dashboard">
                <div className="admin-box">
                    <div className="row admin-container">
                        <div className="col-md-3 ">
                            <div className="admin-area p-1">
                                <h6>Dashboard</h6>
                                <div className="all-menu mt-5">
                                    <li
                                        onClick={() => setControl("allOffers")}
                                        className="admin-menu p-2"
                                    >
                                        All Offers
                                    </li>
                                    <li
                                        onClick={() => setControl("addNewOffer")}
                                        className="admin-menu p-2"
                                    >
                                        Add A New Offer
                                    </li>
                                    {/* <li
                                        onClick={() => setControl("allEvents")}
                                        className="admin-menu p-2"
                                    >
                                        Manage Events
                                    </li> */}
                                </div>
                            </div>
                        </div>
                        <div className="col-md-9 text-center  text-center">
                            {control === "allOffers" && <AllOffers></AllOffers>}
                            {/* {control === "allEvents" && <Offers></Offers>} */}
                            {control === "addNewOffer" && <AddNewOffer></AddNewOffer>}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AdminDashboard;