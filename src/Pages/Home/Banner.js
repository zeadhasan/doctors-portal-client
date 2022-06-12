import React from 'react';
import chair from '../../assets/images/chair.png';
import PrimaryButton from '../Shared/PrimaryButton';
import bg from '../../assets/images/bg.png';


const Banner = () => {
    return (
        <section style={{ background: `url(${bg})` }}
            className='flex justify-center items-center mt-20 my-14 hero min-h-screen px-12'>
            <div class="hero-content flex-col lg:flex-row-reverse">
                <img src={chair} alt="Doctors Chair" class="max-w-sm rounded-lg shadow-2xl" />
                <div>
                    <h1 class="text-5xl font-bold">Your New Smile Starts Here</h1>
                    <p class="py-6">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the</p>
                    <PrimaryButton>Get Started</PrimaryButton>
                </div>
            </div>
        </section>
    );
};

export default Banner;