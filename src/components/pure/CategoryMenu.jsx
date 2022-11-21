import React from 'react';
import panes from '../../assets/media/img/panes.jpg';
import galletas from '../../assets/media/img/galletas.jpg';
import postres from '../../assets/media/img/postres.jpg';

const CategoryMenu = ({ selectCategory }) => {

    const listproduct = [
        {
            category: 'panes',
            img: panes
        },
        {
            category: 'galletas',
            img: galletas
        },
        {
            category: 'postres',
            img: postres
        }
    ]

    return (
        <section className='category'>
            <h3>Nuestras Categorias</h3>
            <section className='list-category'>
                {
                    listproduct.map((p, i)=> (
                        <div key={ i } className="card-project" onClick={()=> selectCategory(p.category)}>
                            <img className="card-img" src={ p.img } alt={ p.category } /> 
                            <div className="overlay">
                                <h4 className="overlay-title">
                                    { p.category } 
                                </h4>
                            </div>
                        </div>
                    ))
                }

            </section>
        </section>
    );
}

export default CategoryMenu;
