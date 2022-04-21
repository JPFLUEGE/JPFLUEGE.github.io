import React from 'react';
import "./Contact.css"

class Contact extends React.Component {

    render() { 
        return (
        <div className="container-form">
                <form id="contact-form">
                    <div>
                        <input className="name" required placeholder="Name"></input>
                        <input className="email" required type="email" placeholder="E-Mail"></input>
                    </div>
                    <textarea className="text" type="text" required placeholder="Your message"></textarea>
                    <button type="submit">Send</button>
                </form>
            </div>
        );
    }
}
 
export default Contact;