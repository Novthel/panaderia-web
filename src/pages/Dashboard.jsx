import React, { useState } from 'react';
import logo from '../assets/media/img/logo-panaderia.png';
import AdminProducts from '../components/container/AdminProducts';
import AdminClients from '../components/container/AdminClients';
import { useNavigate } from 'react-router-dom';
import Comments from '../components/pure/Comments';


const Dashboard = () => {

    const [option, setOption] = useState(''); 
    const navigate = useNavigate();

    const goHome =()=> {
        navigate('/')
    }

    return (
        <div className='sec-dashboard'>
            <nav className='nav-dashboard'>
                <img className='logo-dashboard' src={ logo } alt='logo-panaderia ' />
                <h4>PANADERIA - NOVTHEL</h4>
                <button className='btn-logout' onClick={ goHome }>
                    <p>Home </p> <i className="bi bi-box-arrow-right"></i>
                </button>   
            </nav>
            <section className='sidebar'>
                <ul className='option-menu  col-12 col-md-2'>
                    <li><input className='option' type='button' value='Clients' onClick={()=> setOption('Clients') }/></li>
                    <li><input className='option' type='button' value='Products' onClick={()=> setOption('Products')}/></li>
                    <li><input className='option' type='button' value='Orders' onClick={()=> setOption('Comments')}/></li>
                </ul> 
                <section className='content col-12 col-md-10'>
                    { option === 'Clients' && <AdminClients /> }
                    { option === 'Products' && <AdminProducts /> }
                    { option === 'Comments'  && <Comments />}
                </section>
            </section>
            
        </div>
    );
}

export default Dashboard;
