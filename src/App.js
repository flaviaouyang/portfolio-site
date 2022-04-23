import React from "react";
import { Routes, Route } from "react-router-dom";
import "./App.css";

// import components
import Header from "./components/header";
import Home from "./components/home";
import AboutMe from "./components/about";
import Technology from "./components/technology";
import Project from "./components/project/project";
import Writing from "./components/writings/writing";
import Contact from "./components/contact";
import Footer from "./components/footer";

function App() {
  return (
    <div>
      <Header />
      <Routes>
        <Route index element={<Home />} />
        <Route path="/about" element={<AboutMe />} />
        <Route path="/tech" element={<Technology />} />
        <Route path="/project" element={<Project />} />
        <Route path="/writing" element={<Writing />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
