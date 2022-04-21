import React from 'react';
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";

import Main from "./util/Main.js"
import './App.css';

import Landing from "./components/landing/Landing"
import ProjectList from "./components/ProjectList/ProjectList"
import Footer from "./components/Footer/Footer"
import Menu from "./components/Menu/Menu"
import CV from "./components/CV/CV"
import About from "./components/About/About"
import Contact from "./components/Contact/Contact"
import Sent from "./components/Sent/Sent"
import Impressum from "./components/Impressum/Impressum"
import Datenschutz from "./components/Datenschutz/Datenschutz"



class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      Projects: [],
      Name: "",
      Mail: "",
      Textarea: ""
    }

    this.getProjects = this.getProjects.bind(this);
    this.formSubmit = this.formSubmit.bind(this);
    this.handleChangeName = this.handleChangeName.bind(this); 
    this.handleChangeMail = this.handleChangeMail.bind(this);
    this.handleChangeTextarea = this.handleChangeTextarea.bind(this);
  };

  projects = [{
    id: 1,
    name: "Portfolio Website",
    scope: "Frontend Web Development",
    lang: "HTML, CSS, Javascript",
    tech: "React (Frontend)",
    href: "",
    vidSrc: "",
    explanation: "Current minimalistic portfolio website created with React.js"
  },
  {
    id: 2,
    name: "Song Recommendations",
    scope: "Full Stack Web Development",
    lang: "HTML, CSS, Javascript",
    tech: "React (Frontend), Express (Backend), Cookies, Oauth2, APIs",
    href: "www.google.de",
    vidSrc: "https://www.youtube.com/",
    explanation: "OAuth and all external requests handled via backend in Express.js. Returned user token saved in encrypted HTTPonly session cookie."
  },
  {
    id: 3,
    name: "Sudoku Solver",
    scope: "Frontend Web Development",
    lang: "HTML, CSS, Javascript",
    tech: "APIs, Express",
    href: "",
    vidSrc: "",
    explanation: "Provided Sudoku puzzle from user is send to an API. Returned solution is autopopulated. Mini backend in Express.js for hiding API key."
  }]

  getProjects() {
    this.setState({ Projects: this.projects})
  } 

  handleChangeName(e) {
    this.setState({ Name: e.target.value });
  }

  handleChangeMail(e) {
    this.setState({ Mail: e.target.value })
  }

  handleChangeTextarea(e) {
    this.setState({ Textarea: e.target.value })
  }

  formSubmit() {
    Main.formSubmit(this.state.Name, this.state.Mail, this.state.Textarea).then(() => this.setState({
      Name: "",
      Mail:"",
      Textarea:""
    }))
    .then(() => {
      window.location = "/sent";
    });
  }

  

  render() {
    return (
      <BrowserRouter>
        <div className="container-background">
          <Landing />
          <Routes>
            <Route path="/" element={<ProjectList projects={this.state.Projects} />} />
            <Route path="/sent" element={<Sent />} />
            <Route path="/about" element={<About />} />
            <Route path="/cv" element={<CV />} />
            <Route path="/legal" element={<Impressum /> } />
            <Route path="privacy" element={<Datenschutz /> } />
            <Route path="/contact" element={<Contact name={this.handleChangeName} mail={this.handleChangeMail} textarea={this.handleChangeTextarea} onSubmit={this.formSubmit} />} />
          </Routes>
          <Menu />
          <Footer />
        </div>
      </BrowserRouter>
    )
  }

  componentDidMount() {
    this.getProjects()
  }

}

 
export default App;