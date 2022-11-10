import React from 'react';
import Header from '../components/container/Header';
import Welcome from '../components/container/Welcome';
import Footer from '../components/pure/Footer';
import Info from '../components/pure/Info';

const About = () => {
    return (
        <>
            <Header />
            <Welcome />
            <div className='about-page'>
                <Info />
            </div>
            <Footer />
        </>
     
    );
}

export default About;
