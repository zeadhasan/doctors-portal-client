import React from 'react';

const Services = ({ service }) => {
    const { name, slots } = service;
    return (
        <div class="card lg:max-w-lg bg-base-100 shadow-xl">
            <div class="card-body">
                <h2 class="card-title text-primary">{name}</h2>

                <p>{
                    slots.length > 0 ? <span>{slots[0]}</span> : <span className='text-red-500 text-xs'>No Slot Available</span>
                }</p>


                <p>{slots.length} {slots.length > 1 ? "Spaces" : "Space"}  Available</p>
                <div class="card-actions justify-center">
                    <button disabled={slots.length === 0} class="btn btn-neutral">Book Appointment</button>
                </div>
            </div>
        </div>
    );
};

export default Services;