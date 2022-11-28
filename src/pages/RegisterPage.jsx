import React from 'react';
import FormRegister from '../components/container/form/FormRegister';
import Header from '../components/container/Header';
import Welcome from '../components/container/Welcome';

const RegisterPage = () => {
    return (
        <>
            <Header />
            <Welcome />
            <div className='form-pages'>
                <FormRegister />  
            </div>
        </>
       
    );
}

export default RegisterPage;
