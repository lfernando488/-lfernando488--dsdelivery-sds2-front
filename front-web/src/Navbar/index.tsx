import React from 'react';
import { Link } from 'react-router-dom';
import { ReactComponent as Logo } from './Logo.svg'; 
import './styles.css';

function Navbar(){
    return(
        <nav className="main-navbar">
            <Link to="/" className="logo-text">
                <Logo/>
            </Link>
        </nav>
    )
}

export default Navbar;