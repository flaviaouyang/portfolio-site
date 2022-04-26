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
import CaseStudy from "./components/project/caseStudy";
import Writing from "./components/writing";
import Contact from "./components/contact";
import Footer from "./components/footer";

// images
import Login from "./asset/mcgill.gif";
import Database from "./asset/database.gif";
import Wordle from "./asset/wordle.gif";
import BlackJack from "./asset/blackjack.gif";
import ToDo from "./asset/todo.gif";
import Etch from "./asset/etch.gif";

function App() {
  return (
    <div>
      <Header />
      <Routes>
        <Route index element={<Home />} />
        <Route path="/about" element={<AboutMe />}>
          <Route index element={<Background />} />
          <Route path="technology" element={<Technology />} />
          <Route path="hobby" element={<Hobby />} />
        </Route>
        <Route path="/project" element={<Project />} />
        {/* case studies */}
        <Route
          path="/project/mcgill"
          element={
            <CaseStudy
              description="This website serves as a TA management system for McGill School of Computer Science. 
              I was responsible for UI&UX Design, and front-end development. 
              I implemented the login + registration page, dashboard, rating TA and system operations features."
              role="UI/UX DESIGNER, FRONT-END DEVELOPER"
              year="2022"
              src={Login}
              alt="Landing Page"
            />
          }
        />
        <Route
          path="/project/midwife"
          element={
            <CaseStudy
              description="This database application aims to serve midwives' side of data input and processing. 
              A midwife can use this application to review information. 
              They can check all notes and medical tests related to the parents, add new notes, 
              or prescribe medical tests."
              role="DATABASE DESIGNER, JAVA DEVELOPER"
              year="2022"
              src={Database}
              alt="Database Demo"
            />
          }
        />
        <Route
          path="/project/wordle"
          element={
            <CaseStudy
              description="A command-line wordle game written purely in Python
              Wordle is a puzzle game where the player will try to guess a five-letter word in six tries. 
              The game is originally created by Josh Wardle."
              role="PYTHON DEVELOPER"
              year="2022"
              src={Wordle}
              alt="Wordle Demo"
            />
          }
        />
        <Route
          path="/project/blackjack"
          element={
            <CaseStudy
              description="This is a CommandLine BlackJack Game written in C++. Developed with principles of object oriented programming in mind."
              role="C++ DEVELOPER"
              year="2022"
              src={BlackJack}
              alt="Blackjack Demo"
            />
          }
        />
        <Route
          path="/project/todo"
          element={
            <CaseStudy
              description="One hour project to learn Flask and Jinja"
              role="PYTHON DEVELOPER"
              year="2021"
              src={ToDo}
              alt="to do list Demo"
            />
          }
        />
        <Route
          path="/project/etch-a-sketch"
          element={
            <CaseStudy
              description="A simple browser etch-a-sketch program built with vanilla JavaScript."
              role="JavaScript DEVELOPER"
              year="2021"
              src={Etch}
              alt="etch a sketch Demo"
            />
          }
        />
        <Route path="/writing" element={<Writing />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
