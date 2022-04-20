import React from 'react';
import "./Contact.css"

class Contact extends React.Component {

    render() { 
        return (<div className="container-form">
            <form id="contact-form">
                <input className="name" required></input>
                <input className="email" required></input>
                <input className="text" required></input>
                <button type="submit"></button>
            </form>
        </div>);
    }
}
 
export default Contact;