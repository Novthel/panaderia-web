import React from 'react';

/**
 * function Product receives an array object with the products of the selected category and renders them as cards
 * @param {object[]} param0 - array of objects with the products of the selected category
 *  @param {string} param1 - Product category
 * @returns list of products consulted in cards (name, image, price)
 */

const Product = ({ listproduct }) => {

    return (
        <>
            <div className='products-list'>
                {
                    listproduct.map((p)=>(
                        <div className="card" key={ p.id }>
                            <img src={ p.url  } className="card-img-top" alt={ p.nameProduct } />
                            <div className="card-body">
                                <h5 className="card-title">{ p.nameProduct }</h5>
                                <p className="card-text">{ p.description }</p>
                                <div className="card-btn">
                                    <button className="boton">$ { p.price }</button>
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
