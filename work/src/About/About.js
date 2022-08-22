import React from 'react'
import { Link } from 'react-router-dom'
import './About.css'
function About() {
    return (
        <div className="about">
            <div className="about__left">
                <h2 className="about-title"> About Us</h2>
                <p className="para-content">
                Vennela works kick-started in the year 2009 with a high ambition of bringing a revolutionary change in smart interiors. With exceptional experience for a decade, we are completely engaged in client satisfying projects with our touch of excellence in space management, smart interiors, and customized architectural designs.
                </p>
                <br/>
                <p className="para-content">
                The best look and feel of your interiors can be a part of your happiness and motivation. Vennela works can proudly say that we will be the part of your progressions by adding more beauty to your choice of interior designs.

Quality and Warranty are our assured promises to our clients which speaks our commitment. We tend to incorporate the current trends into our work culture and bring the best of art designs.
                </p>
                <div class="hero-btn">
                    <Link to="/contact" class="btn"> Contact Us</Link>
                </div>
                
            </div>
            <div className="about__right">

            </div>
            
        </div>
    )
}

export default About
