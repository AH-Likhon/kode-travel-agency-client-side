import React, { useEffect, useState } from "react";
import "./Doctor.css";

const Doctor = () => {
  const [doctors, setDoctors] = useState([]);

  useEffect(() => {
    fetch('doctors.json')
      .then((res) => res.json())
      .then((data) => setDoctors(data));
  }, []);

  return (
    <div className="container w-100 m-auto p-5">
      <div className="prevention d-flex justify-content-center p-5">
        <img
          src="https://cdn.shopify.com/s/files/1/0447/3569/2962/t/2/assets/waves.png"
          alt=""
        />
        <h6 className="ms-3 me-3">Dentario Dental Care</h6>
        <img
          src="https://cdn.shopify.com/s/files/1/0447/3569/2962/t/2/assets/waves.png"
          alt=""
        />
      </div>
      <h1 className="Prevent-title">Our Doctors</h1>
      <hr className="w-25 mx-auto mt-0" />


      <div className="row">
        {doctors.map((pd) => (
          <div key={pd.id} className="col-md-6 col-lg-4 col-sm-12">
            <div className="cart p-3 m-2 border border">
              <div className="service img">
                <img src={pd.doctorImg} alt="category" />
              </div>
              <h6 className="mt-4">{pd.name}</h6>
              <h6 className="text-success" >{pd.position}</h6>
              <p className="mt-2">{pd.aboutDoctor}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Doctor;
