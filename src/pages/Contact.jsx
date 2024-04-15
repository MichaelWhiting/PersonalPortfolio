import emailjs from '@emailjs/browser';
import { useState, useRef } from "react";

// CSS
import "../css/Contact.css";

function Contact() {
    const form = useRef();

    const sendEmail = (e) => {
        e.preventDefault();
    
        emailjs
          .sendForm("service_b40t07w", "template_vgv1b0q", form.current, {
            publicKey: "cQhMOY4rUlzsU5dVa",
          })
          .then(
            () => {
              console.log('SUCCESS!');
            },
            (error) => {
              console.log('FAILED...', error.text);
            },
          );
      };

    return (
        <div className='outer-div fade-in'>
            <div className="contact-info">
                <h1>Contact Infomation:</h1>
                <label className="contact-item">Phone #: 801-310-6246</label>
                <label className="contact-item">Email: michaelbwhiting2004@gmail.com</label>
            </div>
            <br />
            <div className="form-container">
                <form className="form" ref={form} onSubmit={sendEmail}>
                    <h1 className="send-message-label">Send a message:</h1>

                    <div className="form-item">
                        <label className="form-label">Your Email:</label>
                        <input className="form-input" placeholder="email" name="user_email"/>
                    </div>

                    <div className="form-item">
                        <label className="form-label">Subject:</label>
                        <input className="form-input" placeholder="subject" name="subject"/>
                    </div>

                    <div className="form-item">
                        <label className="form-label">Message:</label>
                        <textarea className="form-textarea" placeholder="message" name="message" />
                    </div>

                    <button type="submit" className="submit-btn">
                        Send
                    </button>
                </form>
            </div>
        </div>
    );
}

export default Contact;
