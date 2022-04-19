import React from 'react';
import "./Projects.css"
import Demo from "../assets/demo.webp"
import Youtube from "../assets/youtube.png"

class Projects extends React.Component {

    render() {
        return (
            <div className="container-project transition">
                <div className="card transition">
                    <div className="header transition">
                        <div>
                            <h3>{this.props.project.name}</h3>
                            <h4>{this.props.project.scope}</h4>
                        </div>
                        <div className="links transition">
                            <a target="_blank" rel="noreferrer" href={this.props.project.href}><img src={Demo} alt="project link" /></a>
                            <a target="_blank" rel="noreferrer" href={this.props.project.vidSrc}><img src={Youtube} alt="youtube demo video link" /></a>
                        </div>
                    </div>
                    <div className="info cta-container transition">
                        <p><b>Lang: </b>{this.props.project.lang}</p>
                        <p><b>Tech: </b>{this.props.project.tech}</p>
                        <p><b>Explanation: </b>{this.props.project.explanation}</p>
                    </div>
                </div>
            </div>
        );
    }
}
 
export default Projects;