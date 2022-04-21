import React from 'react';
import {Link} from "react-router-dom"
import "./Landing.css";

class Landing extends React.Component {
 
    render() { 
        return (<div className="container-landing">
            <h1>Julian Pflueger</h1>
            <ul>
                <Link to="cv"><li>Business & Data Analyst</li></Link>
                <Link to="/"><li> Developer</li></Link>
                <Link to="cv"><li>Process & Project Manager</li></Link>
            </ul>
        </div>);
    }
}
 
export default Landing;