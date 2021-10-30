import React from 'react';
import { useForm } from 'react-hook-form';
import useAuth from '../../hooks/useAuth';
import useFirebase from '../../hooks/useFirebase';

const BookNow = () => {
    const { user } = useFirebase();
    const {
        register,
        handleSubmit,
        watch,
        reset,
        formState: { errors },
    } = useForm();

    const onSubmit = (data) => {
        data.status = "Pending";
        fetch("http://localhost:5000/booking", {
            method: "POST",
            headers: { "content-type": "application/json" },
            body: JSON.stringify(data),
        })
            .then(res => res.json())
            .then(result => {
                if (result.insertedId) {
                    alert('Successfully Booked');
                    console.log(result);
                    reset();
                }
            });
        console.log(data);
    };

    return (
        <div className="my-5">
            <h1 className="text-center text-danger">Please, Book Now</h1>
            <div className="w-50 m-auto my-3">
                <div className="border ">
                    <div className="login-form my-3">
                        <form className="booking-form" onSubmit={handleSubmit(onSubmit)}>

                            <input defaultValue={user.displayName} {...register("name")} className="p-2 m-2 w-75" />
                            <br />

                            <input defaultValue={user.email} {...register("email", { required: true })} className="p-2 m-2 w-75" />
                            <br />
                            {/* {errors.email && <span className="error">This field is required</span>} */}
                            {errors.exampleRequired && <span>This field is required</span>}
                            <input placeholder="Address" defaultValue="" {...register("address")} className="p-2 m-2 w-75" />
                            <br />
                            <input placeholder="City" defaultValue="" {...register("city")} className="p-2 m-2 w-75" />
                            <br />
                            <input placeholder="phone number" defaultValue="" {...register("phone")} className="p-2 m-2 w-75" />
                            <br />

                            <input type="submit" value="Submit" className="btn btn-danger w-75" />
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default BookNow;