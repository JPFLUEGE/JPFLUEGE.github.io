import React from 'react';
import "./ProjectList.css"
import Projects from "../Projects/Projects"

class ProjectList extends React.Component {
    
    render() {
        return (<div className="container-projectlist">
            <ul>
                {this.props.projects.map(project => {
                    return <li><Projects project={project} key={project.id}/> </li>
                })}
            </ul>
        </div>);
    }
}
 
export default ProjectList;