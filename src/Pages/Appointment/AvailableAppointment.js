import { format } from 'date-fns';
import React, { useState } from 'react';
import { useQuery } from 'react-query';
import Loading from '../Shared/Loading';
import BookingModal from './BookingModal';
import Services from './Services';

const AvailableAppointment = ({ date }) => {
    const [treatment, setTreatment] = useState(null);

    const formattedDate = format(date, "PP");

    const { data: services, isLoading, refetch } = useQuery(['available', formattedDate], () => fetch(`http://localhost:5000/available?date=${formattedDate}`)
        .then(res => res.json())
    );
    if (isLoading) {
        return <Loading></Loading>
    }


    return (
        <section>
            <div>
                <h4 className='text-xl text-primary text-center my-10'> Available Appointments No {format(date, 'PP')}</h4>
                <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 px-12 pb-5'>
                    {
                        services?.map(service => <Services
                            key={service._id}
                            service={service}
                            setTreatment={setTreatment}
                        ></Services>)
                    }
                </div>
                {treatment && <BookingModal
                    date={date}
                    treatment={treatment}
                    setTreatment={setTreatment}
                    refetch={refetch}
                ></BookingModal>}
            </div>
        </section>
    );
};

export default AvailableAppointment;