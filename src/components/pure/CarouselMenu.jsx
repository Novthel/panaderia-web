import React from 'react';
import panes from '../../assets/media/video/panes.mp4';
import elaboracion from '../../assets/media/video/elaboracion.mp4';
import postre from '../../assets/media/video/postres.mp4';
import galletas from '../../assets/media/video/galletas.mp4';



const CarouselMenu = () => {
    return (
     
            <div id="carousel-menu-panaderia" className="carousel slide carousel-fade " data-bs-ride="carousel">
                <div className="carousel-inner">
                    <div className="carousel-item active" data-bs-interval="7000">
                        <video className='video' src={ elaboracion } muted loop autoPlay />  
                        <div className="presentation">
                            <h1>PANADERIA NOVTHEL</h1>
                            <p> Disfruta de todos nuestros Productos</p>
                        </div>
                    </div>
                    <div className="carousel-item" data-bs-interval="5000">
                        <video className='video' src={ panes } muted loop autoPlay /> 
                    <div className="carousel-caption">
                            <h5>PANES</h5>
                            <p> Disfruta de nuestra seleccion de Panes Tradicionales - Ornamentales Y Estilo Moderno</p>
                        </div>
                    </div>
                    <div className="carousel-item" data-bs-interval="5000">
                        <video className='video' src={ galletas } muted loop autoPlay /> 
                        <div className="carousel-caption">
                            <h5>GALLETAS</h5>
                            <p>Disfruta de nuestras Galletas. Horneadas - Artesanales - Caseras - Fechas especiales</p>
                        </div>
                    </div>
                    <div className="carousel-item" data-bs-interval="5000">
                        <video className='video' src={ postre } muted loop autoPlay /> 
                        <div className="carousel-caption">
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

