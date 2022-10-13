import React from 'react';
import { Link } from 'react-router-dom';
import CarouselMenu from '../pure/CarouselMenu';
import Info from '../pure/Info';

/**
 * 
 * @returns render the main view of the page
 */

const Principal = () => {
    return (
        <div className='container'>
            
            <section className='sec-carousel'>
                <CarouselMenu /> 
                <div className='ver-menu'>
                    <Link to='/menu' className='boton'>Ver Menu</Link>
                </div> 
            </section>
            <section >
                <Info />
            </section>
        </div>
       
    );
}

export default Principal;
