import React from "react";
import "./App.css";
import blogPlaceholder from "./blog-placeholder.png";

// navigation bar
const Header = (props) => {
  return (
    <header id="home">
      <div class="header-container">
        <a id="logo" href="#home">
          FLAVIA Y. OUYANG
        </a>
        <div class="nav-parent">
          <nav class="nav-container">
            <a id="nav-link" href="#home">
              HOME
            </a>
            <a id="nav-link" href="#about">
              ABOUT
            </a>
            <a id="nav-link" href="#project">
              PROJECT
            </a>
            <a id="nav-link" href="#blog">
              BLOG
            </a>
            <a id="nav-link" href="#contact">
              CONTACT
            </a>
          </nav>
        </div>
      </div>
    </header>
  );
};

// home Page
const IntroPage = (props) => {
  return (
    <div class="intro-container">
      <p>FRONT-END</p>
      <p>WEB DEVELOPER</p>
      <p>BASED IN MONTRÉAL</p>
      <p>CANADA</p>
    </div>
  );
};

const AboutPage = (props) => {
  return (
    <div class="about-container" id="about">
      <div class="about-banner-container">
        <p class="about-banner-text">ABOUT</p>
        <p class="about-banner-text">
          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;ME
        </p>
      </div>
      <div class="about-me">
        &emsp;I am a senior computer science student at McGill University.
        <br />
        &emsp;I enjoy designing and creating animated & interactive web pages
        and web applications.
        <br />
        &emsp;I am proficient in <strong>JAVASCRIPT</strong>,{" "}
        <strong>Java</strong>,<strong>Python</strong>, <strong>SQL</strong>,{" "}
        <strong>PHP</strong>, React, C, C++, HTML, CSS, Figma and others.
      </div>
    </div>
  );
};

const EmptySpace = (props) => {
  return <div class="empty-space"></div>;
};

const ProjectPage = (props) => {
  return (
    <div class="project-container" id="project">
      <div class="project-banner-container">
        <p class="project-banner-text-1">SELECTED</p>
        <p class="project-banner-text-2">WORKS &nbsp;&nbsp;</p>
      </div>
      <div class="about-me project-text">Under construction...</div>
    </div>
  );
};

const BlogPage = (props) => {
  return (
    <div class="project-container" id="blog">
      <div class="project-banner-container">
        <p class="project-banner-text-1">BLOG</p>
        <p class="project-banner-text-2">OVERVIEW &nbsp;&nbsp;</p>
      </div>
      <img
        src={blogPlaceholder}
        class="project-text blog-placeholder"
        alt="Under Construction Sign"
      ></img>
    </div>
  );
};

const ContactPage = (props) => {
  return (
    <div class="project-container blog-container" id="contact">
      <div class="project-banner-container">
        <p class="project-banner-text-1">SAY HI</p>
        <p class="project-banner-text-2">WHY NOT&nbsp;&nbsp;&nbsp;</p>
      </div>
      <div class="link-container">
        <a href="mailto:flavia.ouyang@mail.mcgill.ca" class="link">
          email
        </a>
        <a
          href="https://twitter.com/FlaviaOuyang"
          class="link"
          target="_blank"
          rel="noreferrer"
        >
          twitter ↗
        </a>
        <a
          href="https://github.com/flaviaouyang"
          class="link"
          target="_blank"
          rel="noreferrer"
        >
          github ↗
        </a>
        <a
          href="https://www.linkedin.com/in/flavia-ouyang/"
          class="link"
          target="_blank"
          rel="noreferrer"
        >
          linkedin ↗
        </a>
      </div>
    </div>
  );
};

const Footer = (props) => {
  return (
    <footer>
      <div class="footer-container">
        <p class="design-by">Designed and made by Flavia O.</p>
        <p class="copyright">&copy;All rights reserved</p>
      </div>
    </footer>
  );
};

function App() {
  return (
    <div>
      <Header />
      <IntroPage />
      <AboutPage />
      <EmptySpace />
      <ProjectPage />
      <BlogPage />
      <ContactPage />
      <Footer />
    </div>
  );
}

export default App;
