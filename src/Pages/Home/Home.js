import React from 'react';
import Banner from './Banner';
import ContactForm from './ContactForm';
import Footer from './Footer';
import Info from './Info';
import MakeAppointment from './MakeAppointment ';
import Service from './Service';
import Testimonials from './Testimonials';

const Home = () => {
    return (
        <div className='px-12'>
            <Banner></Banner>
            <Info></Info>
            <Service></Service>
            <MakeAppointment></MakeAppointment>
            <Testimonials></Testimonials>
            <ContactForm></ContactForm>
            <Footer></Footer>
        </div>
    );
};

export default Home;