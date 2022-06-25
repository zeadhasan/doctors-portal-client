import React from 'react';
import { useParams } from 'react-router-dom';

const Payment = () => {

    const { id } = useParams();

    return (
        <div>
            <h3 className='text-2xl text-purple-500'>Please Pay For: {id}</h3>
        </div>
    );
};

export default Payment;