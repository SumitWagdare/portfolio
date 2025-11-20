import React from 'react';
import './Footer.css';

const Footer = () => {
    return (
        <footer className="footer">
            <div className="footer-container">
                <p>&copy; {new Date().getFullYear()} Portfolio. All rights reserved.</p>
                <div className="footer-socials">
                    {/* Social links placeholders */}
                    <a href="#" className="footer-link">Twitter</a>
                    <a href="#" className="footer-link">LinkedIn</a>
                    <a href="#" className="footer-link">GitHub</a>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
