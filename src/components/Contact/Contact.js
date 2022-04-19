import React from 'react';

class Contact extends React.Component {

    render() { 
        return (<div>
            <form id="contact-form">
                <input className="name" required></input>
                <input className="email" required></input>
                <input className="text" required></input>
                <input type="submit"></input>
            </form>
        </div>);
    }
}
 
export default Contact;