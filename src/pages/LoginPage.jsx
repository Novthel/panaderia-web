import React from 'react';
import FormLogin from '../components/container/FormLogin';
import Footer from '../components/pure/Footer';

const LoginPage = () => {
    return (
        <>
            <div className='form-pages'>
                <FormLogin />    
            </div> 
            <Footer />
        </>
    );
}

export default LoginPage;
