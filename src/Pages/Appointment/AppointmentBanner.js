import React from 'react';
import chair from '../../assets/images/chair.png';
import { DayPicker } from 'react-day-picker';
import 'react-day-picker/dist/style.css';

const AppointmentBanner = () => {
    return (
        <div className="hero min-h-screen">
            <div className='px-12'>
                <div className="hero-content flex-col lg:flex-row-reverse">
                    <img src={chair} className="max-w-sm rounded-lg shadow-2xl" alt="Doctor-Chair" />
                    <div>
                        <DayPicker />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AppointmentBanner;