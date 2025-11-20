import React from 'react';
import './Navbar.css';

const Navbar = () => {
    return (
        <nav className="navbar">
            <div className="navbar-container">
                <a href="#" className="navbar-logo">Portfolio.</a>
                <ul className="navbar-menu">
                    <li className="navbar-item"><a href="#hero" className="navbar-link">Home</a></li>
                    <li className="navbar-item"><a href="#skills" className="navbar-link">Skills</a></li>
                    <li className="navbar-item"><a href="#projects" className="navbar-link">Projects</a></li>
                    <li className="navbar-item"><a href="#contact" className="navbar-link">Contact</a></li>
                </ul>
            </div>
        </nav>
    );
};

export default Navbar;
