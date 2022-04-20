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



class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {Projects: []}
    this.getProjects = this.getProjects.bind(this);
  };

  projects = [{
    id: 1,
    name: "Song Recommendations",
    scope: "Full Stack Web Development",
    lang: "HTML, CSS, Javascript",
    tech: "React (Frontend), Express (Backend), Cookies, Oauth2, APIs",
    href: "www.google.de",
    vidSrc: "https://www.youtube.com/",
    explanation: "Oauth2 and all external requests handled via backend in Express.js. Returned user token saved in session encrypted HTTPonly cookie."
},
{
    id: 2,
    name: "Sudoku Solver",
    scope: "Front-end Web Development",
    lang: "HTML, CSS, Vanilla Javascript",
    tech: "APIs, Express",
    href: "www.google.de",
    vidSrc: "https://www.youtube.com/",
    explanation: "Provided Sudoku puzzle from user is send to an API. Returned solution is autopopulated. Mini backend in Express.js for hiding API key."
},
{ 
    id: 3,
    name: "Machine Learning Titanic",
    scope: "Data Science & Web Development",
    lang: "HTML, CSS, Javascript, Python",
    tech: "React (Frontend), Flask (Backend), scikit-learn (Machine Learning library), APIs",
    href: "www.google.de",
    vidSrc: "https://www.youtube.com/",
    explanation: "Data Science training project to get to know Machine Learning and Flask in Python."
}]


  getProjects() {
    this.setState({Projects: this.projects})
  } 

  render() {
    return (
      <BrowserRouter>
        <div className="container-background">
          <Landing />
          <Routes>
            <Route path="/" element={<ProjectList projects={this.state.Projects} />} />
            <Route path="/about" element={<About />} />
            <Route path="/cv" element={<CV />} />
            <Route path="/contact" element={<Contact />} />
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