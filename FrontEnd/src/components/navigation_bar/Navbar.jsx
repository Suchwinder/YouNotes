import React from 'react';
import './Navbar.css';
import { Link } from 'react-scroll';



const Navbar = props => (
    <header className='navbar'>
        <nav className='navbar-options'>
            <div></div>
            <div className='navbar-items'>
                <ul>
                    <li><Link to='homepage' smooth={true} duration={1000}>YouNotes</Link></li>
                    <li><Link to='main' smooth={true} duration={1000}> About</Link></li>
                    <li><Link to='contact' smooth={true} duration={1000}>Contact</Link></li>
                    <li><Link to='main' smooth={true} duration={1000}>Login/Signup</Link></li>
                </ul>
            </div>
        </nav>
    </header>
);


export default Navbar;
