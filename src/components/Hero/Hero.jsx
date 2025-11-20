import React from 'react';
import './Hero.css';

const Hero = () => {
    return (
        <section id="hero" className="hero">
            <div className="hero-container">
                <span className="hero-greeting">Hello, I'm</span>
                <h1 className="hero-title">Sumit Wagdare</h1>
                <h2 className="hero-subtitle">Building digital experiences that matter.</h2>
                <p className="hero-description">
                    I'm a software engineer specializing in building (and occasionally designing) exceptional digital experiences. Currently, I'm focused on building accessible, human-centered products.
                </p>
                <div className="hero-cta">
                    <a href="#projects" className="btn btn-primary">Check out my work</a>
                    <a href="#contact" className="btn btn-outline">Get in touch</a>
                </div>
            </div>
        </section>
    );
};

export default Hero;
