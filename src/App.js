import React from 'react';
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";

import './App.css';

import Landing from "./components/Landing/Landing"
import ProjectList from "./components/ProjectList/ProjectList"
import Footer from "./components/Footer/Footer"
import Menu from "./components/Menu/Menu"
import CV from "./components/CV/CV"
import About from "./components/About/About"
import Contact from "./components/Contact/Contact"
import Sent from "./components/Sent/Sent"
import Impressum from "./components/Impressum/Impressum"
import Datenschutz from "./components/Datenschutz/Datenschutz"

import yelpo from "./components/assets/yelpo.PNG"

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      Projects: [],
    }

    this.getProjects = this.getProjects.bind(this);
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
    href: "",
    vidSrc: "https://youtu.be/zxrxqRI8P5g/",
    explanation: "OAuth and all external requests handled via backend in Express.js. Returned user token saved in encrypted HTTPonly session cookie. API used: Spotify"
  },
  {
    id: 3,
    name: "Restaurant Search",
    scope: "Frontend Web Development",
    lang: "HTML, CSS, Javascript",
    tech: "React, API",
    href: "https://github.com/JPFLUEGE/Restaurant_Finder",
    vidSrc: "",
    explanation: "Search by name or location for a restaurant and sort it based on 'Best Match', 'Rating' or 'Most Reviewed'. API used: Yelp"
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
            <Route path="/legal" element={<Impressum />} />
            <Route path="privacy" element={<Datenschutz />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
          <Menu />
          <Footer />
        </div>
      </BrowserRouter>
    )
  }

  componentDidMount() {
    // might implement backenddd instead of hardcode
    this.getProjects();
  }
}

export default App;