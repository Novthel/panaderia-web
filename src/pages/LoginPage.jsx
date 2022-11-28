import React from 'react';
import FormLogin from '../components/container/form/FormLogin';
import Header from '../components/container/Header';
import Welcome from '../components/container/Welcome';

const LoginPage = () => {
    return (
        <>
            <Header />
            <Welcome />
            <div className='form-pages'>
                <FormLogin />    
            </div> 
        </>
    );
}

export default LoginPage;
