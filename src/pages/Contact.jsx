import emailjs from '@emailjs/browser';
import { useState, useRef } from "react";
import { Spinner } from 'react-bootstrap';

// CSS
import "../css/Contact.css";

function Contact() {
    const [loading, setLoading] = useState(false);
    const [resultStr, setResultStr] = useState("");
    const form = useRef();

    const sendEmail = (e) => {
        e.preventDefault();
        setLoading(true);
        const emailVal = form.current.user_email.value;
        const subjectVal = form.current.subject.value;
        const messageVal = form.current.message.value;

        if (emailVal === "" || subjectVal === "" || messageVal === "") {
            console.log("One of the textfields are empty, returning and not sending");
            setResultStr("One of the fields is empty, please fill it in.");
            setLoading(false);
            return;
        }

        emailjs
            .sendForm("service_b40t07w", "template_vgv1b0q", form.current, {
                publicKey: "cQhMOY4rUlzsU5dVa",
            })
            .then(
                () => {
                    form.current.reset();
                    setResultStr("Sent message");
                    setLoading(false);
                },
                (error) => {
                    console.log('FAILED...', error.text);
                    setResultStr("Error with sending message, please try again.");
                    setLoading(false);
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
                        <input className="form-input" placeholder="email" name="user_email" />
                    </div>

                    <div className="form-item">
                        <label className="form-label">Subject:</label>
                        <input className="form-input" placeholder="subject" name="subject" />
                    </div>

                    <div className="form-item">
                        <label className="form-label">Message:</label>
                        <textarea className="form-textarea" placeholder="message" name="message" />
                    </div>


                    { !loading &&
                        <button type="submit" className="submit-btn fade-in">
                            Send
                        </button>
                    }

                    { loading && 
                        <Spinner style={{marginLeft: "20px"}} className="fade-in loading-icon"/>
                    }

                    <label 
                        style={{color: resultStr === "Sent message" ? "lime" : "red"}}
                        className="fade-in-slow result-label">
                        {resultStr}
                    </label>
                </form>
            </div>
        </div>
    );
}

export default Contact;
