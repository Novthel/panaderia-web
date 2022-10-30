import React from 'react';
import logo from '../../assets/media/img/logo-panaderia.png';

const Footer = () => {
    return (
        <footer className='sec-footer'>
            <div className='footer-info'>
                <div className='footer-img' >
                    
                    <ul className='list'>
                        <li><i className="bi bi-facebook"></i></li>
                        <li><i className="bi bi-instagram"></i></li>
                        <li><i className="bi bi-whatsapp"></i></li>
                    </ul> 
                    <img className='footer-logo' src={ logo } alt='logo-panaderia' />  
                </div>
                <ul className='list'>
                    <li><i className="bi bi-phone-fill"></i>  +300-XXX-XXX-XX</li>
                    <li><i className="bi bi-envelope-fill"></i>  info@panaderia-web.com</li>
                    <li><i className="bi bi-geo-alt-fill"></i>  Av. siempre Viva 123</li>
                </ul>
                
            </div>
            <div className='copyrigth'>
                <footer>&copy; Copyright 2022 | Todos los derechos reservados</footer>
            </div> 
        </footer>
    );
}

export default Footer;
