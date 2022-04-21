import React from 'react';
import "./Contact.css"

class Contact extends React.Component {
    constructor(props) {
        super(props);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.loading = this.loading.bind(this);
        //to be fixed
        this.state = {
            loading: false
        }
    }

    handleSubmit(event) {
        event.preventDefault();
        this.setState({ loading: true })
        this.props.onSubmit().then(() => this.setState( { loading: false}))
    }

    //TO BE FIXED
    loading() {
        if (this.state.loading) {
            return <div className="loading">Loading&#8230;</div>
        }
    }
   
    render() {
        return (
            <div className="container-form">
                {this.loading()}
                <form id="contact-form" onSubmit={this.handleSubmit}>
                    <div>
                        <input className="name" required placeholder="Name" onChange={this.props.name}></input>
                        <input className="email" required type="email" placeholder="E-Mail" onChange={this.props.mail}></input>
                    </div>
                    <textarea className="text" type="text" required placeholder="Your message" onChange={this.props.textarea}></textarea>
                    <div className="buttons">
                        <button className="button" type="submit" value="Submit">Send</button>
                        <a className="button" href="https://www.linkedin.com/in/julian-m-pflueger/" target="_blank" rel="noreferrer">via LinkedIn instead</a>
                    </div>
                </form>
            </div>
        );
    }
}
 
export default Contact;