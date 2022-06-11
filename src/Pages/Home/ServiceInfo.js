import React from 'react';

const ServiceInfo = ({ img, serviceTitle }) => {
    return (
        <>
            <div className='mb-14'>
                <div class="card card-compact w-50 bg-base-100 shadow-xl">
                    <figure><img src={img} alt="Shoes" /></figure>
                    <div class="card-body">
                        <h2 className="text-center text-primary capitalize text-bold">{serviceTitle}</h2>
                        <p className="text-center text-black text-base	">If a dog chews shoes whose shoes does he choose</p>
                    </div>
                </div>
            </div>
        </>
    );
};

export default ServiceInfo;