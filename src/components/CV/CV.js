import React from 'react';
import "./CV.css"
import {Link} from "react-router-dom"
import Julian from "../assets/Julian_Pflueger.pdf"

class CV extends React.Component {
    render() {
        return (
            <div className="container-cv">
                <div className="download">
                <a target="_blank" rel="noreferrer" href={Julian}>
                    <button>Download unshortened CV
                        <p><Link to="/contact">Contact me</Link> for file password</p>
                    </button></a>

                </div>
                <div className="cv">
                    <h4>Work Experience</h4>
                    <ul className="experience">
                        <li className="bd">
                            <div className="head">
                            <h5>Business & Data Analyst</h5>
                            <p className="dates">December 2021 - present</p>
                            </div>
                            <ul>
                                <li>Set up and responsible for a Power BI dashboard reporting solution with ten new operational and financial reports for Terminal Handling Europe</li>
                                <li>Documented engineering requirements to improve current software abilities for better data quality, user experience and more efficient processes</li>
                                <li>Provided with success one-time analysis for project evaluations</li>
                            </ul>
                        </li>
                        <li className="pp">
                            <div className="head">
                                <h5>Process & Project Manager</h5>
                                <p className="dates">September 2016 - December 2021</p>
                            </div>
                            <ul>
                                <li>Developed processes and owned projects for biggest network customers and their Control Towers</li>
                                <li>Used my process knowledge and prior gained skills as a software expert trainer to decrease process related costs by optimizing, automating, and establishing new processes</li>
                                <li>Identified (revenue) possibilities, managed resulting projects as an expert </li>
                                <li>Created cross functional reports and KPIs by applying business logic </li>
                                <li>Analyzed operational data for gap identifications and shared or presented my insights management-appropriated</li>
                                <li>Took up feedback of internal customers, evaluated improvements, issued IT demands by writing user stories and tested related software deployments on test environments across multiple applications</li>
                                <li>Utilized self-learned skills to automate or to improve tasks</li>
                                <li>Reviewed processes in different branches nationwide, logged and tracked the findings</li>
                            </ul>
                        </li>
                        <li className="st">
                            <div className="head">
                                <h5>Software expert trainer</h5>
                                <p className="dates">Februar 2015 - September 2016</p>
                            </div>
                            <ul>
                                <li>Gained knowledge about new software programs and entire business process chain by using try & error as well as reading specifications </li>
                                <li>Trained other trainers and during software roll-out new users </li>
                                <li>Travelled nationwide for meeting and training purposess</li>
                            </ul>
                        </li>
                    </ul>
                    <h4 className="ls-head">Leadership Experience</h4>
                    <ul className="leadership">
                        <li>Led functionally the regional team of 8 members as a software expert trainer and functionally as a process manager two control towers with 15 colleagues</li>
                        <li>Managed as a project manager various projects involving several cross-functional parties</li>
                        <li>Shared my software and process knowledge and trained direct or cross-functional colleagues </li>
                    </ul>
                    <h4 className="skills-head">Skills</h4>
                    <ul className="skills">
                        <li>HTML, CSS</li>
                        <li>JavaScript</li>
                        <li>React as frontend framework</li>
                        <li>Microsoft 365</li>
                        <li>Languages: German (native), English (good knowledge)</li>
                        <li>Python and SQL (used in past)</li>
                    </ul>
                </div>
            </div>
        );
    }
}

export default CV;