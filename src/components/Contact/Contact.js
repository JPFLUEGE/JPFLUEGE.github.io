import React, { useState } from 'react';
import { useNavigate } from "react-router-dom";
import "./Contact.css"
import Main from "../../util/Main"


const Contact2 = (props) => {

    const [loading, setLoading] = useState(false)
    const [name, setName] = useState("")
    const [mail, setMail] = useState("")
    const [textarea, setTextarea] = useState("")


    const navigate = useNavigate();

    const load = () => {
        if (loading) {
            return <div className="loading">Loading&#8230;</div>
        }
    };

    const handleSub = (e) => {
        e.preventDefault();
        setLoading(true);
        //props.onSubmit()
        Main.formSubmit(name, mail, textarea)
        .then(() => setLoading(false))
        .then(() => navigate("/sent"))
    }

    return (
        <div className="container-form">
            {load()}
            <form id="contact-form" onSubmit={handleSub}>
                <div>
                    <input className="name" required placeholder="Name" onChange={e => setName(e.target.value)}></input>
                    <input className="email" required type="email" placeholder="E-Mail" onChange={e => setMail(e.target.value)}></input>
                </div>
                <textarea className="text" type="text" required placeholder="Your message" onChange={e => setTextarea(e.target.value)}></textarea>
                <div className="buttons">
                    <button className="button" type="submit" value="Submit">Send</button>
                    <a className="button" href="https://www.linkedin.com/in/julian-m-pflueger/" target="_blank" rel="noreferrer">via LinkedIn instead</a>
                </div>
            </form>
        </div>
    )
};

export default Contact2;
