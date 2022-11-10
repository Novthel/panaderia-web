import React, { useState } from 'react';
import { signOut } from 'firebase/auth';
import { auth } from '../firebase/Credentials';
import logo from '../assets/media/img/logo-panaderia.png';
import Clients from '../components/container/Clients';
import AdminProducts from '../components/pure/AdminProducts';
import Orders from '../components/pure/Orders';


const Dashboard = () => {

    const [option, setOption] = useState('');

    return (
        <div className='sec-dashboard'>
            <nav className='nav-dashboard'>
                <img className='logo-dashboard' src={ logo } alt='logo-panaderia ' />
                <h4>PANADERIA - NOVTHEL</h4>
                <button className='boton' onClick={ ()=> signOut(auth) }>
                    cerrar sesion <i className="bi bi-arrow-bar-right"></i>
                </button>   
            </nav>
            <section className='sidebar'>
                <ul className='option-menu  col-12 col-md-3'>
                    <li><input className='option' type='button' value='Clients' onClick={()=> setOption('Clients') }/></li>
                    <li><input className='option' type='button' value='Products' onClick={()=> setOption('Products')}/></li>
                    <li><input className='option' type='button' value='Orders' onClick={()=> setOption('Orders')}/></li>
                </ul> 
                <section className='content col-12 col-md-8'>
                    { option === 'Clients' && <Clients /> }
                    { option === 'Products' && <AdminProducts /> }
                    { option === 'Orders'  && <Orders />}
                </section>
            </section>
            
            
            
        </div>
    );
}

export default Dashboard;
