import React from 'react';
import panaderia from '../../assets/media/img/panaderia.jpg';
import productos from '../../assets/media/img/productos.jpg';

const Info = () => {
    return (
        <div className='sec-info'>
            <h1 className='titulo'>Quienes Somos</h1>
            <div className='info'>
                <div className='info-text'>
                    <h4>Sobre Nuestra Panadería</h4>
                    <p> 
                        Lorem ipsum dolor, sit amet consectetur adipisicing elit. 
                        Aut tempore laborum expedita soluta illo. Debitis temporibus 
                        dolores possimus magni. Praesentium officiis doloribus sunt culpa omnis. 
                        Blanditiis modi numquam earum dolore? Quod, tempore.  
                    </p>   
                </div>
                <img className='info-img' src={ panaderia } alt='img-repostera'/>
            </div>
            <div className='info'>
                <img className='info-img' src={ productos } alt='img-productos'/>
                <div className='info-text'>
                    <h4>Sobre Nuestros Productos</h4>
                    <p> 
                        Lorem ipsum dolor, sit amet consectetur adipisicing elit. 
                        Aut tempore laborum expedita soluta illo. Debitis temporibus 
                        dolores possimus magni. Praesentium officiis doloribus sunt culpa omnis. 
                        Blanditiis modi numquam earum dolore? Quod, tempore.  
                    </p>
                </div>
            </div>
        </div>
              
    );
}

export default Info;
