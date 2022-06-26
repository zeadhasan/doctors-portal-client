import React from 'react';
import { useParams } from 'react-router-dom';
import { useQuery } from "react-query";
import Loading from '../Shared/Loading';
import { loadStripe } from '@stripe/stripe-js';
import { Elements } from '@stripe/react-stripe-js';
import CheckoutForm from './CheckoutForm';


const stripePromise = loadStripe('pk_test_51LEY0gDH6V5TVvJjgWLCHqUIPXTTZ7OkIGwdEpfdrIHgDyNth4hVf0R6xxNSwOb5gi70TKqvCmk0VLYLbzFNExhD00kHqJdrLc');

const Payment = () => {
    const { id } = useParams();
    const url = `http://localhost:5000/booking/${id}`;

    const { data: appointment, isLoading } = useQuery(['booking', id], () => fetch(url, {
        method: "GET",
        headers: {
            'authorization': `Bearer ${localStorage.getItem('accessToken')}`
        }
    }).then(res => res.json()));

    if (isLoading) {
        return <Loading></Loading>
    }

    return (
        <div className='mx-16'>
            <div className="card w-50 max-w-md bg-base-100 shadow-xl my-12">
                <div className="card-body">
                    <p className='text-success font-bold'>Hello {appointment.patientName}</p>
                    <h2 className="card-title">Pay For {appointment.treatment}</h2>
                    <p>Your Appointment <span className=' font-bold text-orange-700 uppercase'>{appointment.date}</span> At <span className='text-orange-700 font-bold uppercase'>{appointment.slot}</span> </p>
                    <p >Please Pay: ${appointment.price}</p>
                </div>
            </div>
            <div className="card flex-shrink-0 w-50 max-w-md shadow-2xl bg-base-100">
                <div className="card-body">
                    <Elements stripe={stripePromise}>
                        <CheckoutForm appointment={appointment} />
                    </Elements>
                </div>
            </div>
        </div>
    );
};

export default Payment;