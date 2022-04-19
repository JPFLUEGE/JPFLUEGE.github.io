import React from 'react';
import "./Footer.css";

class Footer extends React.Component {
    
    render() { 
        return (<div className="container-footer">
            <ul>
                <li><a href="#root">Impressum</a></li>
                <li><a href="#root">Datenschutz</a></li>
            </ul>
        </div>);
    }
}
 
export default Footer;