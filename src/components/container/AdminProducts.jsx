import React, { useState } from 'react';
import MenuAdminProduct from '../pure/MenuAdminProduct';
import FormProduct from './FormProduct';
import ListProduct from './ListProduct';



const AdminProducts = () => {

    const [view, setView] = useState('list');
    const [id, setId] = useState(null);
  
    const mode = (m)=> {
        setView(m)
        setId(null)
    }

    const editProduct =(id)=> {
        setView('editprod')
        setId(id)
    }

    return (
        <div className='admin-products'>
            <MenuAdminProduct mode= { mode } />
            <section className='content-admin-prod'>
                { view === 'list' && <ListProduct editProduct={ editProduct } /> }
                { view === 'form' && <FormProduct id={ id } mode= { mode } /> }
                { view === 'editprod' && <FormProduct id={ id } mode= { mode } /> }
            </section>
            
        </div>
       
    );
}

export default AdminProducts;
