import React from "react";
import { Routes, Route } from "react-router-dom";
import "./App.css";

// import components
import Header from "./components/header";
import Home from "./components/home";
import AboutMe from "./components/about-me/about";
import Technology from "./components/about-me/technology";
import Background from "./components/about-me/background";
import Hobby from "./components/about-me/hobby";
import Project from "./components/project/project";
import Writing from "./components/writings/writing";
import Contact from "./components/contact";
import Footer from "./components/footer";

function App() {
  return (
    <div className="screen">
      <Header />
      <Routes>
        <Route index element={<Home />} />
        <Route path="/about" element={<AboutMe />}>
          <Route index element={<Background />} />
          <Route path="technology" element={<Technology />} />
          <Route path="hobby" element={<Hobby />} />
        </Route>
        <Route path="/project" element={<Project />} />
        <Route path="/writing" element={<Writing />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
