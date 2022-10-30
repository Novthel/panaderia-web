import React from 'react';
import { Link } from 'react-router-dom';
import CarouselMenu from '../pure/CarouselMenu';

/**
 * 
 * @returns render the main view of the page
 */

const Principal = () => {
    return (
        <> 
            <section className='principal'>
                <section className='sec-carousel'>
                    <CarouselMenu />   
                </section>
                <div className='ver-menu'>
                        <Link to='/menu' className='boton'>Ver Menu</Link>
                </div> 
            </section>
        </>
       
    );
}

export default Principal;
