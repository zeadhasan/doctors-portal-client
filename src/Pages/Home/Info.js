import React from 'react';
import InfoCart from './InfoCart';
import clock from '../../assets/icons/clock.svg';
import marker from '../../assets/icons/marker.svg';
import phone from '../../assets/icons/phone.svg';

const Info = () => {
    return (
        <div className='grid grid-cols-1 lg:grid-cols-3 gap-4 px-12'>
            <InfoCart bgClass="bg-gradient-to-r from-secondary to-primary" cartMore="Lorem Ipsum is simply dummy text of the pri" cardTitle="Opening Hours" img={clock}></InfoCart>
            <InfoCart bgClass="bg-accent" cartMore="Brooklyn, NY 10036, United States" cardTitle="Visit our location" img={marker}></InfoCart>
            <InfoCart bgClass="bg-gradient-to-r from-secondary to-primary" cartMore="+000 123 456789" cardTitle="Contact us now" img={phone}></InfoCart>
        </div>
    );
};

export default Info;