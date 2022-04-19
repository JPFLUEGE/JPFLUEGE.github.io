import React from 'react';
import "./Landing.css";
import Menu from "../Menu/Menu"

class Landing extends React.Component {
 
    render() { 
        return (<div className="container-landing">
            <h1>Julian Pflueger</h1>
            <h2><a href="#root">Data & Business Analyst</a><a href="#root"> Developer</a><a href="#root">Process & Project Manager</a></h2>
        </div>);
    }
}
 
export default Landing;