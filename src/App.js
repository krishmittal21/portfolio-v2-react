import React from "react"
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import NavBar from "./navBar/NavBar.js";
import Home from "./home/Home.js";
import Skills from "./skills/Skills.js";
import Projects from "./projects/Projects.js";
import Contact from "./contact/Contact.js";
const App=()=> {
  return (
    <>
    <Router>
      <NavBar/>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/skills" element={<Skills/>}/>
        <Route path="/projects" element={<Projects/>}/>
        <Route path="/contact" element={<Contact/>}/>
      </Routes>
    </Router>
    </>
  );
}

export default App;
