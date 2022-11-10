import React from 'react';
import menu from '../menu.json';
import Product from '../components/pure/Product';
import Header from '../components/container/Header';
import Welcome from '../components/container/Welcome';


/**
 * 
 * @returns renders the list of products offered on the page
 */

const Menu = () => {

    const panes = menu.filter((m) => m.category === 'panes');
    const galletas = menu.filter((g) => g.category === 'galletas');
    const postres = menu.filter((p) => p.category === 'postres');

    return (
        <>
            <Header />
            <Welcome />
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
        </>
        
       
    );
}

export default Menu;
