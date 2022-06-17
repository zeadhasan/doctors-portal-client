import React from 'react';
import { Link } from 'react-router-dom';


const Login = () => {
    return (
        <section className='px-12 h-screen flex justify-center items-center'>
            <div className="card w-96 bg-base-100 shadow-xl ">
                <div className="card-body">
                    <h2 className="text-3xl font-bold text-center text-secondary">Login</h2>
                    <p>If a dog chews shoes whose shoes does he choose?</p>
                    <div className="card-actions justify-end">
                        <button className="btn btn-primary">Buy Now</button>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Login;