import React from 'react';
import logo from '../../assets/media/img/logo-panaderia.png';

const Header = () => {
    return (
        <nav className='sec-header'>
            <ul className='nav-menu'>
                <li>Inicio</li>
                <li>Nosotros</li>
                <li>Contacto</li>
            </ul> 
            <div  className='nav-logo'>
                <img src={ logo } alt='logo-panaderia' />
            </div>
            <ul className='nav-menu'>
                <li>Menu</li>
                <li>Login</li>
                <li>Registro</li>
            </ul>  
        </nav>
    );
}

export default Header;
