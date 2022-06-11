import React from 'react';
import ServiceInfo from './ServiceInfo';
import cavity from '../../assets/images/cavity.png';
import fluoride from '../../assets/images/fluoride.png';
import whitening from '../../assets/images/whitening.png';

const Service = () => {
    return (
        <>
            <div className='mt-14 px-12'>
                <div className='text-center'>
                    <p className='text-primary text-bold uppercase text-xl	'>OUR SERVICES</p>
                    <h1 className='mb-14 text-accent uppercase text-4xl'>Services We Provide</h1>
                </div>
            </div>
            <div className='grid grid-cols-1 lg:grid-cols-3 gap-4 px-12'>
                <ServiceInfo serviceTitle="Fluoride Treatment" img={fluoride}></ServiceInfo>
                <ServiceInfo serviceTitle="Cavity Filling" img={cavity}></ServiceInfo>
                <ServiceInfo serviceTitle="Teeth Whitening" img={whitening}></ServiceInfo>
            </div>
        </>
    );
};

export default Service;