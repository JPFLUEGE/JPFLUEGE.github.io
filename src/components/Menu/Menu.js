import React from 'react';
import "./Menu.css"
import Linkedin from "../assets/linkedin.webp";
import About from "../assets/about.webp";
import Contact from "../assets/contact.webp";
import Github from "../assets/github.png";
import CV from "../assets/cv.webp";

class Menu extends React.Component {
    state = {}
    render() {
        return (<div className="container-menu">
            <ul>
                <li><a href="#root"><img src={About} alt="about icon" /></a></li>
                <li><a href="#root"><img src={CV} alt="cv icon" /></a></li>
                <li><a href="#root"><img src={Contact} alt="contact icon" /></a></li>
                <li><a target="_blank" rel="noreferrer" href="https://www.linkedin.com/in/julian-m-pflueger/"><img src={Linkedin} alt="linkedin icon" /></a></li>
                <li><a target="_blank" rel="noreferrer" href="https://github.com/JPFLUEGE"><img src={Github} alt="github icon" /></a></li>
            </ul>
        </div>);
    }
}
 
export default Menu;