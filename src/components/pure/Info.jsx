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
                    <p>Somos una empresa con mas de 10 años de experiencia en la elaboracion de productos de Reposteria. Ofrecemos un sevicio de gran calidad, siempre teniendo en cuenta la satisfaccion de nuestros clientes. 
                    Realizamos nuestras productos para que destaquen tanto por su sabor y calidad como por su buena presentacion al presentarselo a cliente.
                    </p>   
                </div>
                <img className='info-img' src={ panaderia } alt='img-repostera'/>
            </div>
            <div className='info'>
                <img className='info-img' src={ productos } alt='img-productos'/>
                <div className='info-text'>
                    <h4>Sobre Nuestros Productos</h4>
                    <p>Somos una empresa con mas de 10 años de experiencia en la elaboracion de productos de Reposteria. Ofrecemos un sevicio de gran calidad, siempre teniendo en cuenta la satisfaccion de nuestros clientes. 
                    Realizamos nuestras productos para que destaquen tanto por su sabor y calidad como por su buena presentacion al presentarselo a cliente.
                    </p>
                </div>
            </div>
        </div>
              
    );
}

export default Info;
