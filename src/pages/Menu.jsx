import React, { useState } from 'react';
import Product from '../components/pure/Product';
import Header from '../components/container/Header';
import Welcome from '../components/container/Welcome';
import CategoryMenu from '../components/pure/CategoryMenu';
import { getColectionProduct } from '../firebase/ProductsController';


/**
 * 
 * @returns renders the list of products offered on the page
 */

const Menu = () => {

    const [listproduct, setListProduct] = useState([]);

    const selectCategory = async (category)=> {
        const result = await getColectionProduct(category)
        setListProduct(result)
    }

    
    return (
        <>
            <Header />
            <Welcome />
            <div className='sec-menu'>
                <section className='sec-category-menu'>
                    <CategoryMenu selectCategory={ selectCategory } />
                </section>
                <section className='sec-prod'> 
                    <Product listproduct ={ listproduct } />
                </section>
            </div>
        </>
    );
}

export default Menu;
