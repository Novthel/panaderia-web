import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import logo from '../../assets/media/img/logo-panaderia.png';

const Header = () => {

    const [showMenu, setShowMenu] = useState(false);

    const toggleMenu =()=> {
        setShowMenu(!showMenu)
    }

    return (
        <>
            <nav className='sec-header'>
                <ul className={`nav-menu ${ showMenu ? 'show ':' none' }`} >
                    <li><Link to='/'  onClick={ toggleMenu } >Inicio</Link></li>
                    <li><Link to='/info'  onClick={ toggleMenu } >Conocenos</Link></li>
                    <li><Link to='/contacto'  onClick={ toggleMenu } >Contactanos</Link></li>
                </ul> 
                <div  className='nav-logo'>
                    <img src={ logo } alt='logo-panaderia' />
                </div>
                <ul className={`nav-menu nav-menu-2 ${ showMenu ? 'show ':' none' }`}>
                    <li><Link to='/menu'  onClick={ toggleMenu } >Menu</Link></li>
                    <li><Link to='/login'  onClick={ toggleMenu } >Login</Link></li>
                    <li><Link to='/registro'  onClick={ toggleMenu } >Registro</Link></li>
                </ul> 
                <button className='hamb' onClick={ toggleMenu } ><i className="bi bi-list"></i></button>  
            </nav>
        </>
    );
}

export default Header;
