import React from 'react';
import appointment from '../../assets/images/appointment.png';


const ContactForm = () => {
    return (
        <section style={{ background: `url(${appointment})` }} className='flex justify-center items-center'>
            <div className='block'>
                <div className='text-center'>
                    <h4 className='text-2xl text-primary font-bold mt-10'>Contact Us</h4>
                    <h3 className='text-3xl text-secondary font-bold mb-5'>Stay connected with us</h3>
                </div>
                <div>
                    <label className="block">
                        <input type="email" name="email" className="mb-5 mt-1 px-3 py-2 bg-white border shadow-sm border-slate-300 placeholder-slate-400 focus:outline-none focus:border-sky-500 focus:ring-sky-500 block w-full rounded-md sm:text-sm focus:ring-1" placeholder="Your Email" />
                    </label>
                    <label className="block">
                        <input type="text" name="subject" className="mb-5 mt-1 px-3 py-2 bg-white border shadow-sm border-slate-300 placeholder-slate-400 focus:outline-none focus:border-sky-500 focus:ring-sky-500 block w-full rounded-md sm:text-sm focus:ring-1" placeholder="Subject" />
                    </label>
                    <label className="block">
                        <input type="text" name="subject" className="mb-5 mt-5 px-3 py-5 bg-white border shadow-sm border-slate-300 placeholder-slate-400 focus:outline-none focus:border-sky-500 focus:ring-sky-500 block w-full rounded-md sm:text-sm focus:ring-1" placeholder="Your Massage" />
                    </label>
                    <button className="btn btn-accent mb-10 text-center">Submit</button>
                </div>
            </div>
        </section>
    );
};

export default ContactForm;