import React from 'react'
import { ContactUs } from '../Contact/ContactUs'
import './ContactPage.css'

const ContactPage = () => {
    return (
        <div className="contactpage">
            <div className="contact__title">
                <h2>Contact Us</h2>
            </div>
            <div className="contact__top">
                <div className="contact__top__left">
                    <h2>Location :</h2>
                    <h3>
                    Flat no 1403 ,block no 1, <br />
                    gaythri towers ,opp : kalki gardens, <br />
                madinaguda ,miyapur ,500050 <br />
                Land mark : near dr kallam
                anji reddy foundation
                        <br />
                        Hyderabad,Telangana
                    </h3>
                </div>
                <div className="contact__top__right">
                    <a href="mailto:vennalaworks25@gmail.com"><p>vennalaworks25@gmail.com</p></a>
                    <a href="tel:+919618606060">
                        <p>
                            <i class="fa fa-phone" aria-hidden="true"></i> +91 96186 06060
                        </p>
                    </a>
                    
                </div>
            </div>
            <div className="contact__title">
                <h2>Reach Us</h2>
            </div>
            <div className="contact__bottom">
                <div className="contact__bottom__left">
                    <div className="contact__img-box" >
                        <img src="https://firebasestorage.googleapis.com/v0/b/vennelaworks-c79d8.appspot.com/o/ravi%2Fravi%20(6).jpeg?alt=media&token=e0d34b78-e761-4147-839a-c5d3c25acc17" alt="" />
                    </div >
                </div>
                <div className="contact__bottom__right">
                    <ContactUs/>
                </div>
            </div>
        </div>
    )
}

export default ContactPage
