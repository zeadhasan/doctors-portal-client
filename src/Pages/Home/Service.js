import React from 'react';
import ServiceInfo from './ServiceInfo';
import cavity from '../../assets/images/cavity.png';
import fluoride from '../../assets/images/fluoride.png';
import whitening from '../../assets/images/whitening.png';
import treatment from '../../assets/images/treatment.png';
import PrimaryButton from '../Shared/PrimaryButton';

const Service = () => {
    return (
        <section>
            <div className='mt-14'>
                <div className='text-center'>
                    <p className='text-primary text-bold uppercase text-xl	'>OUR SERVICES</p>
                    <h1 className='mb-14 text-accent uppercase text-4xl'>Services We Provide</h1>
                </div>
            </div>
            <div className='grid grid-cols-1 lg:grid-cols-3 gap-4'>
                <ServiceInfo serviceTitle="Fluoride Treatment" img={fluoride}></ServiceInfo>
                <ServiceInfo serviceTitle="Cavity Filling" img={cavity}></ServiceInfo>
                <ServiceInfo serviceTitle="Teeth Whitening" img={whitening}></ServiceInfo>
            </div>
            <div class="card lg:card-side mb-14">
                <figure><img width='450px' className='rounded' src={treatment} alt="Album" /></figure>
                <div class="card-body">
                    <h2 class="card-title text-bold text-4xl text-accent">Exceptional Dental Care, on Your Terms</h2>
                    <p className='text-base text-black my-0'>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsumis that it has a more-or-less normal distribution of letters,as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page.</p>
                    <div className="relative h-32 w-32">
                        <PrimaryButton>Get Started</PrimaryButton>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Service;