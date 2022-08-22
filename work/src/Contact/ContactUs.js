import React, { useRef } from 'react';
import './ContactUs.css'
import emailjs from 'emailjs-com';
import { init } from 'emailjs-com';
init("wJUAIXzmpWj0zN4Nv");
export const ContactUs = () => {
  // const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();


    emailjs.sendForm('service_90vdpei', 'template_s5hjdlr', e.target, 'wJUAIXzmpWj0zN4Nv')
      .then((result) => {
        console.log(result.text);
      }, (error) => {
        console.log(error.text);
      });

    e.target.reset()
  };

  return (
    <form className="contactuscard" onSubmit={sendEmail}>
      <label className="alpha">Name</label>
      <input type="text" id="from_name" name="from_name" />
      <label className="alpha" >Email</label>
      <input type="email" name="from_email" id="from_email" />
      <label className="alpha" >Phone Number</label>
      <input type="tel" name="from_number" id="from_number" />
      <label className="alpha" >Message</label>
      <textarea name="from_message" id="from_message" />
      {/* <input type="submit" value="Send" /> */}
      <br />
      <button type="submit" value="Send" class="btn">Send Mail</button>
    </form>
  );
};