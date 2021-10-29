import React, { useEffect, useState } from 'react';
import { Table } from 'react-bootstrap';
import { useForm } from 'react-hook-form';
import { Link } from 'react-router-dom';
import useFirebase from '../../hooks/useFirebase';

const AddNewOffer = () => {
    const { user } = useFirebase();
    const {
        register,
        handleSubmit,
        watch,
        formState: { errors },
    } = useForm();

    const onSubmit = (data) => {
        data.email = user?.email;
        fetch("http://localhost:5000/addEvent", {
            method: "POST",
            headers: { "content-type": "application/json" },
            body: JSON.stringify(data),
        })
            .then((res) => res.json())
            .then((result) => console.log(result));
        console.log(data);
    };

    return (
        <div className="my-5">
            <h1 className="text-center text-danger">Please, Add A New Offer</h1>
            <div className="w-50 m-auto my-3">
                <div className="border ">
                    <div className="login-form my-3">
                        <form onSubmit={handleSubmit(onSubmit)}>
                            <input {...register("country")} placeholder="Country" className="p-2 m-2 w-75" />
                            <br />
                            <input {...register("destination")} placeholder="Destination" className="p-2 m-2 w-75" />
                            <br />
                            <input {...register("number")} type="number" placeholder="Tour Duration" className="p-2 m-2 w-75" />
                            <br />
                            <input {...register("about")} placeholder="About This Country" className="p-2 m-2 w-75" />
                            <br />

                            <input {...register("image", { required: true })}
                                placeholder="Image Link" className="p-2 m-2 w-75"
                            />
                            <br />
                            {errors.exampleRequired && <span>This field is required</span>}

                            <input type="submit" value="Submit" className="btn btn-danger w-50" />
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );

};

export default AddNewOffer;