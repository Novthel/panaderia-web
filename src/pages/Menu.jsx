import React from 'react';
import menu from '../menu.json';
import Product from '../components/pure/Product';

const Menu = () => {

    const panes = menu.filter((m) => m.category === 'panes');
    const galletas = menu.filter((g) => g.category === 'galletas');
    const postres = menu.filter((p) => p.category === 'postres');

    return (
        <div className='sec-menu'>
            <section className='sec-prod'> 
                <Product props ={ panes } category='panes' />
            </section>
            <section className='sec-prod'> 
                <Product props ={ galletas } category='galletas' />
            </section>
            <section className='sec-prod'> 
                <Product props ={ postres } category='postres' />
            </section>
        </div>
       
    );
}

export default Menu;
