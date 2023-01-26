import React from 'react';
import './Contact.css';
import { ContactUs } from './ContactUs';

const Contact = () => {
    return (
        <div className="contact">
            <div className="contact__left">
                <h2 className="contact-title"> Get In Touch</h2>
                <p>Vennela has a unique vision to stand best among the world-class furniture and space management industries with utmost customer happiness. Vennela also aims to be in the top 10 list of client-friendly interior designer firms. Our work speaks more about our commitment and experience.</p>
                <br />
                <div className="contact__details">
                    <h3>Phone</h3>
                    <p>
                        <a href="tel:+919581662666">
                            +91 958 166 2666
                        </a>
                    </p>


                    <br />
                    <h3>Email</h3>
                    <p>
                        <a href="mailto:vennelaworks25@gmail.com">
                            vennelaworks25@gmail.com
                        </a>
                    </p>

                </div>


            </div>
            <div className="contact__right">
                <h2 className="contact-title"> Contact Form</h2>
                <ContactUs />
            </div>

        </div>
    )
}

export default Contact
