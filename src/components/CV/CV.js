import React from 'react';
import "./CV.css"
import {Link} from "react-router-dom"
import Julian from "../assets/Julian_Pflueger.pdf"

class CV extends React.Component {
    render() {
        return (
            <div className="container-cv">
                <div className="download">
             

                </div>
                <div className="cv">
                    <h4>Work Experience</h4>
                    <ul className="experience">
                        <li className="bd">
                            <div className="head">
                            <h5>Business Data Analyst, Terminal Handling</h5>
                            <p className="dates">December 2021 - present</p>
                            </div>
                            <ul>
                                <li>Implemented Power BI dashboard reporting solutions to generate operational and financial reports for two departments</li>
                                <li>Collaborated with cross-functional teams to gather requirements and design new software functionalities. Goal was to enhance the existing software capabilities to ensure better data quality, user experience, and streamlined processes</li>
                                <li>Assessed and analyzed demands from various stakeholders to determine their alignment with standard business processes</li>
                                <li>Conducted monthly calls with 12 clusters existing of the European countries to review and discuss key performance indicators (KPIs) and findings which allowed for alignment on operational adjustments and the identification of areas requiring improvement or optimization</li>
                                <li>Executed ad hoc analyses and provided new business insights by developing new reports and reporting logics</li>
                            </ul>
                        </li>
                        <li className="pp">
                            <div className="head">
                                <h5>Customer Process Manager, Business Services</h5>
                                <p className="dates">September 2016 - December 2021</p>
                            </div>
                            <ul>
                                <li>Developed processes and led the projects for the largest network customers including e. g. Amazon Inbound Preferred Carrier Program, internal cooperation with Schenker Ocean Freight as well as Bosch and Porsche</li>
                                <li>Identified revenue increasing and cost decreasing opportunities and leveraged my experience as well as knowledge of internal systems to drive overall improvements resulting significant increase in revenue</li>
                                <li>Functionally managed end-to-end customer control towers that operated specifically for large customers and their non-standard business needs</li>
                                <li>Translated business needs into clear, concise and actionable requirements specifications as well as managing, prioritizing and testing multiple requirements across complex projects</li>
                                <li>Took a personal interest in data analysis and programming allowing me to implement a Power BI dashboard solution as well as using Python to automate manual tasks</li>
                            </ul>
                        </li>
                        <li className="st">
                            <div className="head">
                                <h5>Software expert trainer</h5>
                                <p className="dates">Februar 2015 - September 2016</p>
                            </div>
                            <ul>
                                <li>Led functionally the regional team of 8 members</li>
                                <li>Developed expertise in the new transport management software and organization-wide business processes and workforce</li>
                                <li>Identified software and process gaps by valuating processes and performance of various branches</li>
                                <li>Delivered training programs for other trainers and end-users</li>
                                <li>Created and maintained documentations, user stories as well as training resources</li>
                            </ul>
                        </li>
                    </ul>
                    <h4 className="education-head">Education</h4>
                    <ul className="education">
                        <li>Freight forwarding Apprenticeship diploma</li>
                        <li>General Certificate of Secondary Education completed with distinction</li>
                    </ul>
                    <h4 className="skills-head">Other skills and interests</h4>
                    <ul className="skills">
                        <li>Languages: German (native) & English (proficient)</li>
                        <li>Power BI & Microsoft 365</li>
                        <li>HTML, CSS, JavaScript, SQL</li>
                        <li>Personal frontend web development projects and exploring new technologies</li>
                        <li>Researching academic papers about nutrition and health</li>
                        <li>Calisthenics</li>
                    </ul>
                </div>
            </div>
        );
    }
}

export default CV;