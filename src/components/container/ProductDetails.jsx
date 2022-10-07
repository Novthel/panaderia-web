import React, { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import menu  from '../../menu.json';
import imagen from '../../assets/media/img/productos/Chocolate.jpg';



const ProductDetails = () => {

    const params = useParams();
    const [ prod, setProd ] = useState({});
    const [ value, setValue ] = useState(1);


    const addValue =()=> {
        setValue( value + 1)
    };

    const deleteValue =()=> {
        const newValue = value - 1;
        if(newValue < 0) {
            setValue(0)
        }else {
            setValue(newValue)
        } 
    };


    useEffect(() => {
        if(params.id) {
            const product = menu.find((m)=> m.id === Number(params.id));

            setProd({
                ...prod, ...product
            })
        }
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [params.id]);

    if(!prod){
        return null
    }

    return (
        <div className='product-details'>    
            <div className='info-details'>
                <img className='img-details' src={ imagen } alt={ prod.nameProduct } />
                <div className="details-body">
                    <h5 className="details-title">{ prod.nameProduct }</h5>
                    <p className="details-price"> $ { prod.price }</p>
                    <hr/>
                    <p className="details-description">{ prod.description }</p>
                    <div className="card-btn">
                        <div className='details-order'>
                            <button className='btn-order' onClick={ deleteValue } >-</button>
                            <p className='value-order'>{ value }</p>
                            <button className='btn-order'  onClick={ addValue }>+</button> 
                        </div>
                        <Link to= {`/producto/${prod.id}`} className="boton"><i className="bi bi-cart-fill"></i> Agregar al Carrito</Link>
                    </div>
                </div>
            </div> 
        </div>
    );
}

export default ProductDetails;
