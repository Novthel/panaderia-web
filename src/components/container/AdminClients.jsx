import React, { useState } from 'react';
import MenuAdminProduct from '../pure/MenuAdminProduct';
import Clients from './Clients';
import FormAdminRegister from './FormAdminRegister';



const AdminClients = () => {

    const [view, setView] = useState('list');
    const [id, setId] = useState(null);
  
    const mode = (m)=> {
        setView(m)
        setId(null)
    }

    const editUser =(id)=> {
        setView('editclients')
        setId(id)
    }

    return (
        <div className='admin-products'>
             <MenuAdminProduct mode= { mode } />
            <section className='content-admin-prod'>
                { view === 'list' && <Clients editUser={ editUser } mode= { mode } /> }
                { view === 'form' && <FormAdminRegister id={ id } mode= { mode } /> }
                { view === 'editclients' && <FormAdminRegister id={ id } mode= { mode } /> }
            </section>
            
        </div>
       
    );
}

export default AdminClients;
