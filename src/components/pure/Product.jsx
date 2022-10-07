import React from 'react';
import imagen from '../../assets/media/img/productos/Pan-Rollo.jpg';
import { Link } from 'react-router-dom';

const Product = ({ props, category }) => {

    return (
        <>
            <h1 className='title-category'>{ category }</h1>
            <div className='products-list'>
                {
                    props.map((p)=>(
                        <div className="card" key={ p.id }>
                            <img src={ imagen  } className="card-img-top" alt={ p.nameProduct } />
                            <div className="card-body">
                                <h5 className="card-title">{ p.nameProduct }</h5>
                                <div className="card-btn">
                                    <Link to= {`/producto/${p.id}`} className="boton">$ { p.price }</Link>
                                </div>
                            </div>
                        </div>
                    ))
                }
            </div>
        </>
       
        
    );
}

export default Product;
