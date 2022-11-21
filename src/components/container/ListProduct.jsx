import React, { useState, useEffect } from 'react';
import { getListProducts, removeProduct } from '../../firebase/ProductsController';


const ListProduct = ({ editProduct, mode }) => {

    const [listproduct, setListProduct] = useState([]);

    const deleteProduct = (id)=> {
        if(window.confirm("Seguro que quiere borrar este elemento?")){
            removeProduct(id)
            mode('list')
        } 
    }

    useEffect(() => {
        getListProducts()
            .then(list => setListProduct(list))    
            .catch(e => console.error(e))
    }, []);

    return (
        <div className='admin-listProduct'>
            <h3>List Product</h3>
            {
                listproduct.map((p)=> (
                    <div key={ p.id } className="card" >
                        <div className="card-container">
                            <div className="card-container-img">
                                <img className="card-img" src={ p.url } alt={ p.nameProduct } />
                            </div>
                            <div className="card-container-content">
                                <div className="card-body">
                                    <h5 className="card-title">{ p.nameProduct } </h5>
                                    <p className="card-text">{ p.description } </p>
                                    <p className="card-text"><span>Price: $ { p.price } </span></p>  
                                </div>  
                            </div>
                            <div className="card-container-action">
                                <button type="button" className="btn btn-danger btn-sm m-1" onClick={ ()=> deleteProduct(p.id) } >DELETE</button>
                                <button type="button" className="btn btn-primary btn-sm m-1"  onClick={ ()=> editProduct(p.id) } >EDIT <i className="bi bi-chevron-right"></i></button>
                            </div>
                        </div>
                    </div>
                ))
            } 
        </div>
    );
}

export default ListProduct;
