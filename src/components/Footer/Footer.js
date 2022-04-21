import React from 'react';
import { Link } from "react-router-dom"
import "./Footer.css";


class Footer extends React.Component {
    
    render() { 
        return (<div className="container-footer">
            <ul>
                <Link to="/legal"><li>Legal notice / Impressum</li></Link>
                <Link to="/privacy"><li>Privacy policy / Datenschutz</li></Link>
            </ul>
        </div>);
    }
}
 
export default Footer;