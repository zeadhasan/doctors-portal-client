import { format } from 'date-fns';
import React, { useEffect, useState } from 'react';
import Services from './Services';

const AvailableAppointment = ({ date }) => {
    const [services, setServices] = useState([]);

    useEffect(() => {
        fetch('services.json')
            .then(res => res.json())
            .then(data => setServices(data));
    }, []);


    return (
        <section>
            <div>
                <h4 className='text-xl text-primary text-center py-5'> Available Appointments No {format(date, 'PP')}</h4>
                <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 px-12 pb-5'>
                    {
                        services.map(service => <Services
                            key={service._id}
                            service={service}
                        ></Services>)
                    }
                </div>
            </div>
        </section>
    );
};

export default AvailableAppointment;