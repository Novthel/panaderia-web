import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import logo from '../../assets/media/img/logo-panaderia.png';

/**
 * 
 * @returns render the view of the navigation menus and the logo
 */

const Header = () => {

    const [showMenu, setShowMenu] = useState(false);

    const toggleMenu =()=> {
        setShowMenu(!showMenu)
    }

    return (
        <>
            <nav className='sec-header'>
                <ul className={`nav-menu ${ showMenu ? 'show ':' none' }`} >
                    <li><Link to='/'  onClick={ toggleMenu } >INICIO</Link></li>
                    <li><Link to='/info'  onClick={ toggleMenu } >CONOCENOS</Link></li>
                    <li><Link to='/contact'  onClick={ toggleMenu } >CONTACTANOS</Link></li>
                </ul> 
                <div  className='nav-logo'>
                    <img src={ logo } alt='logo-panaderia' />
                </div>
                <ul className={`nav-menu nav-menu-2 ${ showMenu ? 'show ':' none' }`}>
                    <li><Link to='/menu'  onClick={ toggleMenu } >MENU</Link></li>
                    <li><Link to='/login'  onClick={ toggleMenu } >LOGIN</Link></li>
                    <li><Link to='/registro'  onClick={ toggleMenu } >REGISTRO</Link></li>
                </ul> 
                <div className= 'company-name'>PANADERIA-NOVTHEL</div>
                <button className='hamb' onClick={ toggleMenu } ><i className="bi bi-list"></i></button>  
            </nav>
        </>
    );
}

export default Header;
