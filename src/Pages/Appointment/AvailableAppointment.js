import { format } from 'date-fns';
import React from 'react';

const AvailableAppointment = ({ date }) => {
    return (
        <div>
            <h4 className='text-xl text-primary text-center p-4'> Available Appointments No {format(date, 'PP')}</h4>
        </div>
    );
};

export default AvailableAppointment;