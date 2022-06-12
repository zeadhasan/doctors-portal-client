import React from 'react';

const InfoCart = ({ img, cardTitle, cartMore, bgClass }) => {
    return (
        <div className={`card lg:card-side shadow-xl ${bgClass}`}>
            <figure className='pl-5'><img width={40} src={img} alt=" Album" /></figure>
            <div class="card-body text-white">
                <h2 className="card-title ">{cardTitle}</h2>
                <p className='text-sm'>{cartMore}</p>
            </div>
        </div>
    );
};

export default InfoCart;