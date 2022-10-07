import React from 'react';
import galletas from '../../assets/media/img/galletas.jpg';
import pan from '../../assets/media/img/pan.jpg';
import postres from '../../assets/media/img/postres.jpg';

const CarouselMenu = () => {
    return (
     
            <div id="carousel-menu-panaderia" className="carousel slide" data-bs-ride="false">
                <div className="carousel-indicators">
                    <button type="button" data-bs-target="#carousel-menu-panaderia" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
                    <button type="button" data-bs-target="#carousel-menu-panaderia" data-bs-slide-to="1" aria-label="Slide 2"></button>
                    <button type="button" data-bs-target="#carousel-menu-panaderia" data-bs-slide-to="2" aria-label="Slide 3"></button>
                </div>
                <div className="carousel-inner">
                    <div className="carousel-item active">
                        <img src={ pan } height={460} className="d-block w-100" alt='img-pan' />
                        <div className="carousel-caption d-none d-md-block">
                            <h5>PANES</h5>
                            <p> Disfruta de nuestra seleccion de Panes Tradicionales - Ornamentales Y Estilo Moderno</p>
                        </div>
                    </div>
                    <div className="carousel-item">
                        <img src={ galletas } height={460} className="d-block w-100" alt='img-galletas'/>
                        <div className="carousel-caption d-none d-md-block">
                            <h5>GALLETAS</h5>
                            <p>Disfruta de todos nuestro productos en Galletas. Horneadas - Artesanales - Caseras - Fechas especiales</p>
                        </div>
                    </div>
                    <div className="carousel-item">
                        <img src={ postres } height={460} className="d-block w-100" alt="mg-postres"/>
                        <div className="carousel-caption d-none d-md-block">
                            <h5>POSTRES</h5>
                            <p>Tres leche - Frutas - Flanes - Pasteles para eventos</p>
                        </div>
                    </div>
                </div>
                <button className="carousel-control-prev" type="button" data-bs-target="#carousel-menu-panaderia" data-bs-slide="prev">
                    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                    <span className="visually-hidden">Previous</span>
                </button>
                <button className="carousel-control-next" type="button" data-bs-target="#carousel-menu-panaderia" data-bs-slide="next">
                    <span className="carousel-control-next-icon" aria-hidden="true"></span>
                    <span className="visually-hidden">Next</span>
                </button>
                </div>
    );
}

export default CarouselMenu;

