import React from 'react';

const MenuAdminProduct = ({ mode }) => {
    return (
        <section className='menu-admin-products'>
            <button type='submit' onClick={ () => mode('list') } className='btn btn-outline-secondary btn-sm btn-prod'>See List</button>
            <button type='submit' onClick={ () => mode('form') } className='btn btn-outline-secondary btn-sm btn-prod'>Add +</button> 
        </section>
    );
}

export default MenuAdminProduct;

