import React from 'react';
import Header from '../components/container/Header';
import Principal from '../components/container/principal';
import Welcome from '../components/container/Welcome';
import Footer from '../components/pure/Footer';

const Home = () => {
    return (
             <>
                <Header />  
                <Welcome />
                <Principal />
                <Footer />
            </>
    );
}

export default Home;
