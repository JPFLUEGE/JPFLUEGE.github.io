import React from 'react';
import "./Sent.css"

class Sent extends React.Component {
    constructor(props) {
        super(props);
        this.redirect = this.redirect.bind(this);
    }

    redirect() {
        setTimeout(() => {window.location.href="/"}, 4000);   
    }

    render() { 
        return (
        <div className="container-sent">
            <h3>Thank you for your message!</h3>
            <p>You will be automatically redirected.</p>
        </div>
        );
    }

    componentDidMount() {
        this.redirect();
    }
}

export default Sent;