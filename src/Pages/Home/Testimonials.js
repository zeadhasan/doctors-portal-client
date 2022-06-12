import React from 'react';
import quote from '../../assets/icons/quote.svg';
import people1 from '../../assets/images/people1.png';
import people2 from '../../assets/images/people2.png';
import people3 from '../../assets/images/people3.png';
const Testimonials = () => {
    const review = [
        {
            _id: 1,
            name: 'Winson Herry',
            review: "It is a long established fact that by the readable content of a lot layout. The point of using Lorem a more-or-less normal distribu to using Content here, content",
            img: people1,
            city: "California",
        },
        {
            _id: 2,
            name: 'Winson Herry',
            review: "It is a long established fact that by the readable content of a lot layout. The point of using Lorem a more-or-less normal distribu to using Content here, content",
            img: people2,
            city: "California",
        },
        {
            _id: 3,
            name: 'Winson Herry',
            review: "It is a long established fact that by the readable content of a lot layout. The point of using Lorem a more-or-less normal distribu to using Content here, content",
            img: people3,
            city: "California",
        },
    ]
    return (
        <section className='my-28'>
            <div className='flex justify-between'>
                <div>
                    <h4 className='text-primary text-xl font-bold mb-1'>Testimonial</h4>
                    <h2 className='text-secondary text-3xl font-bold mb-1'>What Our Patients Says</h2>
                </div>
                <div>
                    <img className='lg:w-48 w-24' src={quote} alt="Quote" />
                </div>
            </div>
            <div>
                {

                }
            </div>
        </section>
    );
};

export default Testimonials;