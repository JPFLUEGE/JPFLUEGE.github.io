import React from 'react';
import { Link } from "react-router-dom"
import "./Menu.css"
import Linkedin from "../assets/linkedin.webp";
import About from "../assets/about.webp";
import Contact from "../assets/contact.webp";
import Github from "../assets/github.png";
import Dev from "../assets/dev.webp";
import CV from "../assets/cv.webp";



class Menu extends React.Component {
    state = {}
    render() {
        return (<nav className="container-menu">
            <ul>
                <li><Link to="/"><img className="dev" src={Dev} alt="development" /></Link></li>
                <li><Link to="/about"><img src={About} alt="about" /></Link></li>
                <li><Link to="/cv"><img src={CV} alt="CV" /></Link></li>
                <li><Link to="/contact"><img src={Contact} alt="contact" /></Link></li>
                <li><a target="_blank" rel="noreferrer" href="https://www.linkedin.com/in/julian-m-pflueger/"><img src={Linkedin} alt="linkedin profil" /></a></li>
                <li><a target="_blank" rel="noreferrer" href="https://github.com/JPFLUEGE"><img src={Github} alt="github profil" /></a></li>
            </ul>
        </nav>);
    }
}
 
export default Menu;