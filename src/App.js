import React from "react";
import "./App.css";
import Header from "./components/Header";
import Contact from "./components/Contact";
import About from "./components/About";
import Skills from "./components/Skills";
import Education from "./components/Education";
import WorkExperience from "./components/WorkExperience";

const App = () => (
  <div className="app">
    <Header />
    <div className="homepage">
      <div className="left-div">
        <Contact />
        <Skills />
        <Education />
      </div>
      <hr/>

      <div className="right-div">
        <About />
        <WorkExperience />
      </div>

    </div>
  </div>
);

export default App;
