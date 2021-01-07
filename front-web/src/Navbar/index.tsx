import React from 'react';
import { ReactComponent as Logo } from './Logo.svg'; 
import './styles.css';

function Navbar(){
    return(
        <nav className="main-navbar">
            <a href="home" className="logo-text">
                <Logo/>
            </a>
        </nav>
    )
}

export default Navbar;