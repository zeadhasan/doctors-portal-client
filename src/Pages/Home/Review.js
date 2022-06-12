import React from 'react';

const Review = ({ review }) => {
    return (
        <div className="card lg:max-w-lg bg-base-100 shadow-xl">
            <div className="card-body">
                <p>{review.reviewItems}</p>
                <div className="flex items-center">
                    <div className="avatar">
                        <div className="mb-1 w-16 rounded-full ring ring-primary ring-offset-base-100 mr-5">
                            <img src={review.img} alt="" />
                        </div>
                    </div>
                    <div>
                        <h5 className='text-xl'>{review.name} </h5>
                        <p className='text-sm'>{review.city}</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Review;