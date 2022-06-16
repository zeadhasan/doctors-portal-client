import React from 'react';

const Services = ({ service, setTreatment }) => {
    const { name, slots } = service;
    return (
        <div className="card lg:max-w-lg bg-base-100 shadow-xl">
            <div className="card-body text-center">
                <h2 className="text-primary text-xl font-bold ">{name}</h2>

                <p>{
                    slots.length > 0 ? <span>{slots[0]}</span> : <span className='text-red-500 text-xs'>No Slot Available</span>
                }</p>


                <p>{slots.length} {slots.length > 1 ? "Spaces" : "Space"}  Available</p>
                <div class="card-actions justify-center">
                    <label onClick={() => setTreatment(service)} disabled={slots.length === 0} for="booking-modal" className=" btn-sm btn btn-neutral">Book Appointment</label>
                </div>
            </div>
        </div>
    );
};

export default Services;