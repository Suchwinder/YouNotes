import React from 'react';
import './Navbar.css';


const Navbar = props => (
    <header className='navbar'>
        <nav className='navbar-options'>
            <div></div>
            <div className='navbar-items'>
                <ul>
                    <li><a href='/'>YouNotes</a></li>
                    <li><a href='/'> About</a></li>
                    <li><a href='/'>Contact</a></li>
                </ul>
            </div>
        </nav>
    </header>
);


export default Navbar;
